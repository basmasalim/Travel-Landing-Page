// owl carousel init for price section
$(document).ready(function () {
  $(".carousel1").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1220: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });

  // owl carousel init for testimonials section
  $("#carousel2").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    dots: true,
  });

  $("#carousel3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1220: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});

// Counter
let nums = document.querySelectorAll(".nums .num");
let section = document.getElementById("counter");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.getBoundingClientRect().top) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    if (parseInt(el.textContent) < goal) {
      el.textContent++;
    } else {
      clearInterval(count);
    }
  }, 2000 / goal);
}


// change color Navbar
let navRef = document.querySelector('nav');

document.addEventListener('scroll', () => {
  if (window.scrollY > 680) {
    navRef.classList.add('scrolled');
  } else {
    navRef.classList.remove('scrolled');
  }
}, { passive: true })


//spinner-wrapper
const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
  spinnerWrapperEL.style.opacity = '0';
});

setTimeout(() => {
  spinnerWrapperEL.style.display = 'none';
}, 2500);


  // type js
$(document).ready(function () {
  var typed = new Typed("#typed", {
    strings: ["Freely", "Together", "Differently"],
    backSpeed: 250,
    typeSpeed: 250,
    loop: true,
    cursorChar: "|",
  });
});

