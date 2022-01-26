var suma=0;
var pagar=document.getElementById("item9");
var btn1=document.getElementById("btn_compra");
var btn2=document.getElementById("btn_compra2");
var btn3=document.getElementById("btn_compra3");
var btn4=document.getElementById("btn_compra4");
var btn5=document.getElementById("btn_compra5");
var btn6=document.getElementById("btn_compra6");
var btn7=document.getElementById("btn_compra7");
var btn8=document.getElementById("btn_compra8");
var mostra=document.getElementById("mostrar");

mostra.addEventListener("click", function(){
    verPrecio();
});

btn1.addEventListener("click", function(){
    var precio =btn1.getAttribute("data-precio");
     mostrar(precio);
});
btn2.addEventListener("click", function(){
    var precio =btn2.getAttribute("data-precio");
     mostrar(precio);
});
btn3.addEventListener("click", function(){
    var precio =btn3.getAttribute("data-precio");
     mostrar(precio);
});
btn4.addEventListener("click", function(){
    var precio =btn4.getAttribute("data-precio");
     mostrar(precio);
});
btn5.addEventListener("click", function(){
    var precio =btn5.getAttribute("data-precio");
     mostrar(precio);
});
btn6.addEventListener("click", function(){
    var precio =btn6.getAttribute("data-precio");
     mostrar(precio);
});
btn7.addEventListener("click", function(){
    var precio =btn7.getAttribute("data-precio");
     mostrar(precio);
});
btn8.addEventListener("click", function(){
    var precio =btn8.getAttribute("data-precio");
     mostrar(precio);
});


function mostrar(p){
suma=parseInt(p)+suma;
localStorage.setItem("total",suma);
}

function  verPrecio(){
    pagar.innerHTML="<strong>Total pagar</strong>" +"<i style='margin:0px 5px 0px 5px ;color:#4A6B52' class='fas fa-dollar-sign'></i>"+localStorage.getItem("total"); 
}



