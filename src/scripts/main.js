'use strict';

var $ = require('jquery');
var nameList = require('./name-list');

var anmiationTypes = [
  "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)",
  "ease-out",
  "cubic-bezier(0.6,-0.28, 0.43, 0.23)",
  "cubic-bezier(0.4, 0, 0.2, 1)",
  "cubic-bezier(0.68, -0.55, 0.27, 1.55)"
]

$(function() {



  var checkedIdx = -1;
  var gridHeight = $('.grid').height() / 2;
  var translateZ =   gridHeight / Math.tan(Math.PI / nameList.length);
  var deletaTop = translateZ - gridHeight;
  var roundCount = 0;

  function rotate(degree) {
    var anmiIdx = parseInt(Math.random() * anmiationTypes.length);

    $('.grid').each(function() {
      var absDeg = degree + $(this).index() * (360 / nameList.length);
      $(this).css({
        'transform': 'rotateX(' + absDeg + 'deg) translateZ(' + translateZ + 'px)',
        'transition-timing-function': anmiationTypes[2]
      });
    });
  }

  rotate(roundCount);

  $('#choose-box > li').on('click', function() {
    $(this).siblings('.checked').removeClass('checked');
    $(this).addClass('checked')
    checkedIdx = ($(this).data('idx'));
  })

  $('.wrap').css('top', deletaTop);

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
