'use strict';

var $ = require('jquery');
var nameList = require('./name-list');

var colorList = ['#019AA0', '#AFD693', '#FCE680', '#F2AE25', '#CF181D'];

$(function() {
  var checkedIdx = -1;

  nameList.forEach(function(name, idx) {
    $('<li class="grid" />')
      .text(name)
      .css('color', colorList[idx % 5])
      .appendTo($('.circle'));

      $('<li/>')
        .text(name)
        .data('idx', idx)
        .appendTo($('#choose-box'));
  })

  $('#choose-box > li').on('click', function() {
    $(this).siblings('.checked').removeClass('checked');
    $(this).addClass('checked')
    checkedIdx = ($(this).data('idx'));
  })

  var i=0;
  var gridHeight = $('.grid').height() / 2;
  var translateZ =   gridHeight / Math.tan(Math.PI / nameList.length);
  var deletaTop = translateZ - gridHeight;
  $('.wrap').css('top', deletaTop);
  function rotate(degree) {
    $('.grid').each(function() {
      var absDeg = degree + $(this).index() * (360 / nameList.length);
      $(this).css('transform', 'rotateX(' + absDeg + 'deg) translateZ(' + translateZ + 'px)');
    });
  }
  var roundCount = 0;

  rotate(roundCount);

  $('.grid').height();
  $(document).on('keydown', function(event) {
    var targetIdx;

    if(76 !== event.keyCode && 88 !== event.keyCode){return};

    if(76 === event.keyCode && parseInt(checkedIdx) !== -1) {
      targetIdx = checkedIdx;
    } else {
      targetIdx = parseInt(Math.random() * nameList.length);
    }

    roundCount += parseInt(Math.random() * 3 + 3) * nameList.length;
    var needRotete = (roundCount - targetIdx) * (360 / nameList.length);
    rotate(needRotete);
  });
});
