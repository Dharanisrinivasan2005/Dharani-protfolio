/* =========================================================
   DHARANI DATA ANALYST PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   YOUR GMAIL ADDRESS
========================================================= */

const YOUR_EMAIL = "dharanisrinivasan1234@gmail.com";


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

    const popup =
        document.getElementById("projectPopup");

    const title =
        document.getElementById("projectPopupTitle");

    const image =
        document.getElementById("projectPopupImage");

    const githubButton =
        document.getElementById("projectGithubBtn");


    if (!popup || !card) {
        return;
    }


    /* Project title */

    if (title) {

        title.textContent =
            card.dataset.title ||
            "Project Dashboard";

    }


    /* Project image */

    if (image) {

        image.src =
            card.dataset.image || "";

        image.alt =
            card.dataset.title ||
            "Project Dashboard";

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


/* =========================================================
   CLOSE PROJECT POPUP
========================================================= */

function closeProject(event) {

    const popup =
        document.getElementById("projectPopup");

    const image =
        document.getElementById("projectPopupImage");


    if (!popup) {
        return;
    }


    /*
       Close only when clicking
       outside the popup box.
    */

    if (
        event &&
        event.target !== popup
    ) {
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


/* =========================================================
   CLOSE CERTIFICATE POPUP
========================================================= */

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
   CLICK OUTSIDE PROJECT POPUP
========================================================= */

const projectPopup =
    document.getElementById("projectPopup");


if (projectPopup) {

    projectPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === projectPopup
            ) {

                closeProject();

            }

        }
    );

}


/* =========================================================
   CLICK OUTSIDE CERTIFICATE POPUP
========================================================= */

const certificatePopup =
    document.getElementById("certificatePopup");


if (certificatePopup) {

    certificatePopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === certificatePopup
            ) {

                hideCertificate();

            }

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

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

    }
);


/* =========================================================
   GMAIL CONTACT FORM
=========================================================

   IMPORTANT:

   NAME:
   Used ONLY for the subject.

   EMAIL:
   Used ONLY for validation.

   MESSAGE:
   ONLY this value is placed inside Gmail.

   Gmail body contains ONLY:

   Whatever the user typed in the
   Message field.

   NOTHING ELSE.
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById("contactForm");


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                /* Stop normal form submission */

                event.preventDefault();


                /* =================================================
                   GET FORM ELEMENTS
                ================================================= */

                const nameInput =
                    document.getElementById("contactName");


                const emailInput =
                    document.getElementById("contactEmail");


                const messageInput =
                    document.getElementById("contactMessage");


                const submitButton =
                    document.getElementById("sendMessageBtn");


                /* =================================================
                   GET VALUES
                ================================================= */

                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";


                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                /* =================================================
                   VALIDATION
                ================================================= */

                if (!name) {

                    showToast(
                        "Please enter your name.",
                        "error"
                    );

                    return;

                }


                if (!email) {

                    showToast(
                        "Please enter your email.",
                        "error"
                    );

                    return;

                }


                if (!message) {

                    showToast(
                        "Please enter your message.",
                        "error"
                    );

                    return;

                }


                /* =================================================
                   SUBJECT
                   
                   Name is ONLY used here.
                ================================================= */

                const subject =
                    `Portfolio Contact - ${name}`;


                /* =================================================
                   BODY
                   
                   VERY IMPORTANT:
                   
                   ONLY MESSAGE.
                   
                   No name.
                   No email.
                   No greeting.
                   No footer.
                ================================================= */

                const body =
                    message;


                /* =================================================
                   GMAIL COMPOSE URL
                ================================================= */

                const gmailURL =
                    "https://mail.google.com/mail/?view=cm&fs=1" +
                    "&to=" +
                    encodeURIComponent(YOUR_EMAIL) +
                    "&su=" +
                    encodeURIComponent(subject) +
                    "&body=" +
                    encodeURIComponent(body);


                /* =================================================
                   CHANGE BUTTON
                ================================================= */

                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.innerHTML =
                        '<i class="fa-solid fa-envelope"></i> ' +
                        'Opening Gmail...';

                }


                /* =================================================
                   OPEN GMAIL
                ================================================= */

                const gmailWindow =
                    window.open(
                        gmailURL,
                        "_blank"
                    );


                /* =================================================
                   SUCCESS
                ================================================= */

                if (gmailWindow) {

                    showToast(
                        "Gmail opened. Click Send to send your message.",
                        "success"
                    );


                    /* Clear form */

                    form.reset();

                }


                /* =================================================
                   POPUP BLOCKED
                ================================================= */

                else {

                    showToast(
                        "Please allow popups to open Gmail.",
                        "error"
                    );

                }


                /* =================================================
                   RESTORE BUTTON
                ================================================= */

                setTimeout(
                    function () {

                        if (submitButton) {

                            submitButton.disabled =
                                false;

                            submitButton.innerHTML =
                                '<i class="fa-solid fa-paper-plane"></i> ' +
                                'Send Message';

                        }

                    },
                    1000
                );

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

    /* Remove old toast */

    const oldToast =
        document.getElementById(
            "portfolioToast"
        );


    if (oldToast) {
        oldToast.remove();
    }


    /* Create toast */

    const toast =
        document.createElement("div");


    toast.id =
        "portfolioToast";


    /* Message */

    toast.textContent =
        message;


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


    /* Add to page */

    document.body.appendChild(toast);


    /* Start animation */

    requestAnimationFrame(
        function () {

            toast.classList.add(
                "toast-show"
            );

        }
    );


    /* Remove after 4 seconds */

    setTimeout(
        function () {

            toast.classList.remove(
                "toast-show"
            );


            setTimeout(
                function () {

                    if (toast.parentNode) {

                        toast.remove();

                    }

                },
                400
            );

        },
        4000
    );

}


/* =========================================================
   TOAST STYLES
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


    #portfolioToast.toast-show {

        opacity: 1;

        transform:
            translateY(0);

    }


    #portfolioToast.toast-success {

        color: #155724;

        background: #d4edda;

        border:
            1px solid #b7dfc0;

    }


    #portfolioToast.toast-error {

        color: #721c24;

        background: #f8d7da;

        border:
            1px solid #f1b8bd;

    }


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


/* Add toast styles */

document.head.appendChild(
    toastStyles
);