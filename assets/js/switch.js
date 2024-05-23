/* //////////////////////////////////
 -------Theme colors-------- 
 ///////////////////////////////// */
 const changeStyle = document.querySelectorAll(".change-style");

 function setActiveStyle(color){
    changeStyle.forEach((style) => {
         if(color === style.getAttribute("title")){
             style.removeAttribute("disabled");
         }
         else{
             style.setAttribute("disabled", "true");
         }
     })
 }

 /* //////////////////////////////////////
 -------Theme light and dark mode-------- 
 ///////////////////////////////////// */
const dayNight = document.querySelector(".dark-light");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

/* //////////////////////////////////
 -------Toggle style switcher-------- 
 ///////////////////////////////// */
const toggleSwitch = document.querySelector(".switch-toggle");
toggleSwitch.addEventListener('click', ()=>{
    document.querySelector(".switch").classList.toggle("open");
})

/* //////////////////////////////////////////
 -------hide style switcher on scroll-------- 
 //////////////////////////////////////// */
window.addEventListener("scroll", () => {
    if(document.querySelector(".switch").classList.contains("open")){
        document.querySelector(".switch").classList.remove("open");
    }
})