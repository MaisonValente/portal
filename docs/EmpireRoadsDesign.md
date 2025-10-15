# Empire Roads Design Overview

## Meta
- **Project Name:** Empire Roads
- **Version:** 0.1.0
- **Platforms:** iOS (iPhone, iPad)
- **Engines:** Unity 2022 LTS (URP), SwiftUI shell for native menus/Game Center
- **License:** All rights reserved (Maison Valente)

## Elevator Pitch
Estratégia-economia em tabuleiro hexagonal procedural na megacidade Neon City. Construa distritos, invista em startups e torne-se Lenda.

## Design Pillars
1. Estratégia Clara
2. Luxo Futurista
3. Economia Viva
4. Rejogabilidade
5. Multiplayer Elegante

## World & Setting
- **City:** Neon City
- **Zones:** Comércio, Indústria, Cultura, Inovação, Luxo
- **Tile Types:** Start_District, Upgrade, Event, Market, Transit, Safehouse

## Players & Avatars
- **Player Count:** 1-6
- **Avatars:** Executor, Curadora, Arquiteto, Analista, Visionária, Mecenas

## Core Loop
1. Roleta de Movimento
2. Ação de Casa
3. Compra/Investimento
4. Eventos/Reações
5. Encerramento

### Win Conditions
- Influence >= 1000
- Falência dos demais
- Objetivos de Campanha

### Movement
- **Dice:** d12 virtual
- **Transit Rules:** Casas Transit permitem saltos de 2-4 hexes pagando energia

### Ownership & Districts
- **Tiers:** Seed, Series-A, Series-B, Unicorn
- **Yields:** Creds por rodada, multiplicadores de sinergia por zona

## Events
- **Deck:** Neural Events
- **Examples:**
  - Boom de Dados — +20% yields por 3 turnos
  - Ataque Hacker — Bloqueia compras no próximo turno
  - Aliança Cultural — Duplicar fama neste turno

## Economy
- **Currencies:** Creds, Lumen
- **Resources:** Energia, Dados, Fama
- **Market Volatilidade:** 0.1-0.35 (tick a cada 30s)
- **Influencers:** Eventos Globais, Ações dos Jogadores, Dificuldade
- **District Base Cost:** 150
- **Upgrade Multipliers:** Series-A 1.8, Series-B 2.6, Unicorn 4.0
- **Transit Cost per Hex:** 20

## Monetization
- **Model:** Premium + Cosméticos
- **Cosmetics:** Skins de Avatar, Trilhas de Partícula, Board Themes
- **Season Pass:** 60 dias com visuais raros, molduras de perfil, vozes de narrador

## Modes
- **Singleplayer:** IA adaptativa, campanha
- **Multiplayer:** Tempo real e turnos assíncronos, matchmaking (Amigos, Ranked, Casual), até 6 jogadores

## Art Direction
- **Style:** Neo Art-Deco dourado e neon
- **Palette:** #0B0F14, #D4AF37, #11E6F2, #FFFFFF, #4A4F59
- **UI:** Glassmorphism leve, Tipografia Display + Sans
- **Fonts:** Imperial Lux (Display), Inter (Sans)

## Audio
- **Music:** Synthwave + cordas discretas
- **SFX:** UI suave, efeitos elétricos limpos, feedbacks distintos para compra/evento

## Data Models
- **User:** uid, displayName, avatar, elo, cosmetics[]
- **Match:** matchId, status (waiting|active|finished), seed, players[], turnIndex, boardStateRef
- **BoardState:** id, tiles[{q,r,type,owner,tier}], market{volatility,index}
- **EventCard:** id, name, desc, effectKey, magnitude
- **Inventory:** uid, creds, lumen, energia, dados, fama

## Backend Stack
- Firebase Auth, Firestore, Cloud Functions (Node.js), Cloud Storage
- **Security Rules Outline:**
  - users: user pode ler/escrever próprio doc
  - matches: leitura por membros, escrita por host/server
  - boards: leitura por participantes, escrita server

