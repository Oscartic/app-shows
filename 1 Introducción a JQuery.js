// con window.onload se ejecuta cuando se termina de cargar todo el DOM
// la desventaja es que demorará en cargar.
// window.onload = function () {
//   alert('loaded')
// }
/*--------------------------------------------------------------------------
Asignar funciones a variables
=============================
A una veriable se le puede asignar una función
var alerta = function(mensaje) {
  alert(mensaje)
}
alerta('Hola Mundo')*/

// jquery proporciona una función parecida ($) pero se ejecuta dentro del DOM
// y carga más rápido!
// jQuery o $, es una funcion que puede recibir un montón de parametros, uno de
// ellos puede ser un elemento del DOM ejemplo:
// $(document).ready(function () { // Tambien se puede ejecutar asi: $().ready.. o simplemente con $
//   alert('ready')
// })

/*--------------------------------------------------------------------------
Conflicto con signo $
=====================
En algunos proyectos se maneja prototipe y jQuery simultaneamente y en ambos se
usa el signo pesos. Para evitar que se pisen entre ellos se puede definir asi:

$.noConflict();
jQuery(document).ready(function($) {
  $ // jQuery
})
$ // prototipe

*/
/*--------------------------------------------------------------------------
Selectores
==========
*/
// $(function () {
//   var header = $('#app-header h1')
//   console.log(header)
// })
// $(function () {
//   var header = $('header');
//   var title = $('h1', header[0]);
//   console.log(title);
// })
// En jQuery se suele anteponer el signo pesos a todos los elementos que son jQuery Objects!
// $(':input') => devuelve inputs, textarea, select...
/*--------------------------------------------------------------------------
Refinar busquedas de selectores
===============================
Para refinar busquedas de selectores conviene hacerlas de ls siquiente

    >> $('#app-header').find('h1')
    primero buscará con getElementById y luego, dentro de ese objeto, hará una busqueda mas acotata
    del elemento h1. Eso hará mas efectiva la busqueda
    >> $('#header').has('h1')
    En este caso buscará todos los header que tengan en su interior algun h1
    >> $('#header').not('.title')
    Todos los header que No tengan la clase .title
    >> $('p').filter('.text')
    filtrar todos los elementos p que tengan la clase .text
    >> $('p').filter('.text').has('a').first()
    Se puede concatenar busquedas asi, entonces se filtra por p, se busa los que tengan un elementos a
    y se selecciona el primer elemento de ellos.
    >> $('p').filter('.text').has('a').eq(1)
    igual que el anterior pero para esta ocacion seleccionará al segundo elemento
    gracias a eq() que se le indica el indice (0,1,2...etc)

  Las selecciones no se actualizan solas! si se requiere inserte una nueva se deberia agregar en el codigo.
  ejemplo:_

    var ps = $('p')
    ..
    ..
    ..
    var p = document.createElement('p');
    document.body.appendChild(p)
    ps = ps.add(p)
*/
/*--------------------------------------------------------------------------
Crear Nuevos elementos dentro del DOM // Get y Set
===================================================
Con javascript:
  $(function(){
    var p = document.createElement('p');
    p.innerHTML = "Hola chiquillos";
    document.body.appendChild(p); //esto agregará al final el elemento
  })

Con jquery:
*/

$(function() {
  var a = $( '<a>', {
    href: 'http://oscarballesteros.com',
    target: '_blanck',
    html: 'ir a ORB'
  })
  $('#app-body').append(a);
  //ejemplo de get:
  console.log(a.attr('href'));
  //ejemplo de set:
  a.attr({
    href: 'http://google.cl',
    html: 'ir a google'
  })
  console.log(a.attr('href'));
})
/*Todos los metodos setters operan sobre todos los elementos de la seleccion de los jQuery objects,
en cambio el guetter  va a operar sobre el primer elementos*/

$(function(){
  $('header#app-header')
   .append($('<p>', { html: 'Me acaban de crear!!' }))
   //tambien se puede hacer al reves:
   //$('<p>', { html: 'Me acaban de crear!!' }).appendTo($('header#app-header')) 

})
/*--------------------------------------------------------------------------
Agregar clases
==============
...
  >>$('h1').addClass('danger');
  Esto va a agregar la clase "danger"
...

Tambien se puede usar funciones de timpo:
  $(function(){
    var $h1 = $('h1');
    $h1.addClass('danger');
    setTimeout(function () {
      $h1.removeClass('danger');
    }, 1500)
  })

  importante: a todos los jQuery objects por convencion se le antepone el signo $
  */
