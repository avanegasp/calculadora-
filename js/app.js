$(function(){

  var v1, v2, op;
  //Escribir en el input
  $('input[name=btn]').click(function(){
    $('#resultado').val($('#resultado').val() + $(this).val())
  })

  // Input volver a cero
  $('input[name=c]').click(function(){
    $('#resultado').val('')
  })

  //Suma
  $('input[name=suma]').click(function(){
    if($('#resultado').val() != ''){
      v1 = parseFloat($('#resultado').val());
      $('#resultado').val('')
      op = "suma"
      $('#op').text($(this).val())
    } else {
      console.log('sume algo mijo')
    }
  });

  //resta
  $('input[name=resta]').click(function(){
    if($('#resultado').val() !=''){
      v1= parseFloat($('#resultado').val())
      $('#resultado').val('')
      op = "resta"
      $('#op').text($(this).val())

    }else{
      console.log('reste algo mijo')
    }
  })

//multiplicaciones
$('input[name=multiplicacion]').click(function(){
  if($('#resultado').val() != ''){
    v1 = parseFloat($('#resultado').val())
    $('#resultado').val('')
    op = "multiplicacion"
    $('#op').text($(this).val())

  }else{
    console.log('multiplique algo mijo')
  }
})

  $('input[name=division]').click(function(){
    if($('#resultado').val() != ''){
      v1= parseFloat($('#resultado').val())
      $('#resultado').val('')
      op = "division"
      $('#op').text($(this).val())
    }else{
      console.log('divida algo mijo')
    }
  })

  $('input[name=igual]').click(function(){
    if($('#resultado').val() != ''){
      v2 = parseFloat($('#resultado').val());

      if(op == 'suma'){
        $('#resultado').val(v1 + v2)
      }if(op == 'resta'){
        $('#resultado').val(v1 - v2)
      }if(op == 'multiplicacion'){
        $('#resultado').val(v1 * v2)
      }if(op == 'division')
        $('#resultado').val(v1 / v2)

    } else {
      console.log('no hay resultado')
    }
  });
})
