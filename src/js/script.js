document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Menu Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a'); // Links individuais

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navLinks.classList.toggle('active');
            
            // Alterna o ícone entre Barras e X
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fecha o menu automaticamente quando clicar em um link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Lógica da Navbar Transparente/Escura ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Rolagem Suave ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Console Easter Egg
    console.log("%c Olá, Dev! ", "background: #00ff94; color: #000; padding: 5px; border-radius: 5px; font-weight: bold;");
    console.log("Ambiente seguro carregado!")
});