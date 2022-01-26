//var nombre = prompt("Ingrese su nombre");

//Guardar información de forma local (en nuestra computadora, y "para siempre")
//localStorage.setItem("nombreUsuario", nombre);

//Obtener información guardada en mi computadora
//var info = localStorage.getItem("nombreUsuario");

//alert(info);


//Eliminar información guardada en mi computadora
//localStorage.removeItem("nombreUsuario");


/* --------------------- */

var parrafos;

//Obtener elemento HTML según su nombre de Etiqueta (obtiene MUCHOS)
parrafos = document.getElementsByTagName("p");

//Obtener elementos HTML según su atributo name (obtiene MUCHOS)
parrafos = document.getElementsByName("parra");

//Obtener un elemento HTML según su ID (obtiene UNO SOLO)
var algo = document.getElementById("Documento");



/* ------ */

//EJEMPLO COMPLETO

//Selecciono los elementos HTML y los guardo en variables para poder manipularlos luego
var input_nombre = document.getElementById("nombre");
var input_apellido = document.getElementById("apellido");
var select_opciones = document.getElementById("opciones");
var input_documento = document.getElementById("documento");
var input_email = document.getElementById("email");
var input_telefono = document.getElementById("telefono");


var btn_mostrar = document.getElementById("mostrar");
var btn_guardar = document.getElementById("guardar");
var btn_obtener = document.getElementById("obtener");

//Escucho el click del botón "Mostrar"
btn_mostrar.addEventListener('click', function(){
    mostrarAlert(); //ejecuto mi función
});

//Escucho el click del botón "Guardar"
btn_guardar.addEventListener('click', function(){
    guardarDatos(); //ejecuto mi función
});

//Escucho el clik del botón "Obtener"
btn_obtener.addEventListener('click', function(){
   obtenerDatos(); //ejecuto mi función 
});



//Funciones

function mostrarAlert(){
    //obtengo los valores ingresados (values), los concateno y los guardo en una variable
    var msj = input_nombre.value + " - " + input_apellido.value + " - " + select_opciones.value + input_documento.value + " - " + input_email.value + " - " + input_telefono.value + " - ";
    alert(msj);
}

function guardarDatos(){
    localStorage.setItem("dato_nombre", input_nombre.value); //Guardo el nombre ingresado en LocalStorage
    localStorage.setItem("dato_apellido", input_apellido.value); //Guardo el apellido ingresado en LocalStorage
    localStorage.setItem("dato_opciones", select_opciones.value); //Guardo la opción seleccionada en LocalStorage
    localStorage.setItem("dato_documento", input_documento.value); //Guardo el numero de identificacion ingresado en LocalStorage
    localStorage.setItem("dato_email", input_email.value); //Guardo el correo ingresado en LocalStorage
    localStorage.setItem("dato_telefono", input_telefono.value); //Guardo el telefono ingresado en LocalStorage
    //Borro el contenido de los inputs y select
    input_nombre.value = "";
    input_apellido.value = "";
    select_opciones.value = "";
    input_documento.value = "";
    input_email.value = "";
    input_telefono.value = "";


    document.getElementById("div_mensaje").style.display = "block"; //Muestro el div con el mensaje de éxito
}


function obtenerDatos(){
    var p_nombre = document.getElementById("p_nombre"); //obtento el elemento con ID = p_nombre
    var p_apellido = document.getElementById("p_apellido"); //obtento el elemento con ID = p_apellido
    var p_opcion = document.getElementById("p_opciones"); //obtento el elemento con ID = p_opcion
    var p_documento = document.getElementById("p_documento"); //obtento el elemento con ID = p_documento
    var p_email = document.getElementById("p_email")//obtento el elemento con ID = p_email
    var p_Telefono = document.getElementById("p_telefono"); //obtento el elemento con ID = p_telefono
    

    p_nombre.innerHTML = "<strong>Nombre:</strong> " + localStorage.getItem("dato_nombre"); //Inserto el contenido del localStorage en el parrafo HTML correspondiente
    p_apellido.innerHTML = "<strong>Apellido:</strong> " + localStorage.getItem("dato_apellido"); //Inserto el contenido del localStorage en el parrafo HTML correspondiente
    p_opcion.innerHTML = "<strong>Opciones:</strong> " + localStorage.getItem("dato_opciones"); //Inserto el contenido del localStorage en el parrafo HTML correspondiente
    p_documento.innerHTML = "<strong>Documento:</strong> " + localStorage.getItem("dato_documento");//Inserto el contenido del localStorage en el parrafo HTML correspondiente
    p_email.innerHTML = "<strong>email:</strong> " + localStorage.getItem("dato_email");//Inserto el contenido del localStorage en el parrafo HTML correspondiente
    p_telefono.innerHTML = "<strong>Telefono:</strong> " + localStorage.getItem("dato_telefono");//Inserto el contenido del localStorage en el parrafo HTML correspondiente


    document.getElementById("div_datos").style.display = "block"; //Mostrar el div con los datos
}