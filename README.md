# Aurelion Portal

Experiência Next.js para o portal **AURAELYUM**, apresentando jogos e aplicativos curados pela Aurelion Labs.

## Pré-requisitos

- Node.js 18+
- npm, pnpm ou yarn

## Instalação

```bash
npm install
```

> O projeto não instala automaticamente dependências neste repositório. Execute o comando acima para preparar o ambiente local.

## Executar localmente

1. Crie um arquivo `.env` com base em `.env.example` e defina `ADMIN_KEY`.
2. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:3000` no navegador.

## Estrutura principal

- `app/(site)` – páginas públicas (Início, Jogos, Aplicativos, Beta, Sobre, Contato).
- `app/admin` – painel restrito para edição dos catálogos.
- `app/api/content/[collection]` – API para leitura/escrita dos JSONs.
- `data/apps.json` e `data/games.json` – fontes de dados consumidas pelas páginas.

## Editando jogos e aplicativos

1. Abra `/admin` no navegador.
2. Informe a chave definida em `ADMIN_KEY`.
3. Edite os JSONs diretamente nas caixas de texto.
4. Clique em **Salvar**. O servidor tentará gravar o arquivo correspondente e criar um commit automático (`chore: update ...`).

> Em ambientes serverless (ex.: Vercel) a etapa de commit automático pode não estar disponível. Utilize o fluxo apenas em ambientes de desenvolvimento ou com permissões apropriadas.

### Estrutura esperada

Cada item deve conter:

```json
{
  "id": "identificador-unico",
  "name": "Nome",
  "platform": "Plataforma",
  "description": "Descrição",
  "link": "URL para TestFlight ou loja",
  "status": "Situação"
}
```

## Atualizando links TestFlight / Google Play

- Ajuste os campos `link` e `status` no JSON correspondente.
- Links que contêm `testflight` aparecem automaticamente na página **Beta**.

## Protegendo /admin

- O acesso exige `ADMIN_KEY`.
- A verificação compara o hash SHA-256 da chave; nenhuma chave é exposta em texto plano nas requisições.
- Garanta que o `.env` não seja commitado.

## Deploy

1. Configure o projeto na Vercel apontando para este repositório.
2. Defina `ADMIN_KEY` nas variáveis de ambiente do projeto.
3. Aponte o domínio `auraelyum.com` para o projeto em produção.

## Licença

Uso interno Aurelion Labs.
