## Comunidade Terapêutica Vale da Luz

Site institucional da Comunidade Terapêutica Vale da Luz (SASIEQ — Serviço de Ação Social, Integração, Educação e Qualidade), sediada em Joinville/SC.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Deploy: Vercel (zero-config)

## Comandos

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `http://localhost:3000` |
| `npm run build` | Build de produção (roda `tsc` e `next build`) |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint via `next lint` |

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Acolhimento institucional, vídeo, atuação, metodologia, resultados, diferenciais, vagas gratuitas |
| `/sobre` | Histórico, galeria, público-alvo, metodologia, permanência, requisitos de internação |
| `/como-ajudar` | Formas de ajudar + seção de doação com chave PIX e botão copiar |
| `/contato` | Endereço, telefone, e-mail, CNPJ e canal de triagem |

## Dados institucionais centralizados

Constantes como CNPJ, chave PIX, endereço, telefone, e-mail, links sociais e URL do WhatsApp ficam em `src/lib/site.ts`. Altere apenas esse arquivo para atualizar o conteúdo em todas as páginas.

## Assets

Imagens e o vídeo institucional (`pitch.webm`) ficam em `public/`.
