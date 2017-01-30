//Prueba de que jQuery si está funcionando
/*if (jQuery) {
  alert("Si tenemos jQuery")
}*/

/*$(".circulo").click(function(){
  alert("Soy redondo XD");
});

$("#cuadrado").click(function(){
  alert("Tengo 4 lados");
});*/

/*$("div").click(function(){
  alert("Soy un div");
});

$("p").click(function(){
  alert("Soy una p");
});

$("*").click(function(){
  alert("Estoy en todos lados XD");
});*/

/*$(".circulo").click(function(){
  $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
  $(".circulo").click(function(){
    $("iframe").attr("src","http://www.eluniversal.com.mx/");
  });
});*/

/*$("button").click(function(){
  $(".circulo").css({"width","400px");
});*/

/*$("button").click(function(){
  $(".circulo").addClass("circulo2");
});*/

/*$("button").click(function(){
  $(".circulo").hide();
});*/

/*$("button").click(function(){
  $(".circulo").fadeOut(4000);
});*/

$(".circulo").click(function(){
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000)
});
//dblclick (doble click)
//hover (pasar por encima)
