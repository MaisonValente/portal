import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { createHash } from "crypto";
import { exec } from "child_process";

const ADMIN_KEY = process.env.ADMIN_KEY ?? "";
const ADMIN_HASH = createHash("sha256").update(ADMIN_KEY).digest("hex");

const DATA_FILES: Record<string, string> = {
  apps: path.join(process.cwd(), "data", "apps.json"),
  games: path.join(process.cwd(), "data", "games.json")
};

async function execAsync(command: string) {
  return await new Promise<void>((resolve, reject) => {
    exec(command, (error) => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
}

export async function GET(
  request: Request,
  { params }: { params: { collection: string } }
) {
  const { collection } = params;
  const filePath = DATA_FILES[collection];
  if (!filePath) {
    return NextResponse.json({ error: "Coleção não encontrada" }, { status: 404 });
  }
  const content = await fs.readFile(filePath, "utf-8");
  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { collection: string } }
) {
  if (!ADMIN_KEY) {
    return NextResponse.json({ error: "Admin não configurado" }, { status: 500 });
  }
  const providedHash = request.headers.get("x-admin-token");
  if (providedHash !== ADMIN_HASH) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { collection } = params;
  const filePath = DATA_FILES[collection];

  if (!filePath) {
    return NextResponse.json({ error: "Coleção não encontrada" }, { status: 404 });
  }

  try {
    const data = await request.json();
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    try {
      await execAsync(`git add ${filePath}`);
      await execAsync(`git commit -m "chore: update ${collection} via admin"`);
    } catch (gitError) {
      console.warn("Falha ao criar commit automático", gitError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
  }
}
