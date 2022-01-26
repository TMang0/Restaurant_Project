window.addEventListener("load",function() {
    var modal;
    var modalBtn;
    var cerrar;
    modal = document.getElementById("myModal");
    cerrar = document.getElementById("close").addEventListener("click", function () { modal.style.display = "none" }, false);
    modalBtn = document.getElementById("modalBtn").addEventListener("click", function () { modal.style.display = "block" }, false);

} , false);

window.addEventListener("load",function() {
    var modal2;
    var modalBtn2;
    var cerrar2;
    modal2 = document.getElementById("myModal2");
    cerrar2 = document.getElementById("close2").addEventListener("click", function () { modal2.style.display = "none" }, false);
    cerrar2 = document.getElementById("guardar").addEventListener("click", function () { modal2.style.display = "none" }, false);
    modalBtn2 = document.getElementById("modalBtn2").addEventListener("click", function () { modal2.style.display = "block" }, false);

} , false);

/* Envio */

var nombre = document.getElementById("nombre");
var apellido= document.getElementById("apellido");
var celular= document.getElementById("celular");
var email= document.getElementById("email");
var direccion= document.getElementById("direccion");
var opcion= document.getElementById("opciones");
var indica= document.getElementById("indicaciones");
var guardar = document.getElementById("guardar");
var  obtener = document.getElementById("mostrar");





guardar.addEventListener('click', function(){
    guardarDatos(); 
});

obtener.addEventListener('click', function(){
   ver();
});



function  guardarDatos(){
    localStorage.setItem("dato_nombre",nombre.value);
    localStorage.setItem("apell",apellido.value);
    localStorage.setItem("cel",celular.value);
    localStorage.setItem("ema",email.value);
    localStorage.setItem("direc",direccion.value);
    localStorage.setItem("opci",opcion.value);
    localStorage.setItem("indi",indica.value);
    nombre.value = "";
    apellido.value="";
    celular.value="";
    email.value="";
    direccion.value="";
    opcion.value="";
    indica.value="";
}

function ver(){
    
var item1 =document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var item4=document.getElementById("item4");
var item5=document.getElementById("item5");
var item6=document.getElementById("item6");
var item7=document.getElementById("item7");
var posi=document.getElementById("msg_posit");
var date = new Date(new Date - 86400 * 1000);
var shipping_data=document.getElementById("shipping-data");



item1.innerHTML = "<strong>Nombre:</strong>"+"   " + localStorage.getItem("dato_nombre"); 
item2.innerHTML="<strong>Apellido:</strong>"+"   " +localStorage.getItem("apell");
item3.innerHTML="<strong>Celular:</strong>"+"   " +localStorage.getItem("cel");
item4.innerHTML="<strong>Email:</strong>"+"   " +localStorage.getItem("ema");
item5.innerHTML="<strong>Direccion:</strong>"+"   " +localStorage.getItem("direc");
item6.innerHTML="<strong>Metodo pago:</strong>"+"   " +localStorage.getItem("opci");
item7.innerHTML="<strong>Indicacion:</strong>"+"   " +localStorage.getItem("indi");
item8.innerHTML="<strong>Hora del pedido:</strong>"+"   " +(date);
shipping_data.style.setProperty("border", "1px solid gray"); 

posi.innerHTML="<p><i style='color:#0B300A'class='fas fa-exclamation-circle'></i> Envió generado exitosamente. Recuerda que nuestros tiempos de envió son mínimo de 30 min.</p";
posi.style.setProperty("background","#A9F098");

}
