/**
 * MÃOS NA PALAVRA™ — SCRIPT DE INTERAÇÕES E RASTREAMENTO
 * ----------------------------------------------------------------------
 * Responsável pelas microinterações (FAQ, Audio Player, Sticky CTA)
 * e disparos de eventos para o Google Tag Manager / GA4 / Meta Pixel.
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================================================
  // 1. RASTREAMENTO (Analytics / dataLayer Helpers)
  // ==========================================================================
  
  window.dataLayer = window.dataLayer || [];
  
  /**
   * Envia eventos personalizados para o GTM
   * @param {string} eventName - Nome do evento
   * @param {object} properties - Propriedades adicionais
   */
  function trackEvent(eventName, properties = {}) {
    window.dataLayer.push({
      event: eventName,
      ...properties
    });
    console.log(`[Analytics Event]: ${eventName}`, properties);
  }

  // Rastrear cliques em todos os botões de CTA
  const ctaButtons = document.querySelectorAll('a[href*="kiwify.com.br"], a[href="#secao-oferta"]');
  ctaButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      let location = "unknown";
      
      // Identifica de onde partiu o clique
      if (button.closest(".hero-section")) location = "hero";
      else if (button.closest(".presentation-section")) location = "presentation";
      else if (button.closest(".offer-section")) location = "offer";
      else if (button.closest(".faq-section")) location = "faq";
      else if (button.closest(".sticky-mobile-cta")) location = "sticky_mobile";
      
      trackEvent("click_cta", {
        cta_location: location,
        cta_text: button.textContent.trim().replace(/\s+/g, ' '),
        destination_url: button.getAttribute("href")
      });
    });
  });

  // Rastreamento de Profundidade de Rolagem (Scroll Depth)
  let scrolled25 = false;
  let scrolled50 = false;
  let scrolled75 = false;
  let scrolled90 = false;

  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    
    const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    if (percent >= 25 && !scrolled25) {
      scrolled25 = true;
      trackEvent("scroll_depth", { percent: 25 });
    }
    if (percent >= 50 && !scrolled50) {
      scrolled50 = true;
      trackEvent("scroll_depth", { percent: 50 });
    }
    if (percent >= 75 && !scrolled75) {
      scrolled75 = true;
      trackEvent("scroll_depth", { percent: 75 });
    }
    if (percent >= 90 && !scrolled90) {
      scrolled90 = true;
      trackEvent("scroll_depth", { percent: 90 });
    }
  });

  // ==========================================================================
  // 2. ACCORDION DO FAQ (Perguntas Frequentes)
  // ==========================================================================
  
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");

    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fecha todos os outros acordeões (comportamento de sanfona único)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-panel").style.maxHeight = null;
        }
      });

      // Abre/Fecha o item clicado
      if (!isActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        // Define a altura máxima baseada no scrollHeight para animar suavemente
        panel.style.maxHeight = panel.scrollHeight + "px";
        
        // Rastreia a abertura de dúvida no FAQ
        const questionText = trigger.querySelector("span").textContent.trim();
        trackEvent("faq_expand", { faq_question: questionText });
      } else {
        item.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = null;
      }
    });
  });

  // ==========================================================================
  // 3. PLAYER DE ÁUDIO DE MOCKUP (Bônus 1)
  // ==========================================================================
  
  const audio = document.getElementById("demo-audio");
  const playBtn = document.getElementById("btn-audio-play");
  const svgPlay = document.getElementById("svg-play");
  const svgPause = document.getElementById("svg-pause");
  const progressBar = document.getElementById("audio-progress");
  const timeDisplay = document.getElementById("audio-time");
  const soundwave = document.getElementById("soundwave-container");

  if (audio && playBtn) {
    // Formata segundos em minutos:segundos (ex: 0:45)
    function formatTime(seconds) {
      if (isNaN(seconds)) return "0:00";
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // Se os metadados já estiverem carregados, exibe a duração
    if (audio.readyState >= 1) {
      timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
    } else {
      audio.addEventListener("loadedmetadata", () => {
        timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
      });
    }

    // Toggle Play / Pause
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        if (audio.readyState === 0) {
          audio.load();
        }
        audio.play()
          .then(() => {
            svgPlay.style.display = "none";
            svgPause.style.display = "block";
            if (soundwave) soundwave.classList.add("soundwave-active");
            trackEvent("audio_demo_play", { audio_title: "Historia de Davi" });
          })
          .catch(err => console.error("Erro ao reproduzir o áudio:", err));
      } else {
        audio.pause();
        svgPlay.style.display = "block";
        svgPause.style.display = "none";
        if (soundwave) soundwave.classList.remove("soundwave-active");
      }
    });

    // Atualiza barra de progresso e tempo corrido
    audio.addEventListener("timeupdate", () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    // Reseta player ao finalizar a reprodução
    audio.addEventListener("ended", () => {
      svgPlay.style.display = "block";
      svgPause.style.display = "none";
      if (soundwave) soundwave.classList.remove("soundwave-active");
      progressBar.style.width = "0%";
      audio.currentTime = 0;
    });
  }

  // ==========================================================================
  // 4. STICKY MOBILE CTA (Botão Flutuante Mobile)
  // ==========================================================================
  
  const stickyCta = document.getElementById("sticky-cta-mobile");
  const offerSection = document.getElementById("secao-oferta");

  if (stickyCta && offerSection) {
    
    // Usamos Intersection Observer para monitorar quando a oferta principal está visível na tela
    const observerOptions = {
      root: null, // viewport
      threshold: 0.1 // Dispara quando 10% da seção de oferta estiver visível
    };

    let offerIsVisible = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        offerIsVisible = entry.isIntersecting;
        handleStickyVisibility();
      });
    }, observerOptions);

    observer.observe(offerSection);

    function handleStickyVisibility() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const isMobile = window.innerWidth < 1024;

      // Exibe se: estiver no mobile, rolou mais de 600px E a seção de oferta principal NÃO está visível
      if (isMobile && scrollPosition > 600 && !offerIsVisible) {
        stickyCta.classList.add("visible");
      } else {
        stickyCta.classList.remove("visible");
      }
    }

    // Monitora eventos de rolagem e redimensionamento para atualizar o estado do botão
    window.addEventListener("scroll", handleStickyVisibility);
    window.addEventListener("resize", handleStickyVisibility);
  }

  // ==========================================================================
  // 5. CARROSSEL DE PRÉVIAS DO LIVRO (Page 1 a 5)
  // ==========================================================================
  
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("btn-carousel-prev");
  const nextBtn = document.getElementById("btn-carousel-next");
  const indicators = document.querySelectorAll(".carousel-indicators .indicator");
  
  if (slides.length > 0 && prevBtn && nextBtn) {
    let currentSlide = 0;
    
    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }
      
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (indicators[i]) indicators[i].classList.remove("active");
      });
      
      slides[currentSlide].classList.add("active");
      if (indicators[currentSlide]) indicators[currentSlide].classList.add("active");
      
      trackEvent("view_preview_page", {
        page_number: currentSlide + 1
      });
    }
    
    // Auto-play do carrossel (avança a cada 4.5 segundos)
    let autoPlayInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4500);
    
    // Reseta o temporizador ao interagir manualmente
    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 4500);
    }
    
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      resetAutoPlay();
    });
    
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      resetAutoPlay();
    });
    
    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        showSlide(i);
        resetAutoPlay();
      });
    });
  }

  // ==========================================================================
  // 5b. CARROSSEL DE DEPOIMENTOS (Testimonials Carousel)
  // ==========================================================================
  
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const testimonialPrevBtn = document.getElementById("btn-testimonial-prev");
  const testimonialNextBtn = document.getElementById("btn-testimonial-next");
  const testimonialIndicators = document.querySelectorAll("#testimonial-indicators .indicator");
  
  if (testimonialSlides.length > 0 && testimonialPrevBtn && testimonialNextBtn) {
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      if (index >= testimonialSlides.length) {
        currentTestimonial = 0;
      } else if (index < 0) {
        currentTestimonial = testimonialSlides.length - 1;
      } else {
        currentTestimonial = index;
      }
      
      testimonialSlides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (testimonialIndicators[i]) testimonialIndicators[i].classList.remove("active");
      });
      
      testimonialSlides[currentTestimonial].classList.add("active");
      if (testimonialIndicators[currentTestimonial]) testimonialIndicators[currentTestimonial].classList.add("active");
      
      trackEvent("view_testimonial", {
        testimonial_index: currentTestimonial + 1
      });
    }
    
    // Auto-play do carrossel (avança a cada 6 segundos)
    let testimonialAutoPlay = setInterval(() => {
      showTestimonial(currentTestimonial + 1);
    }, 6000);
    
    function resetTestimonialAutoPlay() {
      clearInterval(testimonialAutoPlay);
      testimonialAutoPlay = setInterval(() => {
        showTestimonial(currentTestimonial + 1);
      }, 6000);
    }
    
    testimonialPrevBtn.addEventListener("click", () => {
      showTestimonial(currentTestimonial - 1);
      resetTestimonialAutoPlay();
    });
    
    testimonialNextBtn.addEventListener("click", () => {
      showTestimonial(currentTestimonial + 1);
      resetTestimonialAutoPlay();
    });
    
    testimonialIndicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        showTestimonial(i);
        resetTestimonialAutoPlay();
      });
    });
  }

  // ==========================================================================
  // 6. ANIMAÇÃO DE REVELAÇÃO NO SCROLL (Scroll Reveal)
  // ==========================================================================
  
  const revealElements = document.querySelectorAll(".reveal, .reveal-cascade");
  
  if (revealElements.length > 0) {
    const revealObserverOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    }, revealObserverOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ==========================================================================
  // 7. BUSCA EM TEMPO REAL NO FAQ (FAQ Filter)
  // ==========================================================================
  
  const faqSearchInput = document.getElementById("faq-search-input");
  
  if (faqSearchInput && faqItems.length > 0) {
    faqSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      faqItems.forEach(item => {
        const questionText = item.querySelector(".faq-trigger span").textContent.toLowerCase();
        const answerText = item.querySelector(".faq-panel p").textContent.toLowerCase();
        
        if (questionText.includes(query) || answerText.includes(query)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});
