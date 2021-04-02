const menu = document.querySelector('.mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('.navbar-logo')
const body = document.querySelector('body')

//Display mobile menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// gsap

gsap.registerPlugin(ScrollTrigger)

gsap.from('.gsap-home', {
    duration: 1.5,
    opacity: 0,
    x: -150,
    stagger: 0.3,
})

gsap.from('.gsap-services', {
    scrollTrigger: '.gsap-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
})

gsap.from('.gsap-services-img', {
    scrollTrigger: '.gsap-services-img',
    duration: 1.3,
    opacity: 0,
    x: -1000,
})


gsap.from('.gsap-membership', {
    scrollTrigger: '.gsap-membership',
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.9,
    delay: 1.5,
})

gsap.from('.gsap-card', {
    scrollTrigger: '.gsap-card',
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.4,
    delay: 1,
})

gsap.from('.gsap-staff', {
    scrollTrigger: '.gsap-staff',
    duration: 0.9,
    opacity: 0,
    y: -150,
    stagger: 0.4,
    delay: .7,
})