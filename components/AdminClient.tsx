"use client";

import { useEffect, useState } from "react";

async function hashKey(value: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

interface AdminClientProps {
  expectedHash: string;
}

type Collection = "apps" | "games";

type JsonRecord = Record<string, unknown> | Record<string, unknown>[];

export function AdminClient({ expectedHash }: AdminClientProps) {
  const [inputKey, setInputKey] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<Collection, string>>({ apps: "", games: "" });
  const [status, setStatus] = useState<string | null>(null);

  const authenticated = Boolean(token);

  useEffect(() => {
    if (!authenticated || !token) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        for (const collection of ["apps", "games"] as const) {
          const response = await fetch(`/api/content/${collection}`, {
            headers: {
              "x-admin-token": token
            }
          });
          const json = await response.json();
          setData((prev) => ({ ...prev, [collection]: JSON.stringify(json, null, 2) }));
        }
      } catch (fetchError) {
        console.error(fetchError);
        setError("Não foi possível carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [authenticated, token]);

  const handleAccess = async () => {
    setError(null);
    const hashed = await hashKey(inputKey);
    if (hashed === expectedHash) {
      setToken(hashed);
      setInputKey("");
    } else {
      setError("Chave incorreta");
    }
  };

  const handleSave = async (collection: Collection) => {
    if (!token) return;
    setStatus(null);
    try {
      const parsed = JSON.parse(data[collection]) as JsonRecord;
      const response = await fetch(`/api/content/${collection}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token
        },
        body: JSON.stringify(parsed)
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      setStatus(`Dados de ${collection} atualizados.`);
    } catch (saveError) {
      console.error(saveError);
      setStatus(`Erro ao salvar ${collection}: ${(saveError as Error).message}`);
    }
  };

  if (!authenticated) {
    return (
      <div className="mx-auto flex max-w-sm flex-col gap-4 rounded-3xl border border-aurum/30 bg-ivory/90 p-8">
        <h1 className="text-xl font-semibold text-midnight">Acesso restrito</h1>
        <p className="text-sm text-midnight/70">
          Informe a chave administrativa para editar a curadoria do portal.
        </p>
        <input
          type="password"
          value={inputKey}
          onChange={(event) => setInputKey(event.target.value)}
          className="rounded-full border border-aurum/30 px-4 py-3 focus:outline-none focus:ring focus:ring-aurum/40"
        />
        <button
          type="button"
          onClick={handleAccess}
          className="rounded-full border border-aurum bg-midnight px-6 py-3 text-xs uppercase tracking-[0.4em] text-ivory transition hover:bg-aurum hover:text-midnight"
        >
          Entrar
        </button>
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-midnight">Curadoria</h1>
        <p className="text-sm text-midnight/70">
          Edite os JSONs abaixo e clique em salvar. As alterações tentam ser commitadas automaticamente.
        </p>
      </div>
      {status ? <p className="text-xs text-aurum">{status}</p> : null}
      {loading ? <p className="text-sm text-midnight/70">Carregando…</p> : null}
      <div className="grid gap-8 md:grid-cols-2">
        {(["apps", "games"] as const).map((collection) => (
          <div key={collection} className="flex flex-col gap-4 rounded-3xl border border-aurum/30 bg-ivory/90 p-6">
            <div>
              <h2 className="text-lg font-semibold text-midnight">{collection.toUpperCase()}</h2>
              <p className="text-xs text-midnight/60">
                Estrutura: lista de objetos com id, name, platform, description, link, status.
              </p>
            </div>
            <textarea
              value={data[collection]}
              onChange={(event) =>
                setData((prev) => ({ ...prev, [collection]: event.target.value }))
              }
              rows={18}
              className="flex-1 rounded-3xl border border-aurum/30 bg-white/70 p-4 font-mono text-xs text-midnight/80 focus:outline-none focus:ring focus:ring-aurum/40"
            />
            <button
              type="button"
              onClick={() => void handleSave(collection)}
              className="self-start rounded-full border border-aurum bg-midnight px-5 py-2 text-xs uppercase tracking-[0.4em] text-ivory transition hover:bg-aurum hover:text-midnight"
            >
              Salvar {collection}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
