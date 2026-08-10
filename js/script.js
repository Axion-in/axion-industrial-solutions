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
   AXION INDUSTRIAL SOLUTIONS
   POPUP SECTION
   EMAILJS + 3 MINUTE REPEAT
========================================== */


/* ==========================================
   EMAILJS INITIALIZATION
========================================== */

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "MIK9Hv_NCKyaSw0Qf"
    });

}


/* ==========================================
   POPUP SYSTEM
========================================== */

(function () {

    let axPopupTimer = null;

    const AX_POPUP_INTERVAL = 3 * 60 * 1000; // 3 minutes


    /* ======================================
       OPEN POPUP
    ====================================== */

    function axOpenPopup() {

        const axPopup =
            document.getElementById("popup");

        if (axPopup) {

            axPopup.style.display = "flex";

        }

    }


    /* ======================================
       START 3 MINUTE TIMER
    ====================================== */

    function axStartPopupTimer() {

        clearTimeout(axPopupTimer);

        axPopupTimer = setTimeout(function () {

            axOpenPopup();

        }, AX_POPUP_INTERVAL);

    }


    /* ======================================
       CLOSE POPUP
    ====================================== */

    function axClosePopup() {

        const axPopup =
            document.getElementById("popup");

        if (axPopup) {

            axPopup.style.display = "none";

        }

        /*
         * Popup closed.
         * Start 3 minute countdown.
         */

        axStartPopupTimer();

    }


    /* ======================================
       PAGE LOAD
       FIRST POPUP AFTER 1 SECOND
    ====================================== */

    window.addEventListener("load", function () {

        const axPopup =
            document.getElementById("popup");

        if (!axPopup) {
            return;
        }

        setTimeout(function () {

            axOpenPopup();

        }, 1000);

    });


    /* ======================================
       CLOSE BUTTON
    ====================================== */

    document.addEventListener("click", function (e) {

        const axCloseButton =
            e.target.closest("#popup .close-btn");

        if (axCloseButton) {

            e.preventDefault();

            axClosePopup();

        }

    });


    /* ======================================
       CLOSE BY CLICKING OUTSIDE POPUP BOX
    ====================================== */

    document.addEventListener("click", function (e) {

        const axPopup =
            document.getElementById("popup");

        if (!axPopup) {
            return;
        }

        /*
         * Only close when the actual
         * overlay is clicked.
         */

        if (e.target === axPopup) {

            axClosePopup();

        }

    });


    /* ======================================
       POPUP FORM
       EMAILJS SUBMISSION
    ====================================== */

    document.addEventListener("DOMContentLoaded", function () {

        const axPopupForm =
            document.getElementById("popupForm");

        if (!axPopupForm) {
            return;
        }


        axPopupForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();


                /* ==============================
                   SUBMIT BUTTON
                ============================== */

                const axSubmitButton =
                    axPopupForm.querySelector(
                        'button[type="submit"]'
                    );


                const axOriginalButtonText =
                    axSubmitButton
                        ? axSubmitButton.innerHTML
                        : "Submit Enquiry";


                /* ==============================
                   FORM FIELDS
                ============================== */

                const axName =
                    document.getElementById("popupName");

                const axCompany =
                    document.getElementById("popupCompany");

                const axPhone =
                    document.getElementById("popupPhone");

                const axEmail =
                    document.getElementById("popupEmail");

                const axRequirement =
                    document.getElementById("popupMessage");


                /* ==============================
                   FORM DATA
                ============================== */

                const axPopupData = {

                    from_name:
                        axName
                            ? axName.value.trim()
                            : "",

                    company_name:
                        axCompany
                            ? axCompany.value.trim()
                            : "",

                    phone:
                        axPhone
                            ? axPhone.value.trim()
                            : "",

                    from_email:
                        axEmail
                            ? axEmail.value.trim()
                            : "",

                    requirement:
                        axRequirement
                            ? axRequirement.value.trim()
                            : ""

                };


                /* ==============================
                   BUTTON LOADING
                ============================== */

                if (axSubmitButton) {

                    axSubmitButton.disabled = true;

                    axSubmitButton.innerHTML =
                        '<i class="fas fa-spinner fa-spin"></i> Sending...';

                }


                /* ==============================
                   CHECK EMAILJS
                ============================== */

                if (
                    typeof emailjs === "undefined"
                ) {

                    alert(
                        "❌ Email service is not available.\n\n" +
                        "Please try again."
                    );


                    if (axSubmitButton) {

                        axSubmitButton.disabled = false;

                        axSubmitButton.innerHTML =
                            axOriginalButtonText;

                    }

                    return;

                }


                /* ==============================
                   SEND POPUP ENQUIRY
                ============================== */

                emailjs.send(

                    "service_i5cs5t8",

                    "template_3kr2trf",

                    axPopupData

                )


                /* ==============================
                   SUCCESS
                ============================== */

                .then(function () {

                    alert(
                        "✅ Thank You!\n\n" +
                        "Your enquiry has been submitted successfully.\n\n" +
                        "Our team will contact you shortly."
                    );


                    /* ==========================
                       RESET FORM
                    ========================== */

                    axPopupForm.reset();


                    /* ==========================
                       CLOSE POPUP
                    ========================== */

                    axClosePopup();


                    /* ==========================
                       RESTORE BUTTON
                    ========================== */

                    if (axSubmitButton) {

                        axSubmitButton.disabled = false;

                        axSubmitButton.innerHTML =
                            axOriginalButtonText;

                    }

                })


                /* ==============================
                   ERROR
                ============================== */

                .catch(function (error) {

                    console.error(
                        "Popup EmailJS Error:",
                        error
                    );


                    alert(
                        "❌ Unable to send your enquiry.\n\n" +
                        "Please try again."
                    );


                    /* ==========================
                       RESTORE BUTTON
                    ========================== */

                    if (axSubmitButton) {

                        axSubmitButton.disabled = false;

                        axSubmitButton.innerHTML =
                            axOriginalButtonText;

                    }

                });

            }
        );

    });

})();

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

