let editionsItem = document.getElementById("editionsItem");

function desplegarMenu(){
    let menuDesplegable = document.getElementById("editionsList");
    let menuIcons = document.getElementsByClassName("expand")
    for(let icon of menuIcons){
        icon.classList.toggle("hidden")
    } 
    menuDesplegable.classList.toggle("showMenu");
}


editionsItem.addEventListener("click", desplegarMenu);

