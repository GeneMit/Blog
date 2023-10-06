function limpiar()
{ document.getElementById("logear").reset(); }
function Iniciar() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;
    let tieneUpperCase = /[A-Z]/.test(pass);
    let tieneNumber = /[0-9]/.test(pass);

    if (tieneUpperCase || tieneNumber) {
        alert("Iniciado con éxito");
        document.getElementById("logear").submit();
    } else {
        alert("La contraseña debe contener al menos una letra mayúscula o un número. Acceso denegado.");
        let errorElement = document.getElementById("error");
        if (errorElement) {
            errorElement.textContent = "La contraseña debe contener al menos una letra mayúscula o un número.";
        }
        document.getElementById("contraseña").value = "";
    }
    console.log("Este es el usuario " + user + " y esta es la contraseña " + pass);}




