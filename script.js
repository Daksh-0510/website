const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

function page4Animation() {
    // var elemC = document.querySelector("#elem-container")
    // var fixed = document.querySelector("#fixed-image")
    // elemC.addEventListener("mouseenter", function () {
    //     fixed.style.display = "block"
    // })
    // elemC.addEventListener("mouseleave", function () {
    //     fixed.style.display = "none"
    // })

    // var elems = document.querySelectorAll(".elem")
    // elems.forEach(function (e) {
    //     e.addEventListener("mouseenter", function () {
    //         var image = e.getAttribute("data-image")
    //         fixed.style.backgroundImage = `url(${image})`
    //     })
    // })
}

// function swiperAnimation() {
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 100,
//     });
// }
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

const countdownDate = new Date('2024-10-07T00:00:00');

// Get the countdown elements
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = countdownDate.getTime() - now.getTime();

    if (timeLeft < 0) {
        // Countdown is over
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }
}



// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navBar = document.getElementById('nav-part');
const reg = document.getElementById('reg');
const boxM = document.getElementById('Maths');
const boxI = document.getElementById('it');
const boxS = document.getElementById('Science');

const navigation = document.getElementById('navigation');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {

        page1.style.background = '#1d1d1d';
        page1.style.color = 'white';
        page1.style.transition = '2s';

        page2.style.background = '#1d1d1d';
        page2.style.color = 'white';
        page2.style.transition = '2s';

        page3.style.background = '#1d1d1d';
        page3.style.color = 'white';
        page3.style.transition = '2s';

        page4.style.background = '#1d1d1d';
        page4.style.color = 'white';
        page4.style.transition = '2s';



        evntslider.style.background = '#1d1d1d';
        evntslider.style.color = 'white';
        evntslider.style.transition = '2s';

        navBar.className = "nav-part3";
        reg.className = "register2";

        navigation.src = "navigation_34dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg";

        boxM.className = "box2";
        boxI.className = "box2";
        boxS.className = "box2";



    } else {
        page1.style.background = '#EFEAE3';
        page1.style.color = 'black';
        page1.style.transition = '2s';

        page2.style.background = '#EFEAE3';
        page2.style.color = 'black';
        page2.style.transition = '2s';

        page3.style.background = '#EFEAE3';
        page3.style.color = 'black';
        page3.style.transition = '2s';

        page4.style.background = '#EFEAE3';
        page4.style.color = 'black';
        page4.style.transition = '2s';

        evntslider.style.background = '#EFEAE3';
        evntslider.style.color = 'black';
        evntslider.style.transition = '2s';



        navBar.className = "nav-part2";
        reg.className = "register";
        navigation.src = "navigation_34dp_000000_FILL0_wght400_GRAD0_opsz40.svg";

    }
});



// swiperAnimation()
// page4Animation()
menuAnimation()
loaderAnimation()