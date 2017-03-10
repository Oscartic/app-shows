$(function(){
  /**
  * Submit Search Form. Control de busqueda
  */
  $('#app-body').find('form').submit(function (ev) {
    ev.preventDefault(); //Evita recargar la pantalla
    //3. console.log(this); //this en este contexto es el form al que estamos accediendo (Es el elemento propio del DOM)
    //Si queremos volverlo un jQuery object se debe anteponer $ y rodear entre parentesis : $(this)
    var busqueda = $(this).find('input').val(); //ahora this es el formulario convertido a object y admite el metodo find
      alert('Se a buscado: ' + busqueda)
  })
  //2. console.log(this); //This es document cuando se esta ejecutando document ready

  //Variable con el contenido y las etiquetas necesarias para mostar un show:
  var template = '<article class="tv-show">' +
    '<div class="left">' +
      '<img src=":img:" alt=":img alt:">' +
    '</div>' +
    '<div class="left info">' +
      '<h1>:name:</h1>' +
      '<p>:summary:</p>' +
    '</div>' +
  '</article>';

  $.ajax({   //Recibe varios parametros. ejemplo = (url, [Settings])
    url: 'http://api.tvmaze.com/shows',
    success: function (shows, textStatus, xhr) { // puede recibir 3 parametros(data, textStatus, jqXHR)
        var $showsContanier = $('#app-body').find('.tv-shows'); //Se guarda el contenedor donde iran todos los shows en esta var.
        //Recorre todos los shows que se traen desde la api y Se reemplaza valores por cada key asignada en "template"
        shows.forEach(function (show) {
          var article = template.replace(':name:', show.name)
              .replace(':img:', show.image.medium)
              .replace(':summary:', show.summary)
              .replace(':img alt:', show.name + " cartel")

            $showsContanier.append($(article)) //Se agrega cada articulo con las correspondiente informacion
        })
    }
  })
})

//1. console.log(this); //this fuera de todo es "window"
