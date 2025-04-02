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