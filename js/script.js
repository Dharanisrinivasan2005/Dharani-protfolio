/* =========================================================
   MOBILE NAVBAR
========================================================= */

function toggleMenu() {

  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.toggle("active");
  }

}


/* Close mobile menu */

function closeMenu() {

  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.remove("active");
  }

}


/* Close menu after clicking a navigation link */

document.querySelectorAll("#navLinks a").forEach(link => {

  link.addEventListener("click", () => {

    closeMenu();

  });

});



/* =========================================================
   CERTIFICATE POPUP
========================================================= */

function showCertificate(imagePath) {

  const popup = document.getElementById("certificatePopup");

  const image = document.getElementById("certificateImage");


  if (!popup || !image) {
    return;
  }


  image.src = imagePath;

  popup.style.display = "flex";

  document.body.style.overflow = "hidden";

}


/* Close certificate */

function hideCertificate() {

  const popup = document.getElementById("certificatePopup");

  const image = document.getElementById("certificateImage");


  if (!popup || !image) {
    return;
  }


  popup.style.display = "none";

  image.src = "";

  document.body.style.overflow = "";

}



/* =========================================================
   CLOSE CERTIFICATE WHEN CLICKING OUTSIDE
========================================================= */

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

  if (event.key === "Escape") {

    hideCertificate();

    closeMenu();

  }

});