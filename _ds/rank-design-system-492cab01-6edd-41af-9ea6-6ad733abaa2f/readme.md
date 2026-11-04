# Rank Design System

Rank (formerly RankMyApp) is a Brazilian **marketing intelligence platform + specialized consultancy**. The 2026 rebrand moves the company from a single app-store product to an umbrella brand: *"Transformamos a atenção do seu cliente em preferência de marca e resultado previsível para o negócio."* Tagline: **"Rank. For marketing people."** (PT: "Rank. Para pessoas de Marketing. & robôs.")

Products under the umbrella ("A Rank, O RankMyApp / O RankMyAds / O RankMyGEO"):
- **RankMyApp** — mobile intelligence + ASO (product color Teal Mint)
- **RankMyAds** — performance media (Forest Emerald)
- **RankMyGeo** — GEO / AI-search visibility (Espresso)
- **Rank Intelligence** — MI, RI and tools (Dark Slate)

## Sources
- `uploads/Apresentação Rank _ Rebranding Rank 2026.pdf` (also `uploads/rebranding.pdf`) — brand book / rebranding deck: manifesto, archetype (O Sábio + O Governante → "Estrategista"), logo construction, color system, Helvetica Neue typography, imagery, applications.
- Claude Design project **Central de Marketing** (`/projects/8f71eaec-5cdc-44bc-91e7-1d3e222d3cdc` — `Central de Marketing.dc.html`, `Gerador de Propostas.dc.html`, `RankMyApp Apresentacao Comercial.dc.html`): official SVG logos, B&W photography, brandbook night UI (SectionHeading, NumberedList, ProductCard) and the commercial-proposal slide patterns.
- Local codebase `Design System/Comp` — **Orbit UI**, a Next.js + Radix/shadcn + Lucide component library and AI-platform demo (`/`, `/workspace`, `/catalogo`). Key files: `app/globals.css`, `app/conceptual.css`, `app/orbit-product.css`, `app/workspace/workspace.css`, `components/orbit/*.tsx`. Its structure, sizes, radii and motion were carried over 1:1; colors re-mapped to the Rank palette; "Orbit" naming replaced by Rank (e.g. models *Orbit Pro/Flash/Vision* → *Rank Pro/Flash/Vision*).

## Index
- `styles.css` — entry point (imports only) → `tokens/` (fonts, colors, typography, spacing, motion, effects, base) + `components/components.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see list below), one `@dsCard` per folder
- `ui_kits/platform/` — Rank platform recreation: Home hero → agent Workspace
- `slides/institucional/` — 9 layouts from the rebranding deck, one shared rule set (`institucional.css`) · `slides/comercial/` — 5 commercial-proposal layouts (`comercial.css`)
- `assets/logo/` — official SVGs: `rank-logo-{preto,branco,azul,ciano}.svg`, `rank-simbolo-{azul,branco,preto}.svg`; legacy RankMyApp mark · `assets/imagery/` — 30 photos/textures from the deck · `assets/illustrations/`
- `fonts/` — Inter (fallback, OFL) · `SKILL.md` — agent skill entry · `thumbnail.html`

## Components
- **core/** — Icon, Button, IconButton, Badge, Logo, Avatar, AvatarGroup, Tooltip
- **forms/** — Field, Input, Select, Checkbox, RadioGroup, Switch, Slider
- **navigation/** — Tabs (also the segmented control), Breadcrumb, Pagination, DropdownMenu
- **feedback/** — Alert, Toast, Progress, Skeleton, Empty
- **overlays/** — Dialog, Drawer, Accordion
- **surfaces/** — GlassSurface
- **brand/** — SectionHeading, NumberedList, ProductCard, ProductName (from the Central de Marketing brandbook)
- **ai/** — PromptInput, PromptSuggestions, ModelSelector, ChatMessage, GenerationIndicator, CodeBlock, SourceCard, GeneratedImageCard, UploadArea, AgentCard, AgentToolSelector, TaskStep, TaskExecution, ApprovalRequest, ProjectCard, CreditsMeter, CommandPalette

Not ported from Orbit: MotionLab / GlowFeedback / MaterialLab (catalog demos), AnimatedChat (use ChatMessage + GenerationIndicator), IdeaStudio/AgentLounge (home-page sections).

**Intentional additions:** `Icon` — wrapper that renders Google Material Symbols from the Google Fonts variable font.

## Content fundamentals
- **Language:** Brazilian Portuguese first; English only for the tagline and global moments ("Rank. For marketing people.").
- **Voice:** the *Estrategista* — the Sage + the Ruler. Calm, confident, consultative. States facts and direction, never hype. Short declarative sentences, often in pairs: *"A atenção atrai o olhar. A preferência garante a escolha."* / *"Evoluímos. E as roupas antigas não servem mais."*
- **Person:** "nós" for Rank, "você / sua empresa / sua marca" for the client. Product UI speaks to "você" warmly: *"Seu olhar faz a diferença"*, *"Você no controle"*.
- **Casing:** sentence case for headings and buttons ("Aprovar campanha", "Pedir ajustes"). ALL CAPS only for tiny tracked eyebrows (CAPÍTULO 01, DIREÇÃO CRIATIVA) and the giant RANK / MANIFESTO wordmark-style titles.
- **Emphasis:** Teal Mint (`#0022FF`) marks **one or two words**, never a whole phrase. Vibrant Cyan may carry a full phrase, on dark grounds only. **Highlighter**: a key word on a solid Teal Mint band with white Medium text (`.rk-hl`) — max one per slide/section. Never underline; rarely bold alone.
- **Product names:** every time a product is cited (RankMyApp, RankMyAds, RankMyGEO, Rank Intelligence) it is preceded by the Rank symbol at 0.72em — `<ProductName>` or `.rk-product`. White symbol on dark, black on light.
- **Numbers:** big, specific, Brazilian format: "R$ 42,7 bi", "+12,5% ao ano", "1.000 créditos".
- **Emoji:** never. Unicode used only for ⌘K / arrows in keyboard hints.
- **Honesty in AI UI:** disclose simulations and limits plainly: *"Campanha fictícia · nenhuma publicação automática."*

