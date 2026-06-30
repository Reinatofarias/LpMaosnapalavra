# 3. Architecture Decision Records (ADRs)

Este documento registra as decisões de arquitetura de software, design de conversão (CRO) e experiência de usuário (UX) adotadas na criação da landing page do **Mãos na Palavra™**.

---

## Mapeamento dos ADRs

* [ADR 001 — Landing Page Mobile-First](#adr-001--landing-page-mobile-first)
* [ADR 002 — Storytelling vs. Estrutura Informativa](#adr-002--storytelling-vs-estrutura-informativa)
* [ADR 003 — Uso de Personagens Infantis Cristãos](#adr-003--uso-de-personagens-infantis-cristãos)
* [ADR 004 — Hero com Mockup do Produto + Criança Colorindo](#adr-004--hero-com-mockup-do-produto--criança-colorindo)
* [ADR 005 — CTA Repetido em Pontos Estratégicos](#adr-005--cta-repetido-em-pontos-estratégicos)
* [ADR 006 — Oferta Ancorada em Preço Promocional](#adr-006--oferta-ancorada-em-preço-promocional)
* [ADR 007 — FAQ Extenso para Reduzir Objeções](#adr-007--faq-extenso-para-reduzir-objeções)
* [ADR 008 — Design Visual Infantil com Acabamento Premium](#adr-008--design-visual-infantil-com-acabamento-premium)
* [ADR 009 — Prova Visual e Social de Alta Fidelidade](#adr-009--prova-visual-e-social-de-alta-fidelidade)
* [ADR 010 — Otimização Extrema de Carregamento (Performance)](#adr-010--otimização-extrema-de-carregamento-performance)
* [ADR 011 — Componentização de Interface no Front-end](#adr-011--componentizacao-de-interface-no-front-end)
* [ADR 012 — Eventos de Rastreamento Avançado para Conversão](#adr-012--eventos-de-rastreamento-avançado-para-conversão)

---

## ADR 001 — Landing Page Mobile-First

* **Status:** Aprovado.
* **Contexto:** Mais de 85% do tráfego vindo de campanhas de anúncios em redes sociais (Meta Ads, Instagram) para infoprodutos voltados a mães é originado em smartphones. Landing pages construídas com foco em desktop frequentemente apresentam quebras de layout, tempos de carregamento elevados e taxas de conversão baixas quando acessadas via mobile.
* **Decisão:** Desenvolver a página adotando a filosofia *Mobile-First*. O design será concebido inicialmente para telas de 360px a 420px de largura, com empilhamento vertical limpo, botões de toque com tamanho mínimo de 48px e imagens otimizadas para carregamento em redes móveis 3G/4G. A versão desktop será uma expansão adaptativa desse layout.
* **Consequências Positivas:**
  * Aumento na taxa de conversão geral devido à excelente experiência no celular.
  * Redução na taxa de rejeição (bounce rate) de tráfego pago.
  * Melhoria no índice de qualidade dos anúncios no Meta Ads devido à velocidade e usabilidade mobile.
* **Consequências Negativas:**
  * O layout em telas muito grandes (desktop ultrawide) exige regras rígidas de largura máxima (`max-width: 1200px`) para evitar dispersão visual dos elementos.
* **Alternativas Consideradas:** Layout responsivo clássico (desenhar primeiro desktop e depois adaptar para mobile com media queries). Descartado porque costuma gerar código inflado e pior usabilidade no celular.

---

## ADR 002 — Storytelling vs. Estrutura Informativa

* **Status:** Aprovado.
* **Contexto:** Vender um infoproduto digital de baixo valor (R$ 37) para mães cansadas requer mais do que listar as características técnicas do PDF. É preciso gerar conexão emocional, empatia e fazer a mãe se sentir compreendida em sua rotina diária.
* **Decisão:** Utilizar uma narrativa de *storytelling* de resposta direta. A estrutura da página guiará a usuária pela dor comum da rotina ("Você reconhece essa situação?"), validará suas emoções (tirando o peso da culpa), apresentará a virada filosófica ("Criança não fica com as mãos vazias") e só então introduzirá o produto como a solução natural e imediata para essa jornada.
* **Consequências Positivas:**
  * Maior tempo de permanência na página.
  * Redução da resistência à venda (quebra de barreiras de compra antes de exibir o preço).
  * Construção de uma marca afetiva de longo prazo, facilitando vendas futuras.
* **Consequências Negativas:**
  * Aumento da extensão vertical da página, exigindo cuidado redobrado com a escaneabilidade do texto (títulos fortes, negritos estratégicos).
* **Alternativas Consideradas:** Página de vendas direta informativa (ir direto ao produto e preço na primeira dobra). Descartado por apresentar taxas de conversão historicamente mais baixas em tráfego frio.

---

## ADR 003 — Uso de Personagens Infantis Cristãos

* **Status:** Aprovado.
* **Contexto:** A promessa do produto envolve aproximar as crianças de Jesus através de atividades lúdicas. O visual precisa refletir esse universo de forma imediata. Personagens e mascotes humanizam a marca e criam uma conexão direta com o universo infantil.
* **Decisão:** Integrar personagens e mascotes originais (uma menina, um menino, uma ovelhinha e elementos bíblicos ilustrados) de forma orgânica na interface da landing page. Eles atuarão como guias visuais e elementos de quebra de texto, sem competir com a oferta ou poluir o fluxo de leitura.
* **Consequências Positivas:**
  * Diferenciação visual imediata frente a concorrentes genéricos (que usam imagens de banco de dados).
  * Aumento do valor percebido do produto digital (parece uma marca editorial consolidada).
  * Criação de identidade visual memorável que pode ser expandida para futuros produtos.
* **Consequências Negativas:**
  * Necessidade de ilustração personalizada (aumento do custo/tempo de design inicial).
* **Alternativas Consideradas:** Utilizar fotos genéricas de bancos de imagens. Descartado por passar uma impressão de amadorismo, falta de exclusividade ou site institucional frio.

---

## ADR 004 — Hero com Mockup do Produto + Criança Colorindo

* **Status:** Aprovado.
* **Contexto:** Por se tratar de um produto digital (PDF), existe uma barreira cognitiva de compra: o usuário tem dificuldade de valorizar o que não pode "tocar". A primeira dobra precisa materializar o produto digital e, simultaneamente, mostrar o produto sendo usado com sucesso na vida real.
* **Decisão:** A seção Hero deve conter uma composição visual dupla: um mockup 3D realista de alta qualidade do livro aberto (revelando as páginas internas com ilustrações ricas) sobreposto ou ao lado de uma imagem de uma criança colorindo o papel em um ambiente acolhedor, com iluminação natural.
* **Consequências Positivas:**
  * Materialização instantânea do valor do produto (o cliente entende o que vai receber).
  * Demonstração clara do benefício final (a criança concentrada e calma pintando fora das telas).
  * Diminuição da taxa de reembolso de clientes que achavam que receberiam um livro físico (pois o mockup mostra as folhas impressas soltas e selos informando "para imprimir").
* **Consequências Negativas:**
  * Complexidade técnica na montagem do asset gráfico para que fique leve e responsivo.
* **Alternativas Consideradas:** Exibir apenas o mockup do livro digital (tipo e-book 3D fechado). Descartado porque e-books fechados passam a impressão de leitura cansativa, e não de atividades dinâmicas.

---

## ADR 005 — CTA Repetido em Pontos Estratégicos

* **Status:** Aprovado.
* **Contexto:** Os usuários têm níveis diferentes de prontidão para a compra. Alguns decidem comprar logo na primeira dobra; outros precisam ler os depoimentos, entender os bônus ou sanar dúvidas no FAQ.
* **Decisão:** Distribuir o botão de Chamada para Ação (CTA) em 4 pontos cruciais da página: 1. Na Hero (primeira dobra), 2. Logo após a apresentação detalhada do produto, 3. Na seção de Oferta Principal, e 4. Logo após o FAQ. Adicionalmente, implementar o Sticky CTA no mobile.
* **Consequências Positivas:**
  * Redução do atrito de navegação (o usuário não precisa rolar a página inteira de volta para achar o botão de compra).
  * Captura do usuário no seu momento exato de conversão.
* **Consequências Negativas:**
  * Risco de parecer repetitivo ou agressivo se os botões usarem exatamente o mesmo texto e cor sem harmonia visual.
* **Alternativas Consideradas:** Apenas um botão de compra na seção de oferta no final da página. Descartado porque gera perda de conversão de usuários decididos.

---

## ADR 006 — Oferta Ancorada em Preço Promocional

* **Status:** Aprovado.
* **Contexto:** O preço de R$ 37 é extremamente acessível (compra por impulso). No entanto, para ativar o gatilho mental da reciprocidade e da oportunidade, o valor precisa ser comparado a uma referência de preço cheio que reflita o trabalho de criação.
* **Decisão:** Apresentar o preço com ancoragem explícita: "De R$ 137 por apenas R$ 37 à vista (ou 5x de R$ 10,52)". Explicar de forma honesta que o valor reduzido é uma oferta de lançamento para ajudar o maior número possível de famílias cristãs.
* **Consequências Positivas:**
  * Aumento da taxa de conversão por impulso.
  * Percepção de alta vantagem financeira (desconto real de R$ 100).
* **Consequências Negativas:**
  * Pode atrair clientes muito sensíveis a preço que exigem suporte excessivo para um produto de baixo ticket.
* **Alternativas Consideradas:** Vender diretamente por R$ 37 sem mencionar nenhum valor anterior. Descartado porque reduz o gatilho de urgência e oportunidade.

---

## ADR 007 — FAQ Extenso para Reduzir Objeções

* **Status:** Aprovado.
* **Contexto:** Clientes de infoprodutos digitais costumam ter muitas dúvidas operacionais (como recebo? posso imprimir quantas vezes? serve para qual idade? e se eu não tiver impressora?). Se essas dúvidas não forem respondidas na página, o cliente abandona a compra.
* **Decisão:** Implementar uma seção de Perguntas Frequentes (FAQ) muito robusta, contendo 15 perguntas mapeadas com base nas principais dúvidas do suporte, utilizando a estrutura de acordeão interativo para manter a página organizada.
* **Consequências Positivas:**
  * Drástica redução de chamados de suporte pré-venda.
  * Aumento da taxa de conversão de usuários analíticos.
  * Melhoria no SEO da página através da marcação de dados estruturados de FAQ (FAQPage Schema).
* **Consequências Negativas:**
  * Adiciona peso de script de interação (resolvido com JS nativo ultra-leve ou CSS puro).
* **Alternativas Consideradas:** FAQ curto com 4 ou 5 perguntas. Descartado porque deixa muitas dúvidas comuns sem resposta na página.

---

## ADR 008 — Design Visual Infantil com Acabamento Premium

* **Status:** Aprovado.
* **Contexto:** A página vende um produto para crianças, mas quem toma a decisão de compra e paga são os pais. Um design excessivamente infantil, infantilizado ou amador pode passar a impressão de baixa qualidade pedagógica ou técnica.
* **Decisão:** Desenvolver um estilo visual "Editorial Cristão Infantil Premium". Usar cores suaves e calorosas (tons pastel, bege caloroso, terracota suave, verde oliva infantil), tipografia elegante e moderna (misturando uma fonte serifada acolhedora com uma sem serifa limpa) e ilustrações com acabamento artístico profissional, texturas de papel e aquarela suave.
* **Consequências Positivas:**
  * Alta credibilidade imediata com os pais.
  * Posicionamento do produto como material educativo de alto padrão (justificando o valor de ancoragem).
  * Leitura agradável e repousante, em sintonia com o benefício de "calma" do produto.
* **Consequências Negativas:**
  * Exige maior refinamento do designer de interface para dosar o lúdico e o institucional.
* **Alternativas Consideradas:** Design puramente corporativo/educacional (estilo escola) ou design puramente infantil colorido com cores primárias saturadas (azul, vermelho, amarelo puro). Ambos descartados por não transmitirem a sensibilidade e o prêmio da marca.

---

## ADR 009 — Prova Visual e Social de Alta Fidelidade

* **Status:** Aprovado.
* **Contexto:** Fraudes na internet geram desconfiança. As mães querem ter certeza de que o material realmente existe, que chega no e-mail e que outras crianças reais gostaram e usaram.
* **Decisão:** Dedicar uma seção inteira para exibir provas visuais: fotos reais enviadas por mães com seus filhos pintando as folhas impressas na mesa de casa, capturas de tela (prints) reais de mensagens de agradecimento no WhatsApp/Instagram e um vídeo curto demonstrativo mostrando o livro impresso sendo folheado e o áudio bônus tocando.
* **Consequências Positivas:**
  * Destruição instantânea da objeção de que "o produto é golpe" ou "meu filho não vai se interessar".
  * Humanização profunda da marca.
* **Consequências Negativas:**
  * Imagens reais de clientes podem quebrar ligeiramente a paleta de cores perfeita do design da LP. Deve-se usar molduras e tratamentos suaves para integrá-las.
* **Alternativas Consideradas:** Depoimentos apenas em texto com nomes fictícios. Descartado porque depoimentos sem foto ou sem print de rede social têm baixíssima credibilidade hoje em dia.

---

## ADR 010 — Otimização Extrema de Carregamento (Performance)

* **Status:** Aprovado.
* **Contexto:** Cada segundo extra no carregamento de uma landing page reduz a taxa de conversão em até 20%. Mães acessando o site via 4G instável na rua ou enquanto cuidam dos filhos não vão esperar uma página pesada carregar.
* **Decisão:** Aplicar técnicas severas de otimização de performance: imagens convertidas para o formato WebP/AVIF com dimensões exatas de exibição, ativação de *lazy loading* para imagens fora da dobra inicial, uso de fontes locais ou carregadas de forma assíncrona com `font-display: swap`, e eliminação de frameworks CSS ou JS pesados.
* **Consequências Positivas:**
  * Carregamento da primeira dobra em menos de 1.2 segundos em redes 4G.
  * Melhor posicionamento orgânico e menor custo por clique em campanhas de tráfego.
* **Consequências Negativas:**
  * Exige maior rigor no desenvolvimento front-end (evitar o uso de builders visuais pesados como Elementor/WordPress se possível, ou otimizá-los ao extremo caso utilizados).
* **Alternativas Consideradas:** Usar templates padrão de builders sem otimização específica. Descartado devido ao impacto negativo nas métricas de tráfego pago.

---

## ADR 011 — Componentização de Interface no Front-end

* **Status:** Aprovado.
* **Contexto:** A landing page precisa de manutenção ágil, testes A/B constantes e possível reaproveitamento de seções para páginas de obrigado, páginas de captura ou upsell.
* **Decisão:** Desenvolver a landing page utilizando uma arquitetura baseada em componentes reutilizáveis. Cada bloco da página (Hero, Dor, Oferta, FAQ) será um componente isolado com responsabilidades bem definidas, facilitando a troca de ordem das seções ou a alteração de textos e estilos.
* **Consequências Positivas:**
  * Código limpo, modular e de fácil manutenção.
  * Facilidade para rodar testes A/B isolando componentes.
  * Agilidade no desenvolvimento de novas páginas da mesma esteira de produtos.
* **Consequências Negativas:**
  * Overhead inicial pequeno na organização das pastas e declaração de interfaces.
* **Alternativas Consideradas:** Código monolítico em um único arquivo HTML gigante. Descartado por dificultar a manutenção e testes A/B.

---

## ADR 012 — Eventos de Rastreamento Avançado para Conversão

* **Status:** Aprovado.
* **Contexto:** Para otimizar as campanhas de tráfego pago (Meta Ads/Google Ads), o algoritmo precisa saber exatamente quais comportamentos os usuários estão tomando na página, e não apenas se eles compraram ou não.
* **Decisão:** Implementar um plano de medição de dados via Google Tag Manager (GTM) disparando eventos personalizados para o GA4 e a API de Conversões do Meta (Pixel). Rastrear cliques nos CTAs de forma individualizada, profundidade de rolagem (scroll depth), tempo de permanência ativa e interações com o FAQ e o player de áudio.
* **Consequências Positivas:**
  * Alimentação inteligente dos algoritmos de anúncios (otimização de lances para públicos mais propensos a converter).
  * Geração de insights reais sobre onde os usuários estão abandonando a página.
* **Consequências Negativas:**
  * Necessidade de configuração técnica e conformidade estrita com políticas de cookies/LGPD.
* **Alternativas Consideradas:** Rastrear apenas a página de obrigado (Purchase). Descartado por limitar drasticamente o poder de otimização das campanhas de tráfego.
