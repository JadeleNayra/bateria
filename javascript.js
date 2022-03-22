// //declaracion de una funcion a la que quiero llamar cuando pulse o haga click sobre el h1, antes usaba onclick="manejarClick()"en html ahora consigo lo mismo
// //activando un eventListener en el h1
//
// function manejarClick(){
//   alert("Me has hecho click.");
// }
// //Ahora le añado al elemento h1 una "oreja"/eventListener que escucha haber si se produce un click sobre el h1
// document.querySelector("h1").addEventListener("click",manejarClick);
//
// document.querySelector("h1").addEventListener("mouseout",function noTeVayas(){
//                                                                             alert("Porfa, no te quites de encima mio.");
//                                                                           });


//quiero añadir ahora eventListerner a todos los botones para que me avise que le hacen click a cualquiera de ellos

//Selecciono y guardo todos los botones en un array
var arrayConLosBotones=document.querySelectorAll(".caja");
//averiguo la longitud del array, osea el numero de botones que habia
var numeroDeBotones=arrayConLosBotones.length;

//recorro uno por uno los Botones usando un bucle de tipo "for" y en cada repeticion añado un listener a el boton que corresponda
for(i=0;i<numeroDeBotones;i++){
  //aqui añado el Listener
  arrayConLosBotones[i].addEventListener("click",function tocarTOM1(){

    // var tom1=new Audio("sonidos/tom-1.mp3");
    // tom1.play();
// alert(this.innerHTML);//extraemos la letra del boton para saber que sonido reproduce
var letraBoton=this.innerHTML;
//ahora usa la letra en un switch para reflejar los 7 casos posibles
switch(letraBoton){
  case"w":var tom1=new Audio("sonidos/tom-1.mp3");
          tom1.play();
          break;
  case"a":var tom2=new Audio("sonidos/tom-2.mp3");
          tom2.play();
          break;
  case"s":var tom3=new Audio("sonidos/tom-3.mp3");
          tom3.play();
          break;
  case"d":var tom4=new Audio("sonidos/tom-4.mp3");
          tom4.play();
          break;
  case"j":var tom5=new Audio("sonidos/snare.mp3");
          tom5.play();
          break;
  case"k":var tom6=new Audio("sonidos/crash.mp3");
          tom6.play();
          break;
  case"l":var tom7=new Audio("sonidos/kick-bass.mp3");
          tom7.play();
          break;
}
  });
}
