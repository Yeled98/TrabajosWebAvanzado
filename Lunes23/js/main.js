//alert("Si funciona");
//document.write("Otra alternativa");
/*document es un objeto (es una instancia de una clase(molde para crear objeto))*/
/*Un objeto tiene atributos y métodos*/
/*Un atributo es una característica del objeto (variables a asignar)*/
/*Un método es la acción que puede realizar un objeto*/
/*console.log("Esta es la consola");
document.getElementById("texto").innerHTML="Segundo texto";*/

//Se puede comentar con doble slash
/*var x,y,z;
x=5; //entero
y=6.3; //flotante
z=x+y; //flotante
alert(z)*/

/*function tunombre(nombre,apellido){
  var nombrecompleto=nombre + " " + apellido;
  //document.write(nombrecompleto); Se escribe
  return nombrecompleto; //envía de regreso el valor de la función
}
var alumno =tunombre("Yeled", "Subim");
alert(alumno);*/



/*var objeto1 = {nombre:"Yeled","Gonález"};

alert(objeto1.nombre);*/


/*var persona = "Jorge";
var otraPersona = persona;
persona="Luis";
document.write(persona);
document.write(otraPersona);*/



/*var persona = {nombre:"Jorge"};
var otraPersona2=persona;
persona.nombre="Luis";
document.write(persona.nombre);
document.write(otraPersona2.nombre);*/


/*var fruta={
  nombre:"mango",
  color:"amarillo",
  dulce:8,

  queDulceSoy:function(){
    alert("Soy muuuuy dulce");
  }
}

fruta.queDulceSoy();*/

//Hacer referencia al id primero
/*alert("Retardo");
document.getElementById("primero").innerHTML+="Yeled Subim González" //El + es para concatenar*/

/*document.getElementById("botonConClick").onclick=function(){
  alert("No me toques XD")
}*/

/*document.getElementById("botonConClick").onclick=function(){
  document.getElementById("aparecertexto").iinnerHTML="<p class="texto">Holi<p>";
  //document.getElementById("aparecertexto").style.color="blue";
  //document.getElementById("aparecertexto").style.cssTex="color:blue";
}*/

/*var nombre="primero";
document.getElementById("priboton").onclick=function(){
  document.getElementById(nombre).innerHTML="Si funcionó";
}*/


document.getElementById("priboton").onclick=function(){
  var valor=document.getElementById("miinput").value;
  document.getElementById("vacio").innerHTML=valor;
}
