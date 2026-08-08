/* THEME TOGGLE */
document.getElementById("themeToggle").onclick = ()=>{
  document.body.classList.toggle("dark");
};


/* VIDEO POPUP */
function openVideo(src){
  const v = document.getElementById("popupVideo");
  v.src = src;
  document.getElementById("videoPopup").style.display="block";
}
function closeVideo(){
  const v = document.getElementById("popupVideo");
  v.pause();
  document.getElementById("videoPopup").style.display="none";
}

/* CERT POPUP */
function openCert(src){
  document.getElementById("certImage").src = src;
  document.getElementById("certPopup").style.display="block";
}
function closeCert(){
  document.getElementById("certPopup").style.display="none";
}
/* ROLE ANIMATION */
/* ===== ROLE TYPING ANIMATION ===== */

const roles = [
  "Web Developer",
  "UI / UX Designer",
  "Power BI Analyst",
  "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
const roleEl = document.getElementById("role");

function typeRole(){
  if(charIndex < roles[roleIndex].length){
    roleEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 90);
  }else{
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole(){
  if(charIndex > 0){
    roleEl.textContent =
      roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  }else{
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

typeRole();
/* VIDEO POPUP */
function closeVideo(){
  document.getElementById("videoPopup").style.display="none";
  document.getElementById("popupVideo").pause();
}
function openCert(src){
  document.getElementById("certPopup").style.display="flex";
  document.getElementById("certImg").src = src;
}

function closeCert(){
  document.getElementById("certPopup").style.display="none";
}
/* NAVBAR MOBILE TOGGLE */
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}
themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  themeToggle.innerHTML = 
    document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");

  themeToggle.innerHTML =
    document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

function closeMenu(){
  document.getElementById("navLinks").classList.remove("show");
}

