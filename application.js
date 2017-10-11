$(document).ready(function() {

  var gridSize = 16;

  function createGrid(gridSize) {
    $('#container').children().remove();
    for (divIndex = 0; divIndex < gridSize*gridSize; divIndex++) {
      var div = $('<div></div>');
      var percentSize = 100/gridSize+'%';
      div.css({'float':'left','width':percentSize,'height':percentSize});
      div.css('opacity','0');
      if ((divIndex)%gridSize === 0) {
      div.css('clear','left');
      }
      $('#container').append(div);
    };
  }

  $('#container').css({'width':'100%','height':'100%'});
  createGrid(gridSize);

  var op = 0;

  $('#container').on('mouseenter', 'div', function() {
    op = Number($(this).css('opacity'));
    op = op + 0.1;
    $(this).css({'opacity': op,'background-color':'rgb(0,0,0)'});

    /*var rand1 = Math.floor(Math.random()*256);
    var rand2 = Math.floor(Math.random()*256);
    var rand3 = Math.floor(Math.random()*256);
    var color = 'rgb('+rand1+','+rand2+','+rand3+')';
    $(this).css('background-color',color);*/

    //$(this).addClass('change-color');
  });
  
  /*$('#container').on('mouseleave', 'div', function() {
    $(this).css('background-color','white');
    //$(this).removeClass('change-color');
  });*/

  $('#change-size').on('click', function() {
    gridSize = prompt('Desired Grid Size',gridSize);
    createGrid(gridSize);
  });

});
