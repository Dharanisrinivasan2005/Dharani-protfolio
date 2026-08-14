/* =========================================================
   DHARANI DATA ANALYST PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVBAR
========================================================= */

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}


function closeMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.remove("show");
    }
}


/* Close mobile menu after clicking a navigation link */

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", closeMenu);
});


/* =========================================================
   PROJECT POPUP
========================================================= */

function openProject(card) {

    const popup = document.getElementById("projectPopup");
    const title = document.getElementById("projectPopupTitle");
    const image = document.getElementById("projectPopupImage");
    const githubButton = document.getElementById("projectGithubBtn");

    if (!popup || !card) {
        return;
    }

    /* Project title */

    if (title) {
        title.textContent =
            card.dataset.title || "Project Dashboard";
    }


    /* Project image */

    if (image) {
        image.src = card.dataset.image || "";
        image.alt =
            card.dataset.title || "Project Dashboard";
    }


    /* GitHub link */

    if (githubButton) {
        githubButton.href =
            card.dataset.github || "#";
    }


    /* Show popup */

    popup.style.display = "flex";

    document.body.classList.add("popup-open");
}


/* Close project popup */

function closeProject(event) {

    const popup = document.getElementById("projectPopup");
    const image = document.getElementById("projectPopupImage");

    if (!popup) {
        return;
    }


    /*
       If the user clicks inside the popup box,
       don't close the popup.
    */

    if (event && event.target !== popup) {
        return;
    }


    popup.style.display = "none";


    /* Clear image */

    if (image) {
        image.src = "";
    }


    document.body.classList.remove("popup-open");
}


/* =========================================================
   CERTIFICATE POPUP
========================================================= */

function showCertificate(imagePath) {

    const popup =
        document.getElementById("certificatePopup");

    const image =
        document.getElementById("certificateImage");

    if (!popup || !image) {
        return;
    }


    /* Set certificate image */

    image.src = imagePath;


    /* Show popup */

    popup.style.display = "flex";

    document.body.classList.add("popup-open");
}


/* Close certificate popup */

function hideCertificate() {

    const popup =
        document.getElementById("certificatePopup");

    const image =
        document.getElementById("certificateImage");

    if (!popup) {
        return;
    }


    /* Hide popup */

    popup.style.display = "none";


    /* Clear image */

    if (image) {
        image.src = "";
    }


    document.body.classList.remove("popup-open");
}


/* =========================================================
   CLICK OUTSIDE POPUPS TO CLOSE
========================================================= */


/* Project popup */

const projectPopup =
    document.getElementById("projectPopup");

if (projectPopup) {

    projectPopup.addEventListener("click", function (event) {

        if (event.target === projectPopup) {
            closeProject();
        }

    });

}


/* Certificate popup */

const certificatePopup =
    document.getElementById("certificatePopup");

if (certificatePopup) {

    certificatePopup.addEventListener("click", function (event) {

        if (event.target === certificatePopup) {
            hideCertificate();
        }

    });

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }


    /* Close project popup */

    const projectPopup =
        document.getElementById("projectPopup");

    if (
        projectPopup &&
        projectPopup.style.display === "flex"
    ) {
        closeProject();
    }


    /* Close certificate popup */

    const certificatePopup =
        document.getElementById("certificatePopup");

    if (
        certificatePopup &&
        certificatePopup.style.display === "flex"
    ) {
        hideCertificate();
    }


    /* Close mobile menu */

    closeMenu();

});


/* =========================================================
   FORMSPREE CONTACT FORM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.querySelector(".contact-form");


    /* Stop if contact form doesn't exist */

    if (!form) {
        return;
    }


    form.addEventListener("submit", async function (event) {

        /*
           Prevent normal Formspree redirect.
        */

        event.preventDefault();


        /* Submit button */

        const submitButton =
            form.querySelector("button[type='submit']");


        /* Disable button while sending */

        if (submitButton) {

            submitButton.disabled = true;

            submitButton.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Sending...
            `;
        }


        try {

            /*
               Send form data to Formspree
               using AJAX/fetch.
            */

            const response = await fetch(
                form.action,
                {
                    method: "POST",

                    body: new FormData(form),

                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            /* =================================================
               SUCCESS
            ================================================= */

            if (response.ok) {

                /*
                   Clear the form automatically.
                */

                form.reset();


                /*
                   Show green success toast.
                */

                showToast(
                    "Message sent successfully!",
                    "success"
                );

            }


            /* =================================================
               ERROR
            ================================================= */

            else {

                showToast(
                    "Something went wrong. Please try again.",
                    "error"
                );

            }


        }

        /* =====================================================
           NETWORK ERROR
        ===================================================== */

        catch (error) {

            console.error(
                "Form submission error:",
                error
            );


            showToast(
                "Unable to send message. Please try again.",
                "error"
            );

        }


        /* =====================================================
           RESTORE BUTTON
        ===================================================== */

        finally {

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.innerHTML = `
                    <i class="fa-solid fa-paper-plane"></i>
                    Send Message
                `;

            }

        }

    });

});


/* =========================================================
   TOAST NOTIFICATION
========================================================= */

function showToast(
    message,
    type = "success"
) {

    /*
       Remove an existing toast
       before creating a new one.
    */

    const oldToast =
        document.getElementById("portfolioToast");

    if (oldToast) {
        oldToast.remove();
    }


    /* Create toast */

    const toast =
        document.createElement("div");


    toast.id = "portfolioToast";


    /* Message */

    toast.textContent = message;


    /* Toast type */

    if (type === "success") {

        toast.classList.add(
            "toast-success"
        );

    }

    else {

        toast.classList.add(
            "toast-error"
        );

    }


    /* Add toast to page */

    document.body.appendChild(toast);


    /*
       Trigger animation after the element
       has been added to the DOM.
    */

    requestAnimationFrame(() => {

        toast.classList.add("toast-show");

    });


    /*
       Automatically remove toast
       after 4 seconds.
    */

    setTimeout(() => {

        toast.classList.remove(
            "toast-show"
        );


        setTimeout(() => {

            if (toast.parentNode) {
                toast.remove();
            }

        }, 400);

    }, 4000);

}


/* =========================================================
   TOAST STYLES
   Added automatically through JavaScript
========================================================= */

const toastStyles =
    document.createElement("style");


toastStyles.textContent = `

    #portfolioToast {

        position: fixed;

        right: 25px;

        bottom: 25px;

        z-index: 99999;

        min-width: 280px;

        max-width: 380px;

        padding: 14px 20px;

        border-radius: 12px;

        font-family:
            Arial,
            Helvetica,
            sans-serif;

        font-size: 15px;

        font-weight: 700;

        text-align: center;

        box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.15);

        opacity: 0;

        transform:
            translateY(25px);

        transition:
            opacity 0.35s ease,
            transform 0.35s ease;

        pointer-events: none;
    }


    /* Toast visible */

    #portfolioToast.toast-show {

        opacity: 1;

        transform:
            translateY(0);
    }


    /* SUCCESS */

    #portfolioToast.toast-success {

        color: #155724;

        background: #d4edda;

        border:
            1px solid #b7dfc0;
    }


    /* ERROR */

    #portfolioToast.toast-error {

        color: #721c24;

        background: #f8d7da;

        border:
            1px solid #f1b8bd;
    }


    /* MOBILE */

    @media (max-width: 500px) {

        #portfolioToast {

            left: 18px;

            right: 18px;

            bottom: 18px;

            min-width: auto;

            max-width: none;

            text-align: center;
        }

    }

`;


/* Add toast styles to page */

document.head.appendChild(toastStyles);