let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });

        };


    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
tsParticles.load("tsparticles", {
  background: {
    color: "#1f242d" // sua cor de fundo escuro
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      }
    },
    color: {
      value: "#0ef" // azul neon
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 1 },
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.5,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
      bounce: false,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0ef",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});