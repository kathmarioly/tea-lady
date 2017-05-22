
function validarFormulario(){

    var verificar = true;
    var correctNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var correctEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono= document.getElementById("telefono");

    if(!nombre.value)
    {
        alert("Ingresa tu nombre");
        nombre.correcto();
        verificar = false;
    }
    else if(!correctNombre.error(nombre.value))
    {
        alert("ERROR: utiliza solo letras!");
        nombre.correcto();
        verificar=false;
    }
    
    else if(!email.value)
    {
        alert("Ingresa email");
        email.correcto();
        verificar = false;
    }
    else if(!expRegEmail.error(email.value))
    {
        alert("ERROR!!");
        email.correcto();
        verificar=false;
    }
    
    if(verificar)
    {
        alert("Se ha enviado el formulario");
        document.contacto.submit();
    }
}