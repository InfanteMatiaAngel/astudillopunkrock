window.onload = function () {
    // Variables
    const IMAGENES = [
        '../img/fondo_bn.jpg',
        '../img/fondo.jpg',
        '../img/sello_negro.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 

//Menu desplegable de EDICIONES
let editionsItem = document.getElementById("editionsItem");

function desplegarMenu(){
    let menuDesplegable = document.getElementById("editionsList");
    menuDesplegable.classList.toggle("showMenu");
    let menuIcons = document.getElementsByClassName("expand")
    for(let icon of menuIcons){
        icon.classList.toggle("hidden")
    } 
    
}

editionsItem.addEventListener("click", desplegarMenu);

//Menu desplegable media-screen
let menuIcon = document.getElementsByClassName("spanIcon")

function showMenu(){
    let menuDesplegable = document.getElementById("menu")
    menuDesplegable.classList.toggle("showMenu")
    let menuIcons = document.getElementsByClassName("toggleMenu")
    for(let icon of menuIcons){
        icon.classList.toggle("spanIcon")
    }
    let menuIcon = document.getElementsByClassName("spanIcon")
    menuIcon[0].addEventListener("click",showMenu)
}
menuIcon[0].addEventListener("click",showMenu)
