 /* /////////////////////////////
 -------Mobile navigation-------- 
 ///////////////////////////// */
const navTogglerBtn = document.querySelector(".mobile-button");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    let element = document.querySelector("aside");
    element.classList.toggle("open");

    var iElem = document.getElementById("mobile-button");
    var className = document.querySelector("aside i").getAttribute("class");
    
    iElem.removeAttribute("class");
    iElem.classList.add("fa-solid", "fa-xmark");

    if(className=="fa-solid fa-xmark") {    
        iElem.removeAttribute("class");                       
        iElem.classList.add("fa-solid", "fa-bars");
    }
}





 /* /////////////////
 -------Aside-------- 
 //////////////// */
const nav = document.querySelector("nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;

for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                var sections = document.querySelectorAll("section"); 
        sections.forEach(function(section) { 
            section.classList.add("hide"); 
        }); 

                currentSectionName = this.href.split('#').pop(); 
                document.getElementById(currentSectionName).classList.remove('hide');
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }


    })
}