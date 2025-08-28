// Script para o menu mobile
        const hamburger = document.querySelector('.header-hamburger');
        const navLinks = document.querySelector('.header-links');
        const navItems = document.querySelectorAll('.header-links a');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link (mobile)
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Script para o carrossel (se necessário)
        const slides = document.querySelectorAll('.slide');
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        if (slides.length > 0) {
            let current = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    const img = slide.querySelector('img');
                    if (img) {
                        img.style.transform = 'rotateY(0deg)';
                        img.style.opacity = '1';
                    }

                    if (i === index) {
                        slide.classList.add('active');
                    }
                });
            }

            function transitionImage(slide) {
                const img = slide.querySelector('img');
                if (img) {
                    img.style.transform = 'rotateY(360deg)';
                    img.style.opacity = '0';
                }
            }

            function nextSlide() {
                transitionImage(slides[current]);

                setTimeout(() => {
                    current = (current + 1) % slides.length;
                    showSlide(current);
                }, 800);
            }

            function prevSlide() {
                transitionImage(slides[current]);

                setTimeout(() => {
                    current = (current - 1 + slides.length) % slides.length;
                    showSlide(current);
                }, 800);
            }

            if (next) next.addEventListener('click', nextSlide);
            if (prev) prev.addEventListener('click', prevSlide);

            // Auto play
            setInterval(nextSlide, 5000);
        }




