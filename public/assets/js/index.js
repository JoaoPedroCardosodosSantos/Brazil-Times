document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide-box');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
});

// 'Segurança de Redes',
// 'Segurança de Aplicações',
// 'Segurança em Cloud', 
// 'Segurança de Endpoint',
// 'Segurança de Banco de Dados',
// 'Criptografia',
// 'Forense Digital',
// 'Pentesting',
// 'Engenharia Reversa',
// 'Red Team',
// 'Blue Team',
// 'Threat Intelligence',
// 'Gestão de Identidade e Acesso (IAM)',
// 'Análise de Malware',
// 'Segurança de IoT',
// 'Segurança de Sistemas Operacionais',
// 'Segurança Mobile',
// 'Governança, Risco e Compliance (GRC)',
// 'SOC (Security Operations Center)'

// Network Security

// Application Security

// Cloud Security

// Endpoint Security

// Database Security

// Cryptography

// Digital Forensics

// Penetration Testing (Pentesting)

// Reverse Engineering

// Red Team

// Blue Team

// Threat Intelligence -

// Identity and Access Management (IAM)

// Malware Analysis

// IoT Security

// Operating System Security

// Mobile Security

// Governance, Risk, and Compliance (GRC)

// SOC (Security Operations Center)