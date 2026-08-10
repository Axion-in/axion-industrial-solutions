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

/*------------------------------------------
EMAILJS INITIALIZATION
------------------------------------------*/

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "MIK9Hv_NCKyaSw0Qf"
    });

}


/*------------------------------------------
POPUP OPEN
------------------------------------------*/

window.addEventListener("load", function () {

    const axPopup = document.getElementById("popup");

    if (axPopup) {

        setTimeout(function () {

            axPopup.style.display = "flex";

        }, 1000);

    }

});


/*------------------------------------------
POPUP CLOSE BUTTON
------------------------------------------*/

const axPopupClose = document.querySelector(".close-btn");

if (axPopupClose) {

    axPopupClose.addEventListener("click", function () {

        const axPopup = document.getElementById("popup");

        if (axPopup) {

            axPopup.style.display = "none";

        }

    });

}


/*------------------------------------------
CLOSE POPUP WHEN CLICKING OUTSIDE
------------------------------------------*/

const axPopupOverlay = document.getElementById("popup");

if (axPopupOverlay) {

    axPopupOverlay.addEventListener("click", function (e) {

        if (e.target === axPopupOverlay) {

            axPopupOverlay.style.display = "none";

        }

    });

}


/*------------------------------------------
POPUP ENQUIRY FORM
EMAILJS
------------------------------------------*/

const axPopupForm = document.getElementById("popupForm");

if (axPopupForm) {

    axPopupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const axPopupButton =
            axPopupForm.querySelector(
                'button[type="submit"]'
            );

        const axOriginalButtonText =
            axPopupButton
                ? axPopupButton.innerHTML
                : "Submit Enquiry";


        /*----------------------------------
        BUTTON LOADING
        ----------------------------------*/

        if (axPopupButton) {

            axPopupButton.disabled = true;

            axPopupButton.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending...';

        }


        /*----------------------------------
        GET POPUP FORM VALUES
        ----------------------------------*/

        const axPopupName =
            document.getElementById("popupName");

        const axPopupPhone =
            document.getElementById("popupPhone");

        const axPopupEmail =
            document.getElementById("popupEmail");

        const axPopupMessage =
            document.getElementById("popupMessage");


        /*----------------------------------
        EMAILJS DATA
        ----------------------------------*/

        const axPopupData = {

            from_name:
                axPopupName
                    ? axPopupName.value
                    : "",

            phone:
                axPopupPhone
                    ? axPopupPhone.value
                    : "",

            from_email:
                axPopupEmail
                    ? axPopupEmail.value
                    : "",

            requirement:
                axPopupMessage
                    ? axPopupMessage.value
                    : ""

        };


        /*----------------------------------
        SEND EMAIL
        ----------------------------------*/

        if (
            typeof emailjs === "undefined"
        ) {

            alert(
                "❌ Email service is not available. Please try again."
            );

            if (axPopupButton) {

                axPopupButton.disabled = false;

                axPopupButton.innerHTML =
                    axOriginalButtonText;

            }

            return;

        }


        emailjs.send(

            "service_i5cs5t8",

            "template_3kr2trf",

            axPopupData

        )

        .then(function () {


            /*------------------------------
            SUCCESS
            ------------------------------*/

            alert(
                "✅ Thank You!\n\n" +
                "Your enquiry has been submitted successfully.\n\n" +
                "Our team will contact you shortly."
            );


            /*------------------------------
            RESET FORM
            ------------------------------*/

            axPopupForm.reset();


            /*------------------------------
            CLOSE POPUP
            ------------------------------*/

            const axPopup =
                document.getElementById("popup");

            if (axPopup) {

                axPopup.style.display = "none";

            }


            /*------------------------------
            RESTORE BUTTON
            ------------------------------*/

            if (axPopupButton) {

                axPopupButton.disabled = false;

                axPopupButton.innerHTML =
                    axOriginalButtonText;

            }

        })

        .catch(function (error) {


            /*------------------------------
            ERROR
            ------------------------------*/

            console.error(
                "Popup EmailJS Error:",
                error
            );


            alert(
                "❌ Unable to send your enquiry.\n\n" +
                "Please try again."
            );


            /*------------------------------
            RESTORE BUTTON
            ------------------------------*/

            if (axPopupButton) {

                axPopupButton.disabled = false;

                axPopupButton.innerHTML =
                    axOriginalButtonText;

            }

        });

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
AXION CONTACT FORM EMAILJS
=========================================*/

(function () {
    emailjs.init({
        publicKey: "MIK9Hv_NCKyaSw0Qf"
    });
})();

const axContactForm = document.getElementById("axContactForm");

if (axContactForm) {

    axContactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = this.querySelector(".ax-contact-btn");

        const oldText = submitBtn.innerHTML;

        submitBtn.disabled = true;

        submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';

        const templateParams = {

            from_name: document.getElementById("axName").value,

            company_name: document.getElementById("axCompany").value,

            from_email: document.getElementById("axEmail").value,

            phone: document.getElementById("axPhone").value,

            requirement: document.getElementById("axMessage").value

        };

        emailjs.send(

            "service_i5cs5t8",

            "template_3kr2trf",

            templateParams

        )

        .then(function () {

            alert("✅ Thank You!\n\nYour enquiry has been sent successfully.\nOur team will contact you shortly.");

            axContactForm.reset();

            submitBtn.disabled = false;

            submitBtn.innerHTML = oldText;

        })

        .catch(function (error) {

            console.log(error);

            alert("❌ Failed to send enquiry.\nPlease try again.");

            submitBtn.disabled = false;

            submitBtn.innerHTML = oldText;

        });

    });

}
