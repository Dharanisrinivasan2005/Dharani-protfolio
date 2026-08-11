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

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("#navLinks a").forEach(link => {

        link.addEventListener("click", function () {
            closeMenu();
        });

    });

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

        image.src =
            card.dataset.image || "";

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

    const popup =
        document.getElementById("projectPopup");

    if (!popup) {
        return;
    }


    /*
       If an event exists, close only when
       clicking the dark background.
    */

    if (
        event &&
        event.target !== popup
    ) {
        return;
    }


    popup.style.display = "none";


    /* Clear project image */

    const image =
        document.getElementById("projectPopupImage");

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
   CLOSE POPUPS WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Project popup */

    const projectPopup =
        document.getElementById("projectPopup");

    if (projectPopup) {

        projectPopup.addEventListener(
            "click",
            function (event) {

                if (event.target === projectPopup) {
                    closeProject();
                }

            }
        );
    }


    /* Certificate popup */

    const certificatePopup =
        document.getElementById("certificatePopup");

    if (certificatePopup) {

        certificatePopup.addEventListener(
            "click",
            function (event) {

                if (event.target === certificatePopup) {
                    hideCertificate();
                }

            }
        );
    }

});


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

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.querySelector(".contact-form");

        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            async function (event) {

                /*
                   Prevent Formspree's normal redirect.
                */

                event.preventDefault();


                const submitButton =
                    form.querySelector(
                        "button[type='submit']"
                    );


                /* Disable button */

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
                    */

                    const response =
                        await fetch(
                            form.action,
                            {
                                method: "POST",

                                body:
                                    new FormData(form),

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    /*
                       Check Formspree response
                    */

                    if (response.ok) {

                        /*
                           Clear form automatically
                        */

                        form.reset();


                        /*
                           Show success toast
                        */

                        showToast(
                            "Message sent successfully!",
                            "success"
                        );

                    }

                    else {

                        showToast(
                            "Something went wrong. Please try again.",
                            "error"
                        );
                    }

                }

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

                finally {

                    /*
                       Restore Send Message button
                    */

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.innerHTML = `
                            <i class="fa-solid fa-paper-plane"></i>
                            Send Message
                        `;
                    }

                }

            }
        );

    }
);


/* =========================================================
   TOAST NOTIFICATION
========================================================= */

function showToast(
    message,
    type = "success"
) {

    /*
       Remove existing toast
    */

    const oldToast =
        document.getElementById(
            "portfolioToast"
        );

    if (oldToast) {
        oldToast.remove();
    }


    /*
       Create toast
    */

    const toast =
        document.createElement("div");

    toast.id = "portfolioToast";

    toast.textContent = message;


    /*
       Add success/error class
    */

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


    /*
       Add toast to page
    */

    document.body.appendChild(toast);


    /*
       Trigger animation
    */

    requestAnimationFrame(function () {

        toast.classList.add(
            "toast-show"
        );

    });


    /*
       Remove toast after 4 seconds
    */

    setTimeout(function () {

        toast.classList.remove(
            "toast-show"
        );


        setTimeout(function () {

            if (toast.parentNode) {
                toast.remove();
            }

        }, 400);

    }, 4000);

}


/* =========================================================
   TOAST STYLES
   Added automatically by JavaScript
========================================================= */

const toastStyles =
    document.createElement("style");

toastStyles.textContent = `

    #portfolioToast {

        position: fixed;

        right: 25px;

        bottom: 25px;

        z-index: 9999;

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

document.head.appendChild(toastStyles);