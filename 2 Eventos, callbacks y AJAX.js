/*--------------------------------------------------------------------------
Eventos y Callbacks
===================
Las funciones son objetos!
Callbacks son funciones que pasamos como parametros a otra función y en cualquier momento se va
a ejecutar.

function myFunc(fn) { ... }

myFunc( function (){
  alert('Ahora me ejecutarón!');
})

ejemplo:

function suma (num1, num2) {
  return num1 + num2;
}
function resta (num1, num2) {
  return num1 - num2;
}
function division (num1, num2) {
  return num1 / num2;
}
function multiplicacion (num1, num2) {
  return num1 * num2;
}
function calculadora (cuenta, num1, num2) {
  return cuenta(num1, num2); // una funcion callback seria entonces "cuenta"
}
//Donde cuenta es claramente una funcion que se ejecuta dentro
//Podemos entonces hacer:

calculadora(suma, 1, 3); // 4
calculadora(resta, 1, 3); // -2
calculadora(division, 11, 2);// 5
calculadora(multiplicacion, 5, 5)// 25

Eventos
========
Con Vanilla javascript =>
  var button = document.getElementById('myButton');
  button.addEventListener('click', function(event) {
    alert('Me hicieron click!');
  })
Con jQuery =>
  $('button').click(function (){
    alert('me hicieron click!');
  })

Multiples eventos
=================

$('p').on({
  'click': function() { console.log("Me hicieron click!" );}
  'mouseover': function() { console.log("Me pasaron el mouse por arriba"); }
});

Métodos de Eventos
====================
Browser Events
>> .resize()    >> .scroll()
Document loading
>> .ready()
Event Handler Attachment
>> .off()     >> .on()      >> .one()...

Namespace
==========
Separar ha
