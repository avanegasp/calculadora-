$(function(){

  var v1, v2, op;
  //Escribir en el input
  $('input[name=btn]').click(function(){
    var primeraCifra = $('#resultado').val($('#resultado').val() + $(this).val())
  })

  // Input volver a cero
  $('input[name=c]').click(function(){
    $('#resultado').val('')
  })

  //Suma
  $('input[name=suma]').click(function(){
    if($('#resultado').val() != ''){
      // v1 = parseFloat($('#resultado').val());
      $('#resultado').val('')
      // op = "suma"
      $('#op').text($(this).val())
    } else {
      console.log('coloque una cifra')
    }
  });

  $('input[name=igual]').click(function(){
    if($('#resultado').val() != ''){

    } else {
      console.log('no hay resultado')
    }
  });
})
