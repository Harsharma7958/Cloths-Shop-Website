document.addEventListener("DOMContentLoaded", () => {
    function coustomerReview() {
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
    }

    coustomerReview()

    var menu = document.querySelector('.menu')
    var cross = document.querySelector('.cross')
    var tl = gsap.timeline({reversed: true});

    document.querySelectorAll('.navigation').forEach((e) => {
        e.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
            tl.reverse();
        })
    })

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

    function pageAnimate() {
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
            }
        });

        gsap.from('#about', {
            y: "20%",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '#about',
                scroller: "body",
                // markers: true,
                start: "top 100%",
                end: "top 50%",
            }
        });

        gsap.from('#bestsellers h2', {
            y: "20%",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '#bestsellers h2',
                scroller: "body",
                // markers: true,
                start: "top 100%",
                end: "top 50%",
            }
        });

        gsap.from('#bestsellers .show .img', {
            y: "20%",
            duration: 1,
            opacity: 0,
            stagger: 0.2,
            // toggleActions: "play none none reverse",
            scrollTrigger: {
                trigger: '#bestsellers .show .img',
                scroller: "body",
                // markers: true,
                start: "top 100%",
                end: "top 50%",

            }
        });


    }

    pageAnimate()



});

document.querySelector('.submit').addEventListener('click', () => {
    sendMail()
})

function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        subject: document.getElementById('sub').value,
        message: document.getElementById('mess').value
    }

    if (parms.name.length > 3) {
        document.querySelector('.name-error').innerHTML = "";
        if (parms.email.endsWith('@gmail.com')) {
            document.querySelector('.email-error').innerHTML = "";
            if (parms.subject) {
                document.querySelector('.subject-error').innerHTML = "";
                if (parms.message) {
                    document.querySelector('.message-error').innerHTML = "";
                    emailjs.send("service_usq78ps", "template_xzu4l52", parms).then(
                        (response) => {
                            alert('SUCCESS!', response.status, response.text);
                        },
                        (error) => {
                            alert('FAILED...', error);
                        },
                    );
                } else {
                    document.querySelector('.message-error').innerHTML = "Fill your query";
                }
            } else {
                document.querySelector('.subject-error').innerHTML = "Fill the subject";
            }
        } else {
            document.querySelector('.email-error').innerHTML = "Fill valid mail id";
        }
    } else {
        document.querySelector('.name-error').innerHTML = "Lenght of the name must be greater than 3 characters";
    }

}
