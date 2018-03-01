var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/index.html');
  
});
app.get('/index2.html', function (req, res) {
  res.sendFile(__dirname + '/index2.html');

});
// io.on('connection', function(socket){
//   socket.on('send', function(msg){
//     console.log('message: ' + msg);
//   });
//   socket.broadcast.emit('hi');
//   //socket.broadcast.emit('user',  { some: 'data' });
//   //socket.emit('reversion', { hello: 'world' });
// });
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('reversion', msg);
  });
});

http.listen(3001, function(){
  console.log('监听成功');
});
    