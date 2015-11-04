var express = require('express');
var app = express();

app.use(express.static('dist'));

app.set('view engine', 'ejs');

var students = ['井寒', '董磊', '周奕星', '国莹', '王振璇', '孙亚楠', '孙恬静', '孙菁', '李亚', '李仕元', '赵少翌', '樊炜', '高阳', '李进', '杨楠晨', '陈曦宇', '李君丽', '王玥', '胡智', '王旭桐', '潘浩', '王绿菊', '罗杰', '翁娇娇', '姚丹萍', '李昱(♀)', '郭鑫', '闫文婷', '刘欣倩', '林杨', '李昱(♂)', '魏尧', '刘静'];

app.get('/', function(req, res) {
  res.render('index', {students: students})
});

app.listen(8080, function() {
  console.log('listen start, http://localhost:8080');
})