## Visual foundations
- **Dark mode first.** Examples, cards and new screens default to the night ground (`class="rk-dark"` on `body` or a wrapper remaps surface/text/border/semantic tokens and component surfaces). Light (Ice White) is the secondary register.
- **Color:** Teal Mint `#0022FF` (an electric blue, despite its name) is THE brand color: full-bleed blue slides, primary buttons, emphasis words. Vibrant Cyan `#06B6D4` is the accent on dark. Secondary Deep Purple / Espresso / Indigo Bridge / Forest Emerald and complementary Coral Spice / Gold Dust appear mostly in imagery and product coding. Neutrals: Dark Slate `#121212` (night ground), Soft Graphite, Ice White `#F0F4F8` (paper ground). Decks alternate night (Dark Slate) → paper (Ice White) → full Teal Mint.
- **Type:** Helvetica Neue only (UltraLight → Black; mostly Thin, Light, Roman, Medium, Bold). Headlines Light/Thin, tightly tracked (−0.03 to −0.05em), huge (chapter numerals at Thin 360px; RANK cropped off-canvas). Body Roman 14–16px. Eyebrows 10px Medium, +0.15em, uppercase.
- **Backgrounds:** photography as scenery — full-bleed, dark, lit by blue/cyan or warm amber light ("Iluminação intencional, transparência e presença humana"). Signature textures: **ribbed / fluted glass** refraction — used **only over photography** (silhouettes, portraits), never over flat color fields or gradients; film grain, soft radial glows on black. Product UI uses CSS atmospheres (`--atmosphere-signal`, `-ocean`, `-aurora`, `-ember`, `-night`) instead of photos inside panels — always layered with film grain (`--grain`, overlay blend ~55%).
- **Imagery vibe:** cool, nocturnal, high contrast, fine grain; human eyes and smiles in extreme close-up; occasional sunset amber against blue. **Always avoid "plastic" imagery** — glossy, over-smoothed, CGI/AI-looking renders; prefer real skin texture, real light and grain. **Grain is part of every photo:** wrap images in `.rk-grain` (or `.rk-grain--strong` for portraits) to add the film-grain overlay seen in the deck. A second, **documentary black & white** register (real skin texture, offices, everyday tech — `assets/imagery/bw-*.png`) is used for chapter openers and context slides, with a dark left/bottom shade for type.
- **Layout:** generous margins (96px on 1920 slides), hairline rule at the top with tiny labels left/right, content anchored bottom-left, page numbers bottom-right. Product: 78px icon rail, 76px header, conversation + 365–530px results panel.
- **Corners:** organic and large — inputs 10px, checkboxes 4px, cards 24px, panels 26–29px, hero 42px; controls are pills (999px) by default; buttons also come "square" (8px radius; 6px sm / 10px lg) for editorial layouts. Buttons are compact: 34px tall, 12px side padding.
- **Cards:** white or translucent white, 1px white/hairline border, very soft wide shadow (`0 16px 40px rgba(18,18,18,.06)`); dark cards use atmospheres. No colored left borders.
- **Transparency & blur:** glass (clear 24px / frosted 56px / liquid 40px + saturate 1.1, no hard border — only an inset top rim of light) only over photography or atmospheres — nav pills on hero, composer on hero, menus, toasts, command palette. Opaque fallback without `backdrop-filter`.
- **Shadows:** soft, wide outer shadows only on surfaces (cards `--shadow-soft`, overlays `--shadow-raised`); inset 1px white rim on glass panels. **Buttons never have shadows or glow** — hierarchy comes from fill color and opacity. (`--glow-*` tokens remain only for the "AI is working" pulse on the composer.)
- **Motion:** Emil Kowalski-style: `--ease-out cubic-bezier(.23,1,.32,1)`, 160–250ms, fades + 8px rises, drawer curve for sheets. Slow photographic crossfades (0.55s opacity, 1.2s scale 1.025→1) on heroes. Command palette and shortcuts are instant. `prefers-reduced-motion` removes movement.
- **Buttons are flat glass:** translucent fills + 18px backdrop blur + 1px light border, no inner shadows or gradients. Variants: primary (Teal Mint), black (Dark Slate), secondary (white glass), ghost, danger. **Hover:** fill goes fully opaque. **Press:** scale(.98). **Focus:** 2px Teal Mint outline / 3px blue ring on inputs.

