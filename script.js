document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".headline", { y: -50, opacity: 0, duration: 1, delay: 1 });
    gsap.from(".cta-button", { y: 50, opacity: 0, duration: 1, delay: 2 });
    gsap.from(".feature", { x: -50, opacity: 0, stagger: 0.2, duration: 0.8, delay: 1.5 });
});
