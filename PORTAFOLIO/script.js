/*==================================================
            PORTAFOLIO NATALIA
            SCRIPT.JS
            PARTE 1
==================================================*/


/*==========================================
        SELECCIÓN DE ELEMENTOS
==========================================*/

const navbar = document.querySelector(".navbar");

const scrollTopBtn = document.getElementById("scrollTop");

const menu = document.querySelector(".menu");

const menuButton = document.querySelector(".menu-mobile");

const menuLinks = document.querySelectorAll(".menu a");


/*==========================================
        NAVBAR SCROLL
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});


/*==========================================
        BOTÓN VOLVER ARRIBA
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.opacity = "1";

        scrollTopBtn.style.pointerEvents = "auto";

        scrollTopBtn.style.transform = "translateY(0px)";

    } else {

        scrollTopBtn.style.opacity = "0";

        scrollTopBtn.style.pointerEvents = "none";

        scrollTopBtn.style.transform = "translateY(20px)";

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================
        MENÚ MÓVIL
==========================================*/

menuButton.addEventListener("click", () => {

    menu.classList.toggle("show-menu");

});


/*==========================================
        CERRAR MENÚ
==========================================*/

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show-menu");

    });

});


/*==========================================
        SCROLL SUAVE
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================================
        ANIMACIÓN DE ENTRADA
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==========================================
        EFECTO LOGO
==========================================*/

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {

    logo.style.transform = "scale(1.05)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "scale(1)";

});


/*==========================================
        EFECTO BOTONES
==========================================*/

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


console.log("🚀 Portafolio Natalia cargado correctamente.");

/*==================================================
            SCRIPT.JS
            PARTE 2
==================================================*/


/*==========================================
        REVEAL AL HACER SCROLL
==========================================*/

const revealElements = document.querySelectorAll(

".title, .about-container, .service-card, .skill-box, .software-card, .project-card, .process-card, .timeline-item, .goal-content, .contact-card, .social-card"

);

const reveal = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);



/*==========================================
        ANIMAR BARRAS
==========================================*/

const progressBars = document.querySelectorAll(".progress span");

let progressAnimated = false;

function animateProgress(){

    const section = document.querySelector(".skills");

    if(!section) return;

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 120 && !progressAnimated){

        progressBars.forEach(bar=>{

            const width = bar.style.width;

            bar.style.width="0";

            setTimeout(()=>{

                bar.style.width=width;

            },200);

        });

        progressAnimated=true;

    }

}

window.addEventListener("scroll",animateProgress);

window.addEventListener("load",animateProgress);



/*==========================================
        EFECTO TARJETAS
==========================================*/

const cards = document.querySelectorAll(

".service-card,.skill-box,.software-card,.project-card,.process-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});



/*==========================================
        EFECTO 3D
==========================================*/

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=(y-rect.height/2)/18;

        const rotateY=(rect.width/2-x)/18;

        card.style.transform=`

            perspective(900px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-10px)

        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

    });

});



/*==========================================
        CONTADOR
==========================================*/

const counters=document.querySelectorAll(".data-card h3");

let counterStarted=false;

function startCounter(){

    const about=document.querySelector(".about");

    if(!about) return;

    if(about.getBoundingClientRect().top<window.innerHeight-150 && !counterStarted){

        counters.forEach(counter=>{

            const target=parseInt(counter.textContent);

            if(isNaN(target)) return;

            let value=0;

            const timer=setInterval(()=>{

                value++;

                counter.textContent=value;

                if(value>=target){

                    clearInterval(timer);

                }

            },30);

        });

        counterStarted=true;

    }

}

window.addEventListener("scroll",startCounter);

window.addEventListener("load",startCounter);



/*==========================================
        HERO PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=window.scrollY*0.35+"px";

    }

});



console.log("✨ Animaciones cargadas");

/*==================================================
            SCRIPT.JS
            PARTE 3
==================================================*/


/*==========================================
        CURSOR PERSONALIZADO
==========================================*/

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX+"px";
    blur.style.top=e.clientY+"px";

});



/*==========================================
        HOVER CURSOR
==========================================*/

const hoverItems=document.querySelectorAll(

"a,button,.service-card,.project-card,.software-card,.skill-box"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1.8)";

        cursor.style.background="#b56cff";

        blur.style.transform="translate(-50%,-50%) scale(1.6)";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";

        cursor.style.background="#7b2ff7";

        blur.style.transform="translate(-50%,-50%) scale(1)";

    });

});



/*==========================================
        BOTONES MAGNÉTICOS
==========================================*/

const magneticButtons=document.querySelectorAll(

".btn-primary,.btn-secondary"

);

magneticButtons.forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        btn.style.transform=`translate(${x*0.18}px,${y*0.18}px)`;

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translate(0,0)";

    });

});



/*==========================================
        HERO FLOTANTE
==========================================*/

const heroCard=document.querySelector(".hero-card");

window.addEventListener("mousemove",(e)=>{

    if(!heroCard) return;

    const x=(window.innerWidth/2-e.clientX)/45;

    const y=(window.innerHeight/2-e.clientY)/45;

    heroCard.style.transform=`

        rotateY(${-x}deg)

        rotateX(${y}deg)

    `;

});



/*==========================================
        BRILLO NAVBAR
==========================================*/

setInterval(()=>{

    navbar.style.boxShadow=

    `0 15px 50px rgba(${Math.floor(Math.random()*50+120)},43,226,.35)`;

},1800);



/*==========================================
        PARTÍCULAS
==========================================*/

const particles=document.querySelector(".particles");

for(let i=0;i<40;i++){

    const dot=document.createElement("span");

    dot.style.position="absolute";

    dot.style.width=Math.random()*4+2+"px";

    dot.style.height=dot.style.width;

    dot.style.background="rgba(255,255,255,.25)";

    dot.style.borderRadius="50%";

    dot.style.left=Math.random()*100+"%";

    dot.style.top=Math.random()*100+"%";

    dot.style.animation=`

        floating

        ${Math.random()*8+5}s

        linear

        infinite

    `;

    particles.appendChild(dot);

}



/*==========================================
        TEXTO HERO
==========================================*/

const heroTitle=document.querySelector(".hero-left h1");

heroTitle.animate(

[
{
opacity:0,
transform:"translateY(40px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:1400,
fill:"forwards"
}

);



/*==========================================
        PRELOAD
==========================================*/

window.onload=()=>{

    document.body.style.opacity="1";

};



console.log("💜 Portafolio Premium iniciado.");
