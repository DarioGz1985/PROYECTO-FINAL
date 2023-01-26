let menuVisible = false;
//Función ocultar-mostrar menu en App
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Oculta el menu al seleccionar
    document.getElementById("nav").classList = "";
    menuVisible = false;
}