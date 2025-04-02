// nav bar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));

// toggle basic
document.querySelectorAll('input[name="plan"]').forEach((radio) => {
    radio.addEventListener("change", function () {
        const priceText = document.getElementById("price");
        if (this.id === "basic") {
            priceText.textContent = "$600/m";
        } else {
            priceText.textContent = "$1200/m";
        }
    });
});

// faq
function toggleAccordion(button) {
    let content = button.nextElementSibling;
    let icon = button.querySelector('span');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
    } else {
        document.querySelectorAll('.overflow-hidden').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.rotate-180').forEach(el => el.classList.remove('rotate-180'));

        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
    }
}

// lottie
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-arrow'), 
    renderer: 'svg', 
    loop: true,
    autoplay: true, 
    path: 'assets/images/json/down arrow.json' 
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-man'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/man.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-coverage'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/coverage.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-flexible'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/flexible.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-ai'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/ai.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-rate'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/rate.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-subscribe'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/subscribe.json'
});


var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-commerce'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/commerce.json'
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-quality'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/json/quality.json'
});

// aos
AOS.init({
    duration: 2000, 
    once: true,   
    delay: 200,   
});

