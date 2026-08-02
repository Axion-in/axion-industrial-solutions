/* ==========================================
   AXION INDUSTRIAL SOLUTIONS
========================================== */

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   POPUP
========================================== */

window.onload=function(){

    const popup=document.getElementById("popup");

    if(popup){

        setTimeout(function(){

            popup.style.display="flex";

        },1000);

    }

}


const popupClose=document.querySelector(".close-btn");

if(popupClose){

    popupClose.onclick=function(){

        document.getElementById("popup").style.display="none";

    }

}


const popup=document.getElementById("popup");

if(popup){

    popup.onclick=function(e){

        if(e.target===popup){

            popup.style.display="none";

        }

    }

}


const popupForm=document.getElementById("popupForm");

if(popupForm){

popupForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Our team will contact you shortly.");

this.reset();

document.getElementById("popup").style.display="none";

});

}



/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle=document.getElementById("menu-toggle");

const mobileMenu=document.getElementById("mobile-menu");

const closeMenu=document.querySelector(".close-menu");

if(menuToggle){

menuToggle.onclick=function(){

mobileMenu.classList.add("active");

}

}

if(closeMenu){

closeMenu.onclick=function(){

mobileMenu.classList.remove("active");

}

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.onclick=function(){

mobileMenu.classList.remove("active");

}

});

/* =====================================================
   ABOUT SECTION ANIMATION
===================================================== */

const aboutItems = document.querySelectorAll(
".about-title, .about-text, .vm-card, .about-badges, .about-right"
);

function aboutReveal(){

    aboutItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",aboutReveal);

aboutReveal();

/* ==========================================
   PRODUCTS SCROLL ANIMATION
========================================== */

const productItems = document.querySelectorAll(
".products-header, .product-card"
);

function revealProducts(){

    productItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealProducts);

revealProducts();

/* =========================================
   INDUSTRIES WE SERVE
========================================= */

const industryItems = document.querySelectorAll(
".industries-title, .industry-item, .industry-image"
);

function revealIndustries(){

    industryItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-80){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealIndustries);

revealIndustries();

/*=========================================
      OUR TRUSTED BRANDS
=========================================*/

const brandCards = document.querySelectorAll(".brand-card");

brandCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition="0.35s";

    });

});

/* WHY CHOOSE US SCROLL ANIMATION */

const whyItems = document.querySelectorAll(
'.why-left,.why-right,.strength-item'
);

window.addEventListener("scroll",()=>{

whyItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-80){

item.classList.add("show");

}

});

});

/*=========================================
WAREHOUSE SCROLL ANIMATION
=========================================*/

const warehouseItems = document.querySelectorAll(
'.warehouse-heading,.warehouse-left,.warehouse-right,.warehouse-box'
);

window.addEventListener("scroll",()=>{

warehouseItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top < window.innerHeight-80){

item.classList.add("show");

}

});

});

/*=========================================
CTA SCROLL ANIMATION
=========================================*/

const ctaItems = document.querySelectorAll(
'.cta-left,.cta-right'
);

window.addEventListener("scroll",()=>{

    ctaItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            item.classList.add("show");

        }

    });

});

/*=========================================
EMAILJS INITIALIZE
=========================================*/

emailjs.init({
    publicKey: "MIK9Hv_NCKyaSw0Qf"
});

/*=========================================
CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");

const successPopup = document.getElementById("successPopup");

const popupClose = document.getElementById("popupClose");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const submitBtn=document.querySelector(".contact-btn");

submitBtn.disabled=true;

submitBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';

emailjs.send(

"service_i5cs5t8",

"template_3kr2trf",

{

from_name:document.getElementById("name").value,

company:document.getElementById("company").value,

from_email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

message:document.getElementById("message").value

}

)

.then(function(){

contactForm.reset();

submitBtn.disabled=false;

submitBtn.innerHTML='<i class="fas fa-paper-plane"></i> SEND ENQUIRY';

if(successPopup){

successPopup.classList.add("show");

}

})

.catch(function(error){

console.log(error);

alert("Unable to send enquiry. Please try again.");

submitBtn.disabled=false;

submitBtn.innerHTML='<i class="fas fa-paper-plane"></i> SEND ENQUIRY';

});

});

}

/*=========================================
SUCCESS POPUP CLOSE
=========================================*/

if(popupClose){

popupClose.addEventListener("click",function(){

successPopup.classList.remove("show");

});

}

window.addEventListener("click",function(e){

if(e.target===successPopup){

successPopup.classList.remove("show");

}

});
