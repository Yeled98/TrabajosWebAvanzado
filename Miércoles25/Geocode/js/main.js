$(document).ready(function(){
  var imagenes=['img/uno.jpg','img/dos.jpg','img/tres.jpg','img/cuatro.jpg','img/cinco.jpg'];
  $(".img").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');
  $("#boton").click(function(){
    var direccion=$("#input").val();

  //var direccion="Tepanco34Coyoacán";
  //document.write(direccion);
  var link ='https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyDC0FsZsyy9_uiZKDKLGAS0G9yCYgFN6hA';

  $.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
  });
  function recibirDatos(json){
    var informacion=json;
    var codigoPostal=informacion.results[0].address_components[6].long_name;
    $("#respuesta").append('<div class="offset-m3 col m6 card-panel cyan aceent"><h6>Tú código postal es:'+codigoPostal+' </h6></div>');
  }
});
});
