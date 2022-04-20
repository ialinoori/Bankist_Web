'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// });


const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookied for improved funtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
header.append(message);


document.querySelector(".btn--close-cookie").addEventListener("click", function () {
    message.remove();

});

message.style.background = '#37383d'
message.style.width = '103.3%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";









////////////////smooth scroll////////////////////////////
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1")

btnScrollTo.addEventListener("click", function () {

    section1.scrollIntoView({ behavior: 'smooth' })
})
////////////////////////////////////////////////////////


//////nav - scroll/////////////////////////////

document.querySelectorAll(".nav__link").forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    })
})
//////////////////////////////////////////////////////



//tab//////////////////////

const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    tabsContent.forEach(c => c.classList.remove("operations__content--active"))
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")
});



//////nav link/////////////////////////
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function (e) {


    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;


        })
        logo.style.opacity = 0.5;

    }
});

nav.addEventListener("mouseout", function (e) {

    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 1;


        })
        logo.style.opacity = 1;
    }

})
//////////////////////////////////////////////////////////////////////////////////



// sticky nav//////////////////////////


const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function () {
    if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
    else nav.classList.remove("sticky")
});
//////////////////////////////////////////////////;

//lazy loading//////////////////////

const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observor) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img')

    })
    observor.unobserve(entry.target);

}
const imgObservor = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0
});

imgTarget.forEach(img => imgObservor.observe(img))
/////////////////////////////////////////////////////////////////

//////////slider///////

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slider = document.querySelector(".slider");

let curSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = "scale(0.4) translateX(-1200px)";
// slider.style.overflow = "visible";


const goToSlide = function (slide) {

    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
}

goToSlide(0)

btnRight.addEventListener("click", function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;

    }


    goToSlide(curSlide)

})
btnLeft.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
})


document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        if (curSlide === 0) {
            curSlide = maxSlide - 1
        } else {
            curSlide--;
        }
        goToSlide(curSlide)

    }
    goToSlide(curSlide)

})

document.addEventListener('keydown', function (e) {
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;

    }


    goToSlide(curSlide)


})





















































