const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

// open mobile menu
menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("open");
});

// close mobile menu
closeBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("open");
});


//active nav link in mobile menu
const menuLinks = document.querySelectorAll(".mobile-menu li");

menuLinks.forEach((item) => {
    item.addEventListener("click", () => {
        const active = document.querySelector(".mobile-menu li.active");
        if (active) {
            active.classList.remove("active");
        }
        item.classList.add("active");
    });
});



//open and close faq 
document.querySelectorAll('.faq-container').forEach(card => {
    card.addEventListener('click', () => {
        const isOpen = card.classList.contains('is-open');

        if (!isOpen) {
            card.classList.add('is-open');
            card.querySelector('.faq-icon').textContent = '-';
        }
        else {
            card.classList.remove('is-open');
            card.querySelector('.faq-icon').textContent = '+';
        }


    });
});

