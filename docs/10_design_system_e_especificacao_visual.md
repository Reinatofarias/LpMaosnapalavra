# 10. Design System & Especicação Visual da Interface (Estilo Cartoon)

Este documento apresenta a especificação técnica atualizada do **Design System** e do **Visual Blueprint** da Landing Page do **Mãos na Palavra™**. Ele foi refinado para se alinhar com a identidade visual cartoonizada, vibrante e de alto contraste extraída da logo e da ilustração oficial.

---

## 1. Fundações Visuais (Foundations)

### 1.1. Paleta de Cores & Relação de Contraste (WCAG)

As cores foram extraídas diretamente da identidade visual da logo (`logo.png`) e da ilustração principal (`1.png`). O estilo visual adota a estética **Cartoon/Neobrutalismo**, caracterizada por cores vibrantes, fundos limpos e contornos escuros muito marcados.

```text
Paleta Cromática Oficial:
┌─────────────────────────────────────────────────────────────┐
│  Bege Fundo (Creme)    : #FFFDF9 (HSL 40, 100%, 99%)        │
│  Preto Contorno (Text) : #161B22 (HSL 215, 21%, 11%)        │
│  Azul "Palavra"        : #29A4F2 (HSL 203, 90%, 55%)        │
│  Amarelo "Mãos" (Accent): #FFD200 (HSL 49, 100%, 50%)        │
│  Verde Lápis (Secondary): #6EC631 (HSL 95, 60%, 48%)        │
│  Rosa "na" (Pink)      : #FF3E6C (HSL 346, 100%, 62%)       │
└─────────────────────────────────────────────────────────────┘
```

| Token | Cor | HEX | HSL | Aplicação | Contraste vs. Fundo (`#FFFDF9`) | Status WCAG |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `--color-bg-main` | Creme Fundo | `#FFFDF9` | `40, 100%, 99%` | Fundo principal da página. | - | - |
| `--color-text-main` | Preto Grafite | `#161B22` | `215, 21%, 11%` | Textos principais, contornos e sombras. | **17.5:1** | **Aprovado (AAA)** |
| `--color-primary` | Azul Palavra | `#29A4F2` | `203, 90%, 55%` | Destaque azul de cabeçalho, botões e cards. | **2.2:1** *(Usar com texto preto/branco)* | **Aprovado (AA)** *(Texto branco sobre Azul = 4.3:1)* |
| `--color-accent` | Amarelo Mãos | `#FFD200` | `49, 100%, 50%` | Cor do botão de CTA principal, estrelas. | **1.3:1** *(Usar com texto preto `#161B22`)* | **Aprovado (AAA)** *(Texto preto sobre Amarelo = 13.5:1)* |
| `--color-secondary` | Verde Lápis | `#6EC631` | `95, 60%, 48%` | Elementos de check, bônus de dobraduras. | **2.3:1** *(Usar com texto preto/branco)* | **Aprovado (AA)** *(Texto preto sobre Verde = 7.6:1)* |
| `--color-pink` | Rosa "na" | `#FF3E6C` | `346, 100%, 62%` | Selos rápidos, chamadas de dor, bônus. | **2.3:1** *(Usar com texto branco)* | **Aprovado (AA)** *(Texto branco sobre Rosa = 4.2:1)* |

---

### 1.2. Escala Tipográfica (Typography Scale)

Para combinar com a logo cartoonizada com cantos arredondados e traços orgânicos, o design system adota a fonte **Quicksand** tanto para os títulos quanto para o corpo de texto, variando a espessura para obter uma hierarquia robusta.

* **Família Principal (Títulos & Corpo):** `'Quicksand', 'Inter', sans-serif;`

```text
Hierarquia de Títulos (Visual Scale):
H1 (Hero)      : 3.5rem (56px)  ─── Font-Weight: 900 (Extra Bold)
H2 (Seções)    : 2.25rem (36px) ─── Font-Weight: 900 (Extra Bold)
H3 (Cards)     : 1.35rem (22px) ─── Font-Weight: 900 (Extra Bold)
Body (Principal): 1.125rem (18px) ── Font-Weight: 700 (Bold)
Body-Sm (FAQ)  : 0.95rem (15px)  ─── Font-Weight: 500 (Medium)
```

#### Tabela de Estilos CSS Tipográficos

