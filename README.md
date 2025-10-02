# Maison Valente Platform

Este repositório documenta o estado atual do desenvolvimento da plataforma web da **Maison Valente**, uma experiência digital luxuosa dedicada a leituras espirituais e sessões com terapeutas humanos e assistentes virtuais.

## Sumário Executivo
- Plataforma multilíngue (EN, PT, ES, FR, DE) com persistência de idioma e um contexto de traduções centralizado.
- Estética minimalista inspirada em marcas de luxo, com componentes UI personalizados para manter a coerência visual.
- Experiências completas para descoberta de terapeutas, agendamento de sessões, gerenciamento de carteira digital e aquisição de leituras espirituais.

## Modelagem de Dados
As seguintes entidades JSON estruturam as informações principais da aplicação:

| Entidade | Descrição |
| --- | --- |
| `Therapist` | Perfil de terapeutas, incluindo bio, especialidades, tarifação, idiomas, status (humano/IA) e integrações (Stripe, Google Calendar). |
| `Session` | Agendamentos e sessões realizadas, com metadados de faturamento, transcrição, notas, avaliação e resumos. |
| `Message` | Mensagens trocadas durante sessões de chat/vídeo. |
| `Transaction` | Movimentações da carteira do usuário (top-ups e débitos) com rastreio de Stripe. |
| `Review` | Avaliações de sessões, vinculadas a terapeutas e usuários. |
| `Level` | Sistema de gamificação com níveis, XP mínimo e benefícios. |
| `Badge` | Distintivos e conquistas desbloqueáveis. |
| `Translation` | Chaves de tradução multilíngues (EN, PT, ES, FR, DE). |
| `Reading` | Pacotes de leituras espirituais disponíveis para compra. |
| `ReadingOrder` | Pedidos de leituras, incluindo perguntas e entregáveis. |
| `User` | Dados enriquecidos de perfil, preferências, saldo de minutos e mídias enviadas. |

## Páginas Implementadas
- **Home** – Destaques de disciplinas, experts e depoimentos.
- **Auth** – Fluxos de login/registro via e-mail ou Google.
- **Onboarding** – Configuração inicial do perfil em quatro etapas.
- **Match** – Experiência de swipe para descobrir terapeutas compatíveis.
- **TherapistProfile** – Perfil detalhado, disponibilidade e agendamento.
- **Readings** – Catálogo de leituras espirituais.
- **Wallet** – Saldo de minutos, histórico de transações e pacotes de recarga.
- **Bookings** – Lista de terapeutas curtidos e agendamentos ativos.
- **Profile** – Visualização e edição de dados pessoais e sessões recentes.
- **History** – Histórico completo de sessões passadas e futuras.
- **Help** – FAQ e informações de suporte.

## Funcionalidades Principais
- **Sistema de Traduções**: Contexto global `TranslationContext`, componente `LanguageSelector`, carregamento consistente de traduções e persistência em `localStorage`.
- **Identidade Visual**: Paleta refinada (#F8F7F4, #1E1E1E, #B89B74), tipografias serif/sans-serif, componentes Shadcn/UI adaptados ao design de luxo minimalista.
- **Gestão de Usuários**: Onboarding guiado, perfil completo, `EditProfileModal` com uploads de fotos (perfil, leitura facial, quiromancia).
- **Descoberta e Agendamento**: Interface Match, perfis detalhados, checagem de saldo de minutos e agendamentos via componente Schedule.
- **Carteira Digital**: Saldo de minutos, simulação de recargas/débitos e preparação para integração Stripe.
- **Histórico de Sessões**: Visão unificada de sessões anteriores e futuras com detalhes de faturamento e avaliações.

## Desafios Superados
- Correção de erros de contexto React (`TypeError: m.Hr[n] is not a function`).
- Padronização das extensões de arquivo para `.js` garantindo builds consistentes.
- Ajustes em `Schedule.js` para definir `createPageUrl` corretamente.
- Solução de problemas de carregamento de imagens em "Our Art" e perfis de experts.
- Persistência robusta da preferência de idioma.

## Próximos Passos
1. **Integração Stripe**: Configurar chaves no painel Base44 para habilitar compras reais de minutos.
2. **Traduções Completas**: Popular a entidade `Translation` com todas as chaves e idiomas.
3. **Sessões ao Vivo**: Implementar lógica de chat/vídeo em tempo real.
4. **Fluxo de Pagamentos**: Refinar a experiência de compra de minutos e a persistência de dados de pagamento.
5. **Leituras Espirituais**: Ampliar páginas de detalhes, compra e entrega de `Readings` e `ReadingOrders`.

---
Este resumo reflete o estado atual do projeto e orienta as próximas etapas para a entrega completa da plataforma Maison Valente.
