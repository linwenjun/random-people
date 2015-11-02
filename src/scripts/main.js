'use strict';

var $ = require('jquery');

var nameList = ['井寒', '董磊', '周奕星', '国莹', '王振璇', '孙亚楠', '孙恬静', '孙菁', '李亚', '李仕元', '赵少翌', '樊炜', '高阳', '李进', '杨楠晨', '陈曦宇', '李君丽', '王玥', '胡智', '王旭桐', '潘浩', '王绿菊', '罗杰', '翁娇娇', '姚丹萍', '李昱(♀)', '郭鑫', '闫文婷', '刘欣倩', '林杨', '李昱(♂)', '魏尧', '刘静'];
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