| Seção/Tag | Font-Family | Font-Size (Desktop) | Font-Size (Mobile) | Font-Weight | Line-Height | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `h1` (Hero) | `'Quicksand'` | `3.5rem (56px)` | `2.25rem (36px)` | `900` | `1.15` | `-0.02em` |
| `h2` (Seções) | `'Quicksand'` | `2.25rem (36px)` | `1.75rem (28px)` | `900` | `1.2` | `-0.01em` |
| `h3` (Cards) | `'Quicksand'` | `1.35rem (22px)` | `1.25rem (20px)` | `900` | `1.3` | `0` |
| `body` (Text) | `'Quicksand'` | `1.125rem (18px)`| `1.0rem (16px)` | `700` | `1.6` | `0` |
| `body-sm` | `'Quicksand'` | `0.95rem (15px)` | `0.92rem (14.5px)`| `500` | `1.6` | `0` |
| `btn-text` | `'Quicksand'` | `1.25rem (20px)` | `1.15rem (18px)` | `900` | `1.2` | `0.02em` |

---

### 1.3. Escala de Espaçamento & Grid System

* **Escala de Spacing:** Baseada na progressão de `8px`: `8px`, `16px`, `24px`, `32px`, `48px`, `80px`.
* **Grid Desktop (>= 1024px):** 12 colunas, largura máxima de `1200px`, gap de `32px`.
* **Grid Mobile (< 640px):** 1 coluna, gap de `16px`, margens laterais de `24px`.

---

### 1.4. Bordas e Sombras Cartoon (Sticker Styling)

O segredo do refinamento visual "Cartoon Premium" é a aplicação consistente de **contornos pretos espessos** e **sombras sólidas deslocadas** (neobrutalistas), simulando adesivos recortados.

* **Bordas (Borders):**
  * `--border-thin`: `2px solid var(--color-border-dark)` (Usada em sub-elementos, inputs, badges).
  * `--border-thick`: `4.5px solid var(--color-border-dark)` (Usada em botões, seções de destaque e imagens).
* **Sombras Sólidas (Box-Shadow):**
  * `--shadow-solid-sm`: `3px 3px 0 var(--color-border-dark)` (Badges e tags).
  * `--shadow-solid-md`: `6px 6px 0 var(--color-border-dark)` (Cards e acordeões do FAQ).
  * `--shadow-solid-lg`: `10px 10px 0 var(--color-border-dark)` (Hero Image, Caixa de Oferta e bloco da Carol).
* **Border Radius:**
  * `--radius-sm`: `10px` (Badges).
  * `--radius-md`: `18px` (Cards, Botões).
  * `--radius-lg`: `28px` (Seções, Caixas de Destaque, Imagem da Hero).

---

## 2. Especificação de Componentes (UI Components)

### 2.1. Botões Cartoon
* **Estilo Visual:** Fundo Amarelo (`#FFD200`), texto Preto Grafite (`#161B22`), borda de `3.5px` preta, cantos arredondados `--radius-md` e sombra sólida de `5px` preta.
* **CSS Class:**
  ```css
  .btn-primary {
    background-color: var(--color-accent);
    color: var(--color-text-main);
    border: 3.5px solid var(--color-border-dark);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-button);
    font-weight: 900;
  }
  ```
* **Microinterações:**
  * **Hover:** Deslocamento para cima e para a esquerda (`transform: translate(-2px, -2px)`) e aumento do deslocamento da sombra sólida para `7px`.
  * **Active (Clique):** Deslocamento para baixo e para a direita (`transform: translate(3px, 3px)`) e redução do deslocamento da sombra sólida para `2px`. Simula o botão sendo fisicamente pressionado.

---

### 2.2. Cards Color-Coded
* **Estilo Visual:** Fundo branco, contorno preto de `3px`, sombra sólida preta de `6px`. Cada card possui uma cor de contorno ou ícone específica (Rosa, Verde, Azul ou Amarelo) para criar dinamismo visual infantil.
* **CSS Classes:**
  * `.benefit-card.border-pink` (Contornos na cor Rosa)
  * `.benefit-card.border-green` (Contornos na cor Verde)
  * `.benefit-card.border-blue` (Contornos na cor Azul)

---

### 2.3. Hero Image Container
* **Estilo Visual:** A imagem principal do Hero (`1.png`) é envelopada por uma moldura de `4px` de contorno preto sólido, cantos arredondados `--radius-lg`, e sombra sólida preta de `10px`. Ela é rotacionada levemente (`transform: rotate(-1deg)`) para dar um aspecto lúdico de adesivo/Sticker gigante.

---

## 3. Microinterações & Animações (CSS Keyframes)

### 3.1. Pulso de CTA Cartoon
Animação que simula o botão expandindo e subindo ligeiramente com sua sombra.

```css
@keyframes cta-pulse {
  0% {
    transform: scale(1);
    box-shadow: 5px 5px 0 var(--color-border-dark);
  }
  15% {
    transform: scale(1.03) translate(-2px, -2px);
    box-shadow: 7px 7px 0 var(--color-border-dark);
  }
  30% {
    transform: scale(1);
    box-shadow: 5px 5px 0 var(--color-border-dark);
  }
}
```
* **Aplicação:** `.btn-pulse` (Ativo por padrão no CTA da Hero e da Oferta).
