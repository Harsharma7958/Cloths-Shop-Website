document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards");
    let scrollSpeed = 1; // pixels per frame

    function autoScroll() {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // reset to start
        } else {
            container.scrollLeft += scrollSpeed;
        }

        requestAnimationFrame(autoScroll);
    }

    requestAnimationFrame(autoScroll);
});

var menu = document.querySelector('.menu')
var cross = document.querySelector('.cross')
var tl = gsap.timeline();

function mobileMenu() {
    tl.to('.mobile-menu', {
        left: 0,
        duration: 0.4,
        ease: 'power2.out'
    })

    tl.from('.mobile-menu a', {
        left: 100,
        duration: 0.3,
        stagger: 0.2,
        opacity: 0,
        ease: 'power1.out'
    })

    tl.from('.cross', {
        opacity: 0
    })



    tl.pause()

    menu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        tl.play()

    })

    cross.addEventListener('click', () => {
        tl.reverse()
        document.body.style.overflow = 'auto';
    })

}

mobileMenu()

function navbarAnimate() {
    var tl1 = gsap.timeline();

    tl1.from('.navbar', {
        opacity: 0,
        duration: 1,
        y: -50,
    });

    tl1.from('.mobile-cover .left h1', {
        opacity: 0,
        duration: 0.3,
        x: -50
    })

    tl1.from('.mobile-cover .show', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    })

    tl1.from('.cover', {
        opacity: 0,
        duration: 0.2,
    })

}

navbarAnimate()

gsap.from(".collections", {
    y: '20%',
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.collections',
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        // toggleActions: "play none none reverse"
    }
});

gsap.from('#about', {
    y:"20%",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about',
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
        // toggleActions: "play none none reverse"
    }
});

gsap.from('#bestsellers h2', {
    y:"20%",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#bestsellers h2',
        scroller: "body",
        markers: true,
        start: "top 100%",
        end: "top 50%",
        // toggleActions: "play none none reverse"
    }
});

gsap.from('#bestsellers .show .img', {
    y:"20%",
    duration: 1,
    opacity: 0,
    stagger:0.5,
    // toggleActions: "play none none reverse",
    scrollTrigger: {
        trigger: '#bestsellers .show .img',
        scroller: "body",
        markers: true,
        start: "top 100%",
        end: "top 50%",
        
    }
});

