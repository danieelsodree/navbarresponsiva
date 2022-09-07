container.addEventListener("mouseout", function(){
    container = document.getElementById("container").style.transition = "0.5s";
})

class MobileNavBar{
    constructor(mobileMenu, navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
    }
}

function clicou(){
    this.mobileMenu.addEventListener("click", function(){
        console.log("olá");
    })
}