/* ==========================================
   AXION INDUSTRIAL SOLUTIONS
   CTA SECTION
   Get a Quote Button
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       CTA GET A QUOTE BUTTON
    ============================== */

    const ctaQuoteBtn = document.querySelector(
        ".cta-container .cta-btn.quote-btn"
    );

    if (ctaQuoteBtn) {

        ctaQuoteBtn.addEventListener("click", function (e) {

            const contactSection = document.getElementById("contact");

            if (contactSection) {

                e.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* ==============================
       CTA SCROLL ANIMATION
    ============================== */

    const ctaItems = document.querySelectorAll(
        ".cta-container .cta-left, " +
        ".cta-container .cta-right"
    );

    function revealCTA() {

        ctaItems.forEach(function (item) {

            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < window.innerHeight - 80) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealCTA);

    /* Run once when page loads */
    revealCTA();

});

/*=========================================
  AXION CONTACT SECTION
  EMAILJS - NO CONFLICT VERSION
=========================================*/


/*=========================================
  EMAILJS INITIALIZATION
=========================================*/

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "MIK9Hv_NCKyaSw0Qf"
    });

}


/*=========================================
  CONTACT FORM
=========================================*/

const axContactForm =
    document.getElementById("axContactForm");


if (axContactForm) {

    axContactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            /*=================================
              SUBMIT BUTTON
            =================================*/

            const axContactButton =
                axContactForm.querySelector(
                    'button[type="submit"]'
                );


            const axOriginalButtonText =
                axContactButton
                    ? axContactButton.innerHTML
                    : "SEND ENQUIRY";


            /*=================================
              FORM FIELDS
            =================================*/

            const axName =
                document.getElementById("axName");

            const axCompany =
                document.getElementById("axCompany");

            const axEmail =
                document.getElementById("axEmail");

            const axPhone =
                document.getElementById("axPhone");

            const axMessage =
                document.getElementById("axMessage");


            /*=================================
              FORM DATA
            =================================*/

            const axContactData = {

                from_name:
                    axName
                        ? axName.value.trim()
                        : "",

                company_name:
                    axCompany
                        ? axCompany.value.trim()
                        : "",

                from_email:
                    axEmail
                        ? axEmail.value.trim()
                        : "",

                phone:
                    axPhone
                        ? axPhone.value.trim()
                        : "",

                requirement:
                    axMessage
                        ? axMessage.value.trim()
                        : ""

            };


            /*=================================
              BUTTON - SENDING
            =================================*/

            if (axContactButton) {

                axContactButton.disabled = true;

                axContactButton.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Sending...';

            }


            /*=================================
              CHECK EMAILJS
            =================================*/

            if (
                typeof emailjs === "undefined"
            ) {

                alert(
                    "❌ Email service is not available.\n\nPlease try again."
                );


                if (axContactButton) {

                    axContactButton.disabled = false;

                    axContactButton.innerHTML =
                        axOriginalButtonText;

                }

                return;

            }


            /*=================================
              SEND CONTACT ENQUIRY
            =================================*/

            emailjs.send(

                "service_i5cs5t8",

                "template_3kr2trf",

                axContactData

            )


            /*=================================
              SUCCESS
            =================================*/

            .then(function () {

                alert(
                    "✅ Thank You!\n\n" +
                    "Your enquiry has been submitted successfully.\n\n" +
                    "Our team will contact you shortly."
                );


                /*-----------------------------
                  RESET FORM
                -----------------------------*/

                axContactForm.reset();


                /*-----------------------------
                  RESTORE BUTTON
                -----------------------------*/

                if (axContactButton) {

                    axContactButton.disabled = false;

                    axContactButton.innerHTML =
                        axOriginalButtonText;

                }

            })


            /*=================================
              ERROR
            =================================*/

            .catch(function (error) {

                console.error(
                    "Contact EmailJS Error:",
                    error
                );


                alert(
                    "❌ Unable to send your enquiry.\n\n" +
                    "Please try again."
                );


                if (axContactButton) {

                    axContactButton.disabled = false;

                    axContactButton.innerHTML =
                        axOriginalButtonText;

                }

            });

        }
    );

}

/* ==========================================
   AXION CTA - GET A QUOTE
   ISOLATED SCRIPT
========================================== */

(function () {

    document.addEventListener("DOMContentLoaded", function () {

        const quoteButton =
            document.getElementById("ctaGetQuote");

        if (!quoteButton) {
            return;
        }

        quoteButton.addEventListener("click", function (event) {

            const contactSection =
                document.getElementById("ax-contact");

            if (!contactSection) {
                return;
            }

            event.preventDefault();

            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

})();
