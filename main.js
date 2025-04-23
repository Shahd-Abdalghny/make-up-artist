const backgrounds = [
    'url("image/slider-1.jpg")',
    'url("image/slider-2.jpg")',
    'url("image/slider-3.jpg")',
    'url("image/slider-4.jpg")'
];

let index = 0;
const hero = document.getElementById('hero');

setInterval(() => {
    index = (index + 1) % backgrounds.length;
    hero.style.backgroundImage = backgrounds[index];
}, 8000); 



document.addEventListener("DOMContentLoaded", function () {
    const words = ["لامع", "متألق", "جذاب"];
    const typewriter = document.getElementById("typewriter");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        const currentText = currentWord.substring(0, charIndex);

        typewriter.textContent = currentText;

        if (!isDeleting) {
            if (charIndex < currentWord.length) {
                charIndex++;
                typingSpeed = 150;
            } else {
                // Wait before deleting
                isDeleting = true;
                typingSpeed = 1000;
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                typingSpeed = 100;
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 300;
            }
        }

        setTimeout(type, typingSpeed);
    }

    type(); // Start typing
});



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const userCards = document.querySelectorAll('.serves .swiper .card-item');

userCards.forEach((card) => {
    const image = card.querySelector('.user-image');
    const text = card.querySelector('.serves .swiper .text');

    image.addEventListener('mouseenter', () => {
        text.classList.add('show');
    });

    image.addEventListener('mouseleave', () => {
        text.classList.remove('show');
    });
});


// pop up
    const popup = document.getElementById("popup");
    const popupImgAfter = document.getElementById("popupImgAfter");
    const popupImgBefore = document.getElementById("popupImgBefore");
    const closeBtn = document.getElementById("closeBtn");
    const images = document.querySelectorAll(".popup-image");

  images.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImgAfter.src = img.src; 
            popupImgBefore.src = img.getAttribute("data-before"); 
        });
  });

  closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    popupImgAfter.src = "";
    popupImgBefore.src = "";
  });

const popuptest = document.getElementById("popuptest");

const testimg = document.getElementById("testimg");
const closeBtntest = document.getElementById("closeBtntest");
const buttoms = document.querySelectorAll(".testimonials .card-item .btn");

buttoms.forEach(b => {
    b.addEventListener("click", () => {
        popuptest.style.display = "flex";
        testimg.src = b.getAttribute("data-before");
    });
});

closeBtntest.addEventListener("click", () => {
    popuptest.style.display = "none";
    testimg.src = "";
});

  //show more

const showMoreBtn = document.getElementById("showMoreBtn");
const hiddenImages = document.querySelectorAll(".hidden-image");
let currentIndex = 0;
const imagesPerClick = 4;

showMoreBtn.addEventListener("click", () => {

    for (let i = currentIndex; i < currentIndex + imagesPerClick && i < hiddenImages.length; i++) {
        hiddenImages[i].style.display = "block";
    }
    currentIndex += imagesPerClick;

    if (currentIndex >= hiddenImages.length) {
        showMoreBtn.style.display = "none";
    }
});

//تواصل معانا 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("tel").value;
        const message = document.getElementById("det").value;

        const contactData = {
            name,
            email,
            phone,
            message
        };

        let allContacts = JSON.parse(localStorage.getItem("contactMessages")) || [];
        allContacts.push(contactData);
        localStorage.setItem("contactMessages", JSON.stringify(allContacts));
        const success = document.getElementById("sseccess");
        success.innerHTML = "✅ تم إرسال رسالتك بنجاح! شكرًا لتواصلك 💖";
        success.style.display = "block";
        setTimeout(() => {
            success.style.display = "none";
        }, 3000);

        form.reset();
    });
});