### Institutional slide rules (`slides/institucional/institucional.css`)
- 1920×1080, **96px margins**. Header: 2px rule at top 72px, section label left + "Rank · 2026" right (18px Medium, +0.12em, caps). Footer at bottom 64px: wordmark left, page number right.
- Content is **anchored bottom-left** (`.content`, bottom 150px); multi-column content uses `.area` (top 190 → bottom 150).
- One type scale: display 150/300, h1 88/300, h2 56/300, body 28/400, numeral 200/200, eyebrow 20px +0.14em caps in the accent.
- Four themes only: night (Dark Slate + grain), photo (grayscale + shade + grain), Teal Mint, Ice White. Emphasis = `<em>` in the theme accent (cyan on dark, Teal Mint on Ice, white Medium on blue).

### Two dark registers
- **Brand / internal (Central de Marketing):** flat night UI — `--night-bg #121212`, surfaces `#151515/#181818`, 1px `#2B2B2B` borders, text `#F0F4F8 / #C9CED6 / #A3A9B3 / #6E7682`. Section openers "01 · Portfólio" (13px, +0.12em, uppercase, subtle gray) over ExtraLight (200) 64px headlines. Mono numerals (01, 02…) for lists. Product cards: square corners, 3px top rule in the product color.
- **Commercial proposals:** bold (700) 96px headlines with the lead phrase in Vibrant Cyan, 24px eyebrows tracked +0.4em in cyan, big Light 96px numbers, translucent white cards radius 28px, the symbol cropped large in the background, product mockups on the right.

## Iconography
- **Google Material Symbols — Outlined**, variable font from Google Fonts (imported first in `styles.css`). Default axes: weight **300**, FILL 0, GRAD 0, opsz 24 — a light line that matches Helvetica Neue Light headlines. Use FILL 1 sparingly for selected/active states.
- Sizes: 20px default, 16px in buttons, 12–14px in badges/chips. Render with the `Icon` component (`<Icon name="auto_awesome" />`); it accepts Material names and maps the legacy Lucide-style names used in the Orbit codebase.
- Replaces the codebase's Lucide set (user decision). Two tiny inline SVGs remain in CSS: the checkbox tick and select chevron.
- **Use icons bare** — no tile, box or circle behind them. Color carries emphasis (white/gray by default, Vibrant Cyan for highlight). **Dark mode first**: design and show icons on the night background.
- No emoji. No PNG icons. Logos are the official SVGs; never redraw or reshape them. The **symbol** may be used solid (Teal Mint / white), as a **mask filled with photography**, or as **glass** — a frosted, blurred cut-out of the image behind it, always desaturated to **grayscale** (light or dark glass; never tinted, never filled with an atmosphere/gradient) — use `rank-simbolo-branco.svg` as the CSS `mask-image` with `backdrop-filter: blur() grayscale(1)`.

## Fonts
Helvetica Neue is shipped in `fonts/` (files supplied by Rank — cleared by Rank for internal and external use): UltraLight 100, Thin 200, Light 300, Roman 400, Medium 500, Bold 700, Heavy 800, Black 900, each with italic. Declared as `"Helvetica Neue Rank"` in `tokens/fonts.css`; `--font-sans` / `--font-display` fall back to system Helvetica → Arial. Inter was removed.
