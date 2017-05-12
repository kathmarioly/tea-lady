function datos(nombre, apellido, correo, direccion, telefono)
this.nombre = nombre;
this.apellido = apellido;
this.correo = correo;
this.direccion = direccion;
this.telefono = telefono;

};

function imprimir() {
    var contenedor = document.getElementById("clientes");
    var contenido = "";

    //recorremos el arreglo listaStudent
    imprimir.forEach(function(datos) {
        contenido += "<div>" + datos.nombre + "<br>" +
            "Apellido:" + datos.apellido + "<br>" +
            "Correo Electrónico:" + datos.correo+ "<br>" +
            "Dirección" + datos.direccion + "<br>" + "Teléfono: " + datos.telefono + "</div><br>";
        console.log(contenido);
    });

    contenedor.innerHTML = contenido;
}