var bienvenidaElement = document.getElementById("bienvenida");

if (bienvenidaElement) {

  var nombre = new URLSearchParams(window.location.search).get("nombre");

  if (nombre !== null) {
    bienvenidaElement.innerHTML = "Bienvenido usuario " + nombre;
    console.log("Bienvenido usuario " + nombre);
  } else {
    bienvenidaElement.innerHTML = "No se proporcionó un nombre en la URL.";
  }
} else {
  console.log("El elemento con ID 'bienvenida' no se encontró en la página.");
}


    
// Botón de borrar información en el formulario
function borrarForm() {
    document.getElementById("ArticuloForm").reset();}
    
// Botón de envío de formulario a página de bienvenida
function CrearArticulo() {
    var var1 = document.getElementById("artic").value;
    var var2 = document.getElementById("nomb").value;
    var var3 = document.getElementById("resum").value;
    var var4 = document.getElementById("aut").value;

    var elarticulo = "Este artículo trata sobre".concat(" ",var1, ":","<br>", " " ,"<br>", var2 ,"<br>" ," ", "<br>",  "En resumen:","<br>",var3 ,"<br>", " ","<br>" , "El autor:",var4);
    console.log(elarticulo); 
    localStorage.setItem("articulo", elarticulo);
    window.location.href = "blog.html";}



  