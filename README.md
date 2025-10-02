# Maison Valente Platform

Este repositório documenta o escopo atual do projeto **Maison Valente**, uma plataforma digital luxuosa e minimalista dedicada a leituras espirituais e sessões terapêuticas com especialistas humanos e IA.

## 1. Entidades de Dados

As seguintes entidades foram modeladas utilizando JSON Schema para garantir consistência dos dados:

- **Therapist**: Nome, foto, biografia, especialidades, preço por minuto, idiomas, tipo (humano/IA), status, ID de preço Stripe, integração com Google Calendar e disponibilidade.
- **Session**: E-mail do usuário, terapeuta, modo da sessão (chat/vídeo/IA), status, horários de início/fim, minutos faturados, custo total, transcrição, notas, avaliação e resumo.
- **Message**: Histórico de mensagens trocadas durante as sessões, com remetente e conteúdo.
- **Transaction**: Registros da carteira digital com tipo (topup/débito), valor, moeda, minutos, ID Stripe, status e descrição.
- **Review**: Avaliações de sessões com rating, comentário e associação ao terapeuta.
- **Level**: Níveis de gamificação com XP mínimo, benefícios, cor e ícone.
- **Badge**: Conquistas desbloqueáveis com descrição, condição e raridade.
- **Translation**: Chaves multilíngues (EN, PT, ES, FR, DE) para todo o conteúdo exibido.
- **Reading**: Pacotes de leituras espirituais com detalhes, preço e ordem de exibição.
- **ReadingOrder**: Pedidos de leitura com status, pagamento e entregáveis.
- **User**: Perfil estendido com idioma, fuso horário, interesses, saldo da carteira, XP, nível, privilégios administrativos e arquivos enviados.

## 2. Páginas Disponíveis

- **Home**: Destaques da Maison Valente, disciplinas oferecidas, experts e depoimentos.
- **Auth**: Fluxos de login e registro via e-mail ou Google.
- **Onboarding**: Processo em quatro etapas para coletar dados essenciais dos usuários.
- **Match**: Interface estilo "swipe" para descoberta e curadoria de terapeutas.
- **TherapistProfile**: Detalhamento de cada terapeuta, especialidades, tarifas e disponibilidade.
- **Readings**: Catálogo dos pacotes de leituras espirituais.
- **Wallet**: Gerenciamento da carteira de minutos, histórico de transações e recarga.
- **Bookings**: Lista de terapeutas favoritos e fluxo de agendamento.
- **Profile**: Visualização e edição do perfil do usuário, incluindo uploads de mídia.
- **History**: Histórico completo de sessões passadas e futuras.
- **Help**: FAQ e informações de suporte.

## 3. Funcionalidades Implementadas

### Sistema Multilíngue (EN, PT, ES, FR, DE)
- Contexto de traduções dedicado, com **TranslationContext** e **LanguageSelector**.
- Persistência do idioma escolhido no `localStorage` e recarregamento automático da interface.
- Função `t()` aplicada na maioria das strings da interface.

### Estética Luxuosa e Minimalista
- Paleta refinada (#F8F7F4, #1E1E1E e dourado envelhecido #B89B74).
- Tipografia serifada para títulos e sans-serif para texto corrido.
- Ajuste de componentes Shadcn/UI (Cards, Buttons, Inputs) para o novo visual.

### Gestão de Usuários
- Onboarding guiado com coleta de informações pessoais e preferências.
- Modal de edição de perfil com upload de fotos (perfil, leitura facial e palma).

### Descoberta e Agendamento
- Interface Match para explorar terapeutas.
- Perfil com disponibilidade integrada a Google Calendar.
- Agendamento condicionado ao saldo de minutos da carteira.

### Histórico e Carteira Digital
- Histórico detalhado de sessões anteriores e futuras.
- Carteira com pacotes pré-definidos e simulação de transações (topup e débito).

## 4. Desafios Técnicos e Soluções

- Correção do erro `TypeError: m.Hr[n] is not a function` ao reestruturar contextos React.
- Padronização das extensões de arquivos para `.js` evitando falhas de build.
- Ajuste de `createPageUrl` inexistente em `Schedule.js`.
- Resolução de problemas de carregamento de imagens na seção "Our Art" e perfis de experts.
- Persistência confiável do idioma selecionado via `localStorage`.

## 5. Próximos Passos

- **Integração Stripe**: Configurar chaves no painel Base44 para habilitar pagamentos reais.
- **Traduções Completas**: Popular a entidade Translation com todas as strings nos cinco idiomas.
- **Sessões Ao Vivo**: Implementar lógica completa para chat e vídeo em tempo real.
- **Pagamentos**: Finalizar fluxo de compra na Wallet, incluindo salvamento de métodos de pagamento.
- **Readings**: Expandir a jornada de compra e entrega das leituras espirituais.

---

> Para dúvidas ou contribuições, abra uma issue ou entre em contato com a equipe Maison Valente.
