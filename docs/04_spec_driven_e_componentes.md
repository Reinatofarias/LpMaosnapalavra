# 4. Spec-Driven Documentation & Componentes

Este documento especifica os padrões técnicos de implementação front-end, a estrutura do projeto, os Design Tokens e a folha de especificações detalhada de cada componente da Landing Page do **Mãos na Palavra™**.

---

## Part 1: Spec-Driven Documentation

### 1. Estrutura de Pastas Recomendada (Padrão Component-Based)

```text
maos-na-palavra-lp/
│
├── public/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── characters/        # Mila, Ben, Ovelhinha, etc.
│   │   ├── icons/             # Ícones personalizados
│   │   └── mockups/           # Livro, bônus, páginas internas
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Componentes básicos (Botão, Card, Accordion)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── AudioPlayer.tsx
│   │   │
│   │   └── sections/          # Seções da Landing Page
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       ├── BenefitStrip.tsx
│   │       ├── PainSection.tsx
│   │       ├── BigIdeaSection.tsx
│   │       ├── ProductPresentation.tsx
│   │       ├── InsideProductCards.tsx
│   │       ├── ParentBenefits.tsx
│   │       ├── BonusSection.tsx
│   │       ├── ProofSection.tsx
│   │       ├── OfferSection.tsx
│   │       ├── GuaranteeSection.tsx
│   │       ├── FAQSection.tsx
│   │       └── Footer.tsx
│   │
│   ├── styles/
│   │   ├── variables.css      # Design Tokens (CSS Variables)
│   │   └── globals.css        # Reset e estilos globais
│   │
│   ├── utils/
│   │   └── analytics.ts       # Funções de disparo de eventos GTM/GA4
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 2. Design Tokens (CSS Variables)

Estes tokens devem ser declarados no arquivo `src/styles/variables.css` para garantir consistência estética absoluta em toda a interface.

```css
:root {
  /* --- Cores --- */
  /* Primária: Terracota Suave (Tons terrosos, calorosos e afetivos) */
  --color-primary-light: #FCECE8;
  --color-primary: #D97D64;
  --color-primary-dark: #B35E47;

  /* Secundária: Verde Oliva Infantil (Representa calma, natureza, crescimento) */
  --color-secondary-light: #F0F4EE;
  --color-secondary: #8FA882;
  --color-secondary-dark: #6D8561;

  /* Destaque: Amarelo Ensolarado (Representa alegria, luz, fé) */
  --color-accent-light: #FEF8EC;
  --color-accent: #F2C879;
  --color-accent-dark: #D4A34E;

  /* Neutras: Foco em tons calorosos para evitar o branco hospitalar */
  --color-bg-main: #FAF8F5;          /* Bege Caloroso Claríssimo (Fundo principal) */
  --color-bg-secondary: #E6EEF2;     /* Azul Céu Suave (Fundo de contraste) */
  --color-text-main: #3D2F28;        /* Marrom Café Suave (Texto principal - alto contraste) */
  --color-text-muted: #73635B;       /* Marrom Claro (Texto secundário) */
  --color-border: #E5DDD5;           /* Bege Escuro / Cinza Quente para bordas */
  --color-white: #FFFFFF;

  /* --- Tipografia --- */
  /* Serifada Editorial para Títulos (Transmite credibilidade, fé, tradição) */
  --font-heading: 'Fraunces', Georgia, serif;
  
  /* Sem Serifada Arredondada para Corpo (Amigável, infantil, de fácil leitura) */
  --font-body: 'Quicksand', 'Inter', system-ui, sans-serif;

  /* --- Espaçamentos (Escala 4px/8px) --- */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-section: 80px;
  --spacing-section-mobile: 48px;

  /* --- Bordas e Sombras --- */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  
  /* Sombra suave e lúdica */
  --shadow-soft: 0 4px 20px -2px rgba(61, 47, 40, 0.06);
  --shadow-card: 0 10px 30px -5px rgba(61, 47, 40, 0.08);
  --shadow-button: 0 4px 14px rgba(217, 125, 100, 0.3);

  /* --- Transições --- */
  --transition-fast: all 0.15s ease-out;
  --transition-normal: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 3. Breakpoints e Grid

* **Dispositivos Móveis (Mobile):** `< 640px` (Foco principal: viewport de 375px). Grid de 1 coluna, margem lateral de 16px.
* **Tablets:** `640px` a `1024px`. Grid de 2 colunas, margem lateral de 32px.
* **Computadores (Desktop):** `> 1024px` (Foco: viewport de 1440px). Grid de 12 colunas, largura máxima de conteúdo de 1200px, margem lateral automática.

---

## Part 2: Especificação de Componentes

Abaixo está a especificação técnica dos 21 componentes necessários para a Landing Page.

### 1. Header Simplificado
* **Objetivo:** Identificar a marca sem gerar pontos de fuga (sem links externos).
* **Props:** Nenhuma.
* **Variações:** Nenhuma.
* **Estados:** Estático.
* **Responsividade:** Centralizado no mobile. Alinhado à esquerda com selo "100% Digital" à direita no desktop.
* **Critérios de Aceite:** Não conter links de navegação interna que distraiam o usuário.

### 2. HeroSection
* **Objetivo:** Capturar a atenção imediata na primeira dobra.
* **Conteúdo:** Headline, Subtitle, TrustBadges, CTA Button, CharacterIllustration e ProductMockup.
* **Props:** `title: string`, `subtitle: string`, `ctaText: string`.
* **Estados:**
  * *Hover* no botão de CTA (efeito de escala suave e brilho).
* **Responsividade:**
  * **Mobile:** Layout em 1 coluna. Título, subtítulo, botões e selos vêm primeiro. O mockup visual vem logo abaixo.
  * **Desktop:** Layout em 2 colunas (Textos e CTAs à esquerda, composição visual 3D à direita).
* **Critérios de Aceite:** Todo o conteúdo de texto da Hero deve ser indexável (não usar imagens para textos). O botão de CTA deve ser visível no mobile sem exigir mais de meia rolagem de tela.

### 3. TrustBadges
* **Objetivo:** Passar segurança imediata na primeira dobra.
* **Conteúdo:** 5 selos rápidos (100% Cristão, Para Imprimir, Mais de 100 desenhos, Acesso imediato, Ideal para 3 a 8 anos).
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Carrossel horizontal com rolagem livre (scroll snap) ou grid de 2 colunas.
  * **Desktop:** Linha horizontal contínua abaixo do CTA.
* **Critérios de Aceite:** Ícones leves (SVG). Texto curto de fácil leitura.

### 4. BenefitStrip
* **Objetivo:** Mostrar o valor prático imediato da troca de telas por atividades.
* **Conteúdo:** Título "Em vez de mais tela, seu filho recebe:" + 6 cards de benefícios.
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Grid 2x3 ou slider horizontal.
  * **Desktop:** Grid 1x6 (6 colunas na mesma linha).
* **Critérios de Aceite:** Os cards devem usar ícones lúdicos e cores de fundo alternadas de forma suave (tons pastel).

### 5. PainSection
* **Objetivo:** Conectar emocionalmente com a dor e a exaustão da mãe na rotina diária.
* **Conteúdo:** Título, texto de introdução empática, bullets com dores reais, ilustração da ovelhinha pensativa e fechamento de alívio.
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Layout vertical. Ilustração da ovelhinha centralizada abaixo do título, seguida pelos bullets.
  * **Desktop:** 2 colunas (Ilustração e título à esquerda, bullets e texto de alívio à direita).
* **Critérios de Aceite:** O tom dos bullets deve ser legível, com bom espaçamento entre as linhas para não sobrecarregar a leitura da mãe exausta.

### 6. BigIdeaSection
* **Objetivo:** Apresentar a virada conceitual que justifica o produto (substituição em vez de proibição).
* **Conteúdo:** Headline "Criança não fica com as mãos vazias por muito tempo", texto conceitual e composição visual de transição (mão largando tela e pegando lápis).
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Fundo colorido cobrindo 100% da largura. Elementos empilhados.
  * **Desktop:** Layout com margens amplas, texto centralizado e ilustração de transição em destaque na lateral.
* **Critérios de Aceite:** O visual desta seção deve ser marcante, funcionando como uma transição de cor na página (usando um fundo suave em verde ou amarelo pastel).

### 7. ProductPresentation
* **Objetivo:** Apresentar a solução oficial de forma estruturada e credível.
* **Conteúdo:** Título, subtítulo de autoria (Carol), texto de explicação do formato digital e um mockup 3D gigante do livro aberto.
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Mockup em tamanho destacado seguido do texto.
  * **Desktop:** 2 colunas (Texto explicativo à esquerda, mockup 3D do livro à direita).
* **Critérios de Aceite:** Deixar explícito que o produto é digital (exibir selo "Arquivo Digital em PDF" próximo ao mockup).

### 8. InsideProductCards
* **Objetivo:** Detalhar o conteúdo interno do livro criando percepção de abundância.
* **Conteúdo:** Cards com imagens das páginas internas de atividades e pequenos textos explicativos.
* **Props:** `cardsData: Array`.
* **Responsividade:** Grid de 1 coluna no mobile, 3 colunas no desktop.
* **Critérios de Aceite:** Imagens das páginas do livro devem ter zoom ao clique (modal) ou serem grandes o suficiente para leitura no mobile.

### 9. ParentBenefits
* **Objetivo:** Focar no ganho de tempo, paz e praticidade para os pais.
* **Conteúdo:** Título explicativo e lista de bullets focados no alívio da rotina.
* **Props:** Nenhuma.
* **Responsividade:** Grid 1 coluna mobile, 2 colunas no desktop (com ilustração da mãe descansando de um lado e os bullets do outro).
* **Critérios de Aceite:** Ícones de check nos bullets devem ser verdes (`--color-secondary`) para passar sensação de resolução e positividade.

### 10. BonusSection
* **Objetivo:** Elevar o valor percebido exibindo os 3 presentes gratuitos inclusos na compra.
* **Conteúdo:** Três cards específicos: `AudioBonusCard`, `FoldableBonusCard`, `ChristianCornerGuideCard`.
* **Props:** Nenhuma.
* **Responsividade:** Empilhado verticalmente no mobile; grid de 3 colunas no desktop.
* **Critérios de Aceite:** Cada card deve exibir claramente o selo "BÔNUS GRÁTIS" com destaque de cor.

### 11. ProofSection
* **Objetivo:** Gerar validação social e autoridade através de provas reais de uso.
* **Conteúdo:** Carrossel de fotos de crianças reais pintando, prints de WhatsApp de mães e a seção sobre a Carol.
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Slider horizontal para os depoimentos (evita rolagem vertical excessiva).
  * **Desktop:** Grid de depoimentos (estilo alvenaria/masonry).
* **Critérios de Aceite:** Garantir que as imagens carreguem via lazy loading e tenham compressão adequada para não comprometer a velocidade da página.

### 12. OfferSection
* **Objetivo:** Fechar a venda apresentando o preço promocional e o CTA final de compra.
* **Conteúdo:** Lista de itens inclusos na oferta, ancoragem de preço (De R$ 137 por R$ 37), opções de parcelamento, botão de compra destacado e selos de segurança.
* **Props:** Nenhuma.
* **Estados:**
  * Contador de escassez ativo (opcional).
  * Hover com animação de pulso suave no botão de CTA.
* **Responsividade:** Caixa de oferta centralizada com bordas arredondadas e sombra destacada (`--shadow-card`).
* **Critérios de Aceite:** O preço de R$ 37 deve ser o elemento visual de maior destaque na seção (fonte grande e cor vibrante).

### 13. GuaranteeSection
* **Objetivo:** Eliminar o risco de perda financeira do comprador.
* **Conteúdo:** Selo de garantia de 7 dias, título "Teste sem risco" e texto explicativo da devolução rápida.
* **Props:** Nenhuma.
* **Responsividade:**
  * **Mobile:** Selo no topo, texto centralizado abaixo.
  * **Desktop:** Layout horizontal de 2 colunas (Selo à esquerda, texto à direita).
* **Critérios de Aceite:** Texto de garantia claro e sem letras miúdas.

### 14. FAQSection
* **Objetivo:** Resolver as últimas dúvidas e objeções técnicas na própria página.
* **Conteúdo:** Título + lista de acordeões contendo perguntas e respostas.
* **Props:** `faqItems: Array`.
* **Estados:**
  * Aberto/Fechado no clique (com transição suave de altura e rotação do ícone de seta).
* **Responsividade:** Largura máxima de 800px em todas as telas.
* **Critérios de Aceite:** Apenas um acordeão deve ficar aberto por vez (comportamento de sanfona), otimizando o espaço de tela no mobile.

### 15. StickyMobileCTA
* **Objetivo:** Facilitar a compra a qualquer momento durante a rolagem no celular.
* **Conteúdo:** Botão compacto "Quero o Mãos na Palavra™ — R$ 37".
* **Props:** Nenhuma.
* **Estados:**
  * Oculto na primeira dobra (Hero).
  * Visível após o usuário rolar mais de 600px de tela.
  * Oculto temporariamente ao passar pela seção de oferta principal (para evitar duplicidade visual).
* **Responsividade:** Exibido **apenas** em dispositivos móveis (`display: none` em telas > 640px).
* **Critérios de Aceite:** Fixado na base da tela (`position: fixed; bottom: 0; left: 0; width: 100%`). Deve ter um `z-index` elevado (ex: 999) e sombra para se destacar do conteúdo de fundo.

### 16. Footer
* **Objetivo:** Segurança institucional, suporte e conformidade com a LGPD.
* **Conteúdo:** Direitos autorais, CNPJ da empresa, links para Termos de Uso e Políticas de Privacidade, e-mail de contato de suporte.
* **Props:** Nenhuma.
* **Responsividade:** Centralizado em todas as telas.
* **Critérios de Aceite:** Texto pequeno, mas legível e em conformidade com as diretrizes de acessibilidade (contraste).

### 17. CharacterIllustration
* **Objetivo:** Inserir os mascotes da marca em pontos estratégicos para guiar o olhar do usuário.
* **Props:** `characterName: 'mila' | 'ben' | 'ovelha' | 'lapis'`, `position: 'left' | 'right'`, `expression: 'happy' | 'thoughtful'`.
* **Responsividade:** Pode ser ocultado ou reduzido no mobile se obstruir a leitura do texto principal.
* **Critérios de Aceite:** Usar formato SVG ou WebP de alta qualidade com fundo transparente.

### 18. ProductMockup
* **Objetivo:** Materializar visualmente o produto digital em formato físico.
* **Props:** `type: 'hero_main' | 'product_presentation' | 'offer_recap'`.
* **Responsividade:** Redimensionar proporcionalmente. No mobile, usar sombras projetadas leves para dar sensação de profundidade em telas pequenas.
* **Critérios de Aceite:** O mockup deve mostrar claramente que o produto contém páginas de atividades impressas (folhas soltas saindo do livro).

### 19. AudioBonusCard (Bônus 1)
* **Objetivo:** Apresentar o bônus de áudio com interatividade prática.
* **Conteúdo:** Apresentação do bônus + player de áudio funcional com uma faixa demonstrativa curta.
* **Props:** Nenhuma.
* **Estados do Player:** Play, Pause, Loading, progresso da faixa.
* **Critérios de Aceite:** O player deve ser extremamente simples (botão play/pause circular grande e barra de progresso visual). O áudio demonstrativo deve ser leve (carregamento rápido).

### 20. FoldableBonusCard (Bônus 2)
* **Objetivo:** Mostrar o bônus de dobraduras e corte/colagem.
* **Conteúdo:** Apresentação das dobraduras (arca, ovelha, barquinho) com ilustrações dos modelos montados.
* **Props:** Nenhuma.
* **Critérios de Aceite:** Exibir imagens vetorizadas ou renderizadas em 3D dos brinquedos de papel prontos para gerar desejo de montagem.

### 21. ChristianCornerGuideCard (Bônus 3)
* **Objetivo:** Apresentar o guia de montagem do "Cantinho Cristão".
* **Conteúdo:** Foto/ilustração de um espaço lúdico montado de forma simples e aconchegante, com descrição do bônus.
* **Props:** Nenhuma.
* **Critérios de Aceite:** A imagem deve transmitir sentimentos de paz, organização e simplicidade (sem móveis caros, focando em almofadas, tapete, mesinha e desenhos).
