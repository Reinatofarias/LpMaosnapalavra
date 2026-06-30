# 9. QA Checklist & Validação Final

Este documento apresenta o checklist estruturado de garantia de qualidade (QA) para validação da Landing Page do **Mãos na Palavra™** antes de sua publicação oficial em ambiente de produção.

---

## Módulos de Validação

O processo de homologação foi dividido em 9 áreas críticas:

1. [Conteúdo & Revisão Textual](#1-conteúdo--revisão-textual)
2. [Interface & Design Visual](#2-interface--design-visual)
3. [Responsividade & Dispositivos](#3-responsividade--dispositivos)
4. [Links & Integração de Pagamento](#4-links--integração-de-pagamento)
5. [Tags, Pixel & Rastreamento](#5-tags-pixel--rastreamento)
6. [SEO & Acessibilidade](#6-seo--acessibilidade)
7. [Performance & Velocidade](#7-performance--velocidade)
8. [Legal & Conformidade (LGPD)](#8-legal--conformidade-lgpd)
9. [Teste do Fluxo do Usuário (End-to-End)](#9-teste-do-fluxo-do-usuário-end-to-end)

---

### 1. Conteúdo & Revisão Textual
* [ ] **Ortografia e Gramática:** Revisar todos os textos da página com atenção especial para hífens, acentuação e concordância.
* [ ] **Tom de Voz:** Garantir que o tom da copy seja acolhedor, materno e cristão, sem apelos agressivos ou termos que gerem culpa excessiva nos pais.
* [ ] **Promessa do Produto:** Validar se a promessa está correta ("ajudar a substituir alguns momentos de tela por atividades físicas cristãs") e se não há promessas médicas, psicológicas ou de eliminação total de telas.
* [ ] **Consistência de Valores:** Verificar se a moeda (R$ 37), opções de parcelamento (5x de R$ 10,52) e o desconto (De R$ 137 por R$ 37) estão idênticos em todas as seções da página.
* [ ] **FAQ:** Testar se as 15 perguntas e respostas estão completas, sem erros de digitação.

### 2. Interface & Design Visual
* [ ] **Paleta de Cores:** Validar se os códigos hexadecimais aplicados em CSS correspondem exatamente aos definidos na direção de arte (Bege, Terracota, Verde Oliva, Amarelo).
* [ ] **Tipografia:** Verificar se as fontes "Fraunces" (títulos) e "Quicksand/Inter" (corpo) estão carregando corretamente e se não há fallback para fontes padrão do sistema (como Times New Roman).
* [ ] **Representação Teológica:** Garantir que as ilustrações de Jesus e passagens bíblicas sejam apresentadas de forma respeitosa, afetuosa e lúdica.
* [ ] **Texturas e Padrões:** Confirmar se a textura sutil de papel está aplicada de forma leve ao fundo da página e se não prejudica a leitura do texto.
* [ ] **Alinhamento e Margens:** Revisar o espaçamento entre seções (`--spacing-section`) para garantir respiro visual adequado.

### 3. Responsividade & Dispositivos
* [ ] **Visualização Mobile (360px a 420px):** Testar se a primeira dobra está legível e se o botão de CTA é facilmente acessível.
* [ ] **Visualização Tablet (768px a 1024px):** Verificar se o grid de 2 ou 3 colunas não quebra e se o espaçamento lateral está correto.
* [ ] **Visualização Desktop (1200px a 1920px):** Garantir que a largura máxima da página está limitada a `1200px` para o conteúdo, evitando dispersão visual.
* [ ] **Cross-Browser:** Testar o funcionamento e a renderização da página nos navegadores: Google Chrome, Safari (iOS), Firefox e Microsoft Edge.

### 4. Links & Integração de Pagamento
* [ ] **Links de Checkout:** Testar todos os botões de CTA e garantir que todos redirecionam para a URL correta do checkout da plataforma de pagamento (Hotmart, Kiwify ou Eduzz).
* [ ] **Parâmetros de Rastreamento (SRC):** Validar se cada botão envia o parâmetro identificador correto no link de destino (ex: `url?src=lp_hero`, `url?src=lp_offer`).
* [ ] **Links de Rodapé:** Verificar se os links para as páginas de Políticas de Privacidade e Termos de Uso estão funcionando e apontando para os arquivos corretos.
* [ ] **E-mail de Suporte:** Testar o link `mailto:suporte@maosnapalavra.com.br` no rodapé e no FAQ.

### 5. Tags, Pixel & Rastreamento
* [ ] **Google Tag Manager (GTM):** Validar se o container do GTM está instalado corretamente na tag `<head>` e no início do `<body>`.
* [ ] **Meta Pixel:** Utilizar a extensão *Meta Pixel Helper* para garantir que o evento `PageView` dispara no carregamento e que o pixel está ativo.
* [ ] **Google Analytics 4 (GA4):** Verificar no modo DebugView se as visualizações de página e eventos de clique estão sendo registrados.
* [ ] **Eventos Personalizados:** Testar se os eventos `click_cta`, `faq_expand`, `audio_demo_play` e `scroll_depth` são disparados nos momentos corretos de interação.

### 6. SEO & Acessibilidade
* [ ] **Hierarquia de Títulos (Hn):** Garantir que há exatamente um único `<h1>` na página (na Hero) e que as seções usam `<h2>` e os cards usam `<h3>`.
* [ ] **Alt Text em Imagens:** Confirmar que todos os elementos de imagem contêm o atributo `alt` preenchido com descrições claras e sem termos genéricos.
* [ ] **Contraste Mínimo:** Validar o contraste de cor de todos os textos contra os fundos da página (mínimo de 4.5:1).
* [ ] **Navegação por Teclado:** Garantir que é possível navegar por toda a página utilizando apenas a tecla `Tab` e ativar os elementos com a tecla `Enter`.
* [ ] **ARIA Roles:** Verificar se os acordeões do FAQ utilizam os atributos `aria-expanded` e `aria-controls` de forma dinâmica.

### 7. Performance & Velocidade
* [ ] **Google PageSpeed Insights:** Rodar o teste e validar se a pontuação para a versão Mobile é superior a **90**.
* [ ] **Compressão de Imagens:** Garantir que todas as imagens estão no formato WebP ou AVIF e que nenhuma imagem individual ultrapassa **150 KB**.
* [ ] **Lazy Loading:** Confirmar se o atributo `loading="lazy"` está aplicado em todas as imagens localizadas abaixo da primeira dobra.
* [ ] **Minificação:** Verificar se os arquivos de estilo CSS e lógica JavaScript estão minificados em ambiente de produção.

### 8. Legal & Conformidade (LGPD)
* [ ] **Aviso de Cookies:** Garantir a presença de um banner simples de consentimento de cookies no primeiro acesso do usuário.
* [ ] **Políticas e Termos:** Verificar se as páginas de políticas contêm as informações reais da empresa (Razão Social, CNPJ, e-mail de contato).
* [ ] **Direitos Autorais:** Confirmar que o rodapé exibe o ano corrente atualizado e a indicação de marca registrada (Mãos na Palavra™).
* [ ] **Isenção de Responsabilidade:** Validar a presença do texto de isenção médica/educacional no rodapé.

### 9. Teste do Fluxo do Usuário (End-to-End)
* [ ] **Acesso Inicial:** Entrar na página através de uma guia anônima simulando um visitante vindo de um anúncio no celular.
* [ ] **Leitura e Rolagem:** Rolar a página de forma lenta, observando se a transição entre as seções ocorre de forma suave e sem engasgos de performance.
* [ ] **Interação com Bônus:** Dar o play no player de áudio bônus e garantir que o áudio toca perfeitamente.
* [ ] **Resolução de Dúvidas:** Clicar em pelo menos 3 perguntas do FAQ para validar o funcionamento do acordeão.
* [ ] **Simulação de Compra:** Clicar no botão de CTA principal, ser redirecionado para o checkout, preencher dados fictícios e validar se o fluxo de pagamento é exibido sem erros.
* [ ] **Mobile Sticky CTA:** Confirmar se o botão flutuante aparece após a primeira dobra e desaparece ao atingir a seção de oferta principal no celular.
