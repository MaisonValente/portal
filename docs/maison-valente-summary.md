# Resumo do Projeto Maison Valente

## Visão Geral
A plataforma Maison Valente é uma experiência digital luxuosa dedicada a leituras espirituais e sessões terapêuticas. O produto combina terapeutas humanos, assistentes de IA e conteúdos premium, entregues em uma interface multilíngue com agendamento, pagamentos e gamificação integrados.

## Objetivos Principais
- Oferecer sessões ao vivo via chat e vídeo, além de interações com assistentes de IA.
- Disponibilizar leituras espirituais personalizadas e pacotes de conteúdos digitais.
- Garantir uma experiência transacional segura com carteira digital, controle de minutos e integração Stripe.
- Criar um ambiente global com suporte a múltiplos idiomas.
- Engajar usuários através de níveis, badges e recompensas baseados em experiência (XP).

## Funcionalidades Essenciais
1. **Gestão de Terapeutas**: Cadastro, disponibilidade e integração com Google Calendar.
2. **Sessões Omnicanal**: Chat, vídeo e IA, com registro completo de transcrições e notas.
3. **Mensageria em Tempo Real**: Histórico completo de conversas com identificação de remetente.
4. **Carteira Digital**: Controle de top ups, débitos, moedas e minutos.
5. **Avaliações e Feedback**: Registro de reviews e notas das sessões.
6. **Gamificação**: Sistema de níveis e conquistas desbloqueáveis.
7. **Traduções Multilíngues**: Armazenamento centralizado de strings em diversos idiomas.
8. **Marketplace de Leituras**: Catálogo de leituras, pedidos personalizados e entregas digitais.
9. **Perfil do Usuário**: Dados pessoais, preferências, fotos e configurações de pagamento.

## Modelagem de Dados (JSON Schema)
A seguir estão as entidades de domínio utilizadas para estruturar a base de dados da aplicação.

### Therapist
- **id**: Identificador único.
- **name**: Nome completo.
- **photoUrl**: URL da foto de perfil.
- **bio**: Biografia detalhada.
- **specialties**: Lista de áreas de atuação.
- **pricePerMinute**: Valor cobrado por minuto.
- **languages**: Idiomas dominados.
- **type**: Humano ou IA.
- **active**: Status de atividade.
- **stripePriceId**: Referência para planos de cobrança no Stripe.
- **googleCalendarId**: ID de integração com Google Calendar.
- **availability**: Faixas de horários disponíveis.

### Session
- **id**
- **userEmail**
- **therapistId**
- **mode**: chat, video ou ai.
- **status**
- **startTime** / **endTime**
- **billedMinutes**
- **totalCost**
- **transcript**
- **notes**
- **rating**
- **summary**

### Message
- **id**
- **sessionId**
- **senderType**
- **content**
- **senderName**
- **timestamp**

### Transaction
- **id**
- **userEmail**
- **type**: topup ou debit.
- **amount**
- **currency**
- **minutes**
- **stripePaymentId**
- **status**
- **description**
- **createdAt**

### Review
- **id**
- **sessionId**
- **userEmail**
- **therapistId**
- **rating**
- **comment**
- **therapistName**
- **createdAt**

### Level
- **id**
- **name**
- **minXp**
- **benefits**
- **color**
- **icon**

### Badge
- **id**
- **name**
- **description**
- **icon**
- **condition**
- **rarity**

### Translation
- **id**
- **key**
- **en**
- **pt**
- **es**
- **fr**
- **de**

### Reading
- **id**
- **title**
- **subtitle**
- **description**
- **price**
- **deliveryFormat**
- **requirements**
- **active**
- **sortOrder**

### ReadingOrder
- **id**
- **userEmail**
- **readingId**
- **readingTitle**
- **pricePaid**
- **status**
- **userQuestion**
- **userFileUrl**
- **deliveryUrl**
- **stripePaymentId**
- **createdAt**

### User
- **id**
- **email**
- **birthDate**
- **timezone**
- **language**
- **interests**
- **walletMinutes**
- **totalXp**
- **levelId**
- **isAdmin**
- **profilePhotoUrl**
- **phone**
- **country**
- **savePaymentInfo**
- **faceReadingPhotoUrl**
- **palmReadingPhotoUrl**
- **createdAt**

## Fluxos Principais
1. **Onboarding**: Cadastro, escolha de idioma, definição de interesses e carregamento da carteira.
2. **Agendamento**: Seleção de terapeuta, escolha de horário e confirmação via Stripe.
3. **Sessão**: Condução em tempo real com registro de mensagens, minutos e transcrição.
4. **Pós-Sessão**: Avaliação, atribuição de XP, atualização de níveis e badges.
5. **Leituras**: Compra de pacotes, envio de materiais e entrega personalizada.

## Stack Tecnológica Sugerida
- **Frontend**: React/Next.js com estilização minimalista e suporte i18n.
- **Backend**: Node.js (NestJS/Express) ou frameworks equivalentes com suporte a WebSockets.
- **Banco de Dados**: PostgreSQL para dados relacionais + Redis para cache/sessões.
- **Infraestrutura**: Deploy em Vercel (frontend) e plataformas serverless ou contêineres (backend).
- **Integrações**: Stripe para pagamentos, Google Calendar para disponibilidade e serviços de IA para terapeutas virtuais.

## Considerações de Experiência
- Layout inspirado em casas de luxo, com tipografia serif elegante e paleta neutra.
- Microinterações para transições suaves e sensação de exclusividade.
- Acessibilidade multilíngue com alternância fluida entre idiomas.
- Dashboard de usuário com visão consolidada de minutos, próximos atendimentos e conquistas.

## Próximos Passos
- Definição detalhada de jornadas de usuário e wireframes.
- Protótipos de UI em alta fidelidade alinhados à identidade Maison Valente.
- Implementação iterativa do backend com foco em segurança e compliance.
- Testes de usabilidade com terapeutas e usuários-alvo.

