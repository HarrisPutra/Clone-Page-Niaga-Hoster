menuToggle = document.getElementById("menuToggle")
loginButton = document.getElementById("loginButton")
menu1 = document.getElementById("menu1")
containerFitur = document.getElementById("containerFitur")
promo1 = document.getElementById("promo1")

function burgerClick() {
    if(menuToggle) {
        loginButton.style.display = "block";
        menu1.style.display = "block"
        containerFitur.style.display = "none"
        promo1.style.display = "none"
    } else return
}