### Cloud Functions
- `createMatch` e `joinMatch` para gerenciamento de partidas
- `tickMarket` atualiza índice de mercado periodicamente

### Firestore Indexes
- matches (status, createdAt)
- boards (matchId)

### API Contract
- `createMatch`: auth obrigatória, retorna `{matchId, seed}`
- `joinMatch`: auth obrigatória, retorna `{ok}`

## Unity Project
- **Scenes:** MainMenu, Lobby, Game
- **Scriptable Object:** GameConfig.asset com prefabs de tiles e volatilidade padrão 0.2
- **Core Scripts:** Hex, BoardGenerator, TurnSystem, EventResolver, AdaptiveAI, RealtimeSync
- **HUD Wireframe:** barra superior (Creds, Lumen, Turno, Ícone de Mercado), painel esquerdo (jogadores/log), painel direito (ações, cartas), base (roleta, dicas IA)

## iOS SwiftUI Shell
- Arquivos principais: `App.swift`, `AppDelegate.swift`, `ContentView.swift`, `UnityView.swift`
- Integração com Firebase e bridge para view do Unity

## AI Systems
- **Conselheiro:** humor seco, estados Explorar/Comprar/Otimizar/Proteger, recomendações contextuais
- **Event Narrator:** tom andrógeno digital, template "Neural Ping"

## Testing Targets
- Unit: BoardGenerator, EventResolver, TurnSystem, MarketTick
- Playtests: cenário rápido 2P (<20 min), cenário completo 6P (30+ min rede)

## Telemetry
- Eventos: match_start, turn_end, buy, upgrade, market_tick, disconnect
- KPIs: ARPDAU, Retention D1/D7, Avg Turn Time, CrashFree

## Roadmap
- **M0 Prototype:** geração de tabuleiro, movimento, compra básica
- **M1 Network:** lobby/matchmaking, sincronização de turno
- **M2 AI:** IA adaptativa básica, eventos dinâmicos
- **M3 Polish:** arte/UI final, áudio, passes sazonais
- **M4 AR:** módulo AR opcional

## Asset Placeholders
- UI: hud_frame.png, btn_primary.png
- Materials: Gold.mat, Glass.mat, NeonCyan.mat
- Fonts: ImperialLux.ttf, Inter-Regular.ttf
- Prefabs: HexTile.prefab, PlayerToken.prefab, TransitGate.prefab

## Game Balance Basics
- **Income por Tier:** Seed 30, Series-A 65, Series-B 120, Unicorn 220
- **Event Probabilities:** Boom 0.18, Hack 0.12, Aliança 0.15, Imposto 0.1, Neutro 0.45

## Sample Content
- **Eventos:** Boom de Dados (MARKET_BOOM, +20%), Ataque Hacker (HACK, travar compras 1 turno), Fusão de IA (SYNERGY, +25% sinergia por 2 turnos)
- **Objetivos:** Triângulo de Luxo (3 distritos Luxo adjacentes), Mente de Mercado (4 upgrades em Indústria)

## UX Rules
- Ação principal visível em 1 toque
- Feedback audiovisual para compras e eventos
- Logs de turno claros e exportáveis

## Build Notes (iOS)
- **Bundle ID:** com.maisonvalente.empireroads
- **Capabilities:** GameCenter, SignInWithApple, iCloud (opcional)
- **Min iOS:** 15.0
- **Architectures:** arm64

## Security
- **Anti-cheat:** validação server-side de compras/movimentos, checksums de turno, detecção de latência anômala
- **Privacy:** anonimização de telemetria, controle de opt-out

## Localization Targets
pt-BR, en-US, es-ES, fr-FR, de-DE, ja-JP, zh-Hans

## First 7 Days Dev Tasks
1. Configurar projeto Unity + URP
2. Integrar SwiftUI shell e bridge Unity
3. Firebase Auth + Functions createMatch/joinMatch
4. BoardGenerator funcional
5. TurnSystem + HUD mínimo
6. Dois eventos jogáveis
7. Build TestFlight interno
