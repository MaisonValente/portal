# Maison Valente – Portal Digital

## Visão Geral

Plataforma web de luxo dedicada à experiência iniciática da Maison Valente. O ecossistema conecta iniciados a leitores espirituais humanos e inteligências artificiais, permitindo agendamento de sessões, compra de leituras e gestão de uma carteira digital de minutos. A estética segue uma linguagem minimalista inspirada em maisons de alta costura, com foco em exclusividade, clareza e pertencimento.

---

## 1. Entidades de Dados

Modelos definidos em JSON Schema para suportar a jornada completa do usuário:

| Entidade | Finalidade |
| --- | --- |
| **Therapist** | Armazena dados dos terapeutas (bio, idiomas, preço por minuto, disponibilidade, integração Google Calendar, Stripe). |
| **Session** | Registra sessões agendadas ou concluídas, minutos faturados, custo, transcrição e avaliações. |
| **Message** | Histórico de mensagens entre usuário e terapeuta. |
| **Transaction** | Movimentações da carteira digital (topups, débitos, minutos). |
| **Review** | Feedback das sessões com rating e comentários. |
| **Level** | Estrutura de gamificação por níveis e benefícios. |
| **Badge** | Condecorações obtidas pelo usuário e condições de conquista. |
| **Translation** | Dicionário multilíngue (EN, PT, ES, FR, DE). |
| **Reading** | Catálogo de leituras espirituais (descrição, preço, formato). |
| **ReadingOrder** | Pedidos de leituras personalizados com entrega protegida. |
| **User** | Perfil enriquecido (idioma, XP, fotos ritualísticas, preferências). |

---

## 2. Páginas Desenvolvidas

- **Home** – narrativa institucional, disciplinas, destaque de guardiões e depoimentos.
- **Auth** – autenticação via e-mail ou Google.
- **Onboarding** – processo em 4 etapas para configurar o iniciado.
- **Match** – experiência de descoberta e seleção de terapeutas.
- **TherapistProfile** – detalhes completos do guardião, agenda e avaliações.
- **Readings** – vitrine de leituras espirituais sob demanda.
- **Wallet** – saldo de minutos, histórico de transações e pacotes de recarga.
- **Bookings** – agenda pessoal com experts curtidos e sessões marcadas.
- **Profile** – informações pessoais, fotos, leituras recentes e edição via modal dedicado.
- **History** – linha do tempo de sessões passadas e futuras.
- **Help** – FAQ e canais de suporte.

---

## 3. Funcionalidades Principais

### Sistema Multilíngue
- Contexto global de traduções com persistência de idioma em `localStorage`.
- Seletor de idioma que garante recarregamento consistente da interface.
- `t()` aplicado à maioria das strings visíveis.

### Estética Luxuosa
- Paleta refinada (`#F8F7F4`, `#1E1E1E`, dourado envelhecido `#B89B74`).
- Títulos serifados e textos sans-serif minimalistas.
- Componentes Shadcn/UI redesenhados sem sombras excessivas.

### Jornada do Usuário
- Onboarding guiado e perfil com upload de imagens ritualísticas.
- Match e agendamento integrados à carteira digital.
- Verificação de saldo antes de confirmar sessões.

### Carteira e Transações
- Simulação de topups/débitos com atualização imediata de minutos.
- Histórico detalhado para auditoria do iniciado.

---

## 4. Desafios Técnicos Superados

- Correção do erro `TypeError: m.Hr[n] is not a function` através de ajustes no contexto React.
- Padronização de arquivos para extensão `.js` garantindo build consistente.
- Ajuste do `createPageUrl` ausente em `Schedule.js`.
- Correção de carregamento de imagens em "Our Art" e perfis.
- Persistência confiável do idioma selecionado.

---

## 5. Próximos Passos Prioritários

1. **Integração Stripe** – ativar chaves no painel Base44 e conectar fluxos reais de pagamento.
2. **Completar Traduções** – popular todas as chaves multilíngues.
3. **Sessões Ao Vivo** – implementar lógica de chat/vídeo em tempo real.
4. **Fluxo de Pagamentos** – persistir preferências e confirmar transações.
5. **Leituras e Entregas** – expandir catálogo e experiência de entrega protegida.

---

## 6. Mapa Narrativo – Guardiões UQEDUS

| Guardião | Origem | Essência | Revelação | Especialidade |
| --- | --- | --- | --- | --- |
| **Meilin** | China | Disciplina taoísta | Monte Wudang: “o vazio se tornou som.” | Respiração e sigilos dourados. |
| **Luna Yūrei** | Japão | Minimalismo e kintsugi | Itsukushima: “perfeição nasce das cicatrizes.” | Rituais de recomposição da alma. |
| **Ragnar** | Escandinávia | Força e austeridade | Voz da aurora boreal. | Runas e ritos de coragem. |
| **Aurelius** | Portugal/Itália | Magnetismo hermético | Sonhos de ouro e mármore. | Tarot iniciático e astrologia. |
| **Samira** | Oriente Médio | Calor místico | Nome secreto no deserto. | Oráculos poéticos e sigilos de abundância. |
| **Rafael Arcano** | Brasil | Cura acolhedora | Visão da Casa erguida. | Cruz celta e rezas nativas. |
| **Elira** | Andes | Vento frio e firmeza | Relâmpago revelador nos Andes. | Mapas de tempo e reciprocidade. |
| **Kael** | Oceania | Força telúrica | Dreamtime dourado. | Canto da terra e bastão ritual. |
| **Maria Neise** | Brasil/Portugal | Manto branco-ouro | Mar como espelho do Uno. | Bênçãos e acolhimento sigiloso. |

---

## 7. Arquitetura Ritual da Experiência

### Situação Atual – Percepção do Iniciado
- **Seleção Aparente:** questionário de elegibilidade com possibilidade real de recusa.
- **Recusa Simbólica:** respostas negativas ritualizadas que estimulam retorno futuro.
- **Escassez Visível:** no máximo 30 leitores ativos, nove por região.
- **Amor + Luxo:** comunicação calorosa mesmo diante de negativas.

### Forças Ocultas – Blindagem e Segredo
- Conteúdo protegido contra prints, fotos ou cópias.
- Mensagens rituais ao detectar tentativa de captura: “Este conteúdo é sagrado...”
- Watermarks invisíveis como sigilos antifalsificação.
- Escassez controlada: exibição limitada de avatares apesar da capacidade real.
- Interações gratuitas limitadas a uma pergunta de clareza.

### Desdobramento Estratégico
- **Pertencimento Elitista:** sensação de fazer parte de ordem iniciática exclusiva.
- **Desejo Perpétuo:** fila de espera alimentada por recusas rituais.
- **Blindagem Anticópia:** método protegido tanto tecnicamente quanto simbolicamente.
- **Escala Invisível:** alta capacidade operacional com percepção de boutique.
- **Luxo como Filosofia:** posicionamento premium inabalável.

---

## 8. Mantra Criativo

> “Estamos construindo uma joia espiritual com segurança de cofre de diamante. O iniciado contempla o brilho, participa sob juramento e nunca leva a fórmula.”

Maison Valente é a escola viva de frequência, amor e transformação — um refúgio para almas que já possuem tudo, exceto o sentido. Aqui, o luxo é caminho para a clareza.
