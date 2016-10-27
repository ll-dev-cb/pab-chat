var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ab_dir = '/home/ubuntu/Desktop/pab/';
var reply;

const cp = require('child_process');
//const jar = cp.spawn('java', ['-cp', ab_dir+'AB.jar', 'Main','bot=super','action=false', 'trace=false'], {cwd:ab_dir, shell:true});
const jar = cp.spawn(ab_dir+'run.sh',[] , [cwd=ab_dir, shell=true]);

//jar.stdout.on('data', function(data) {
 
   console.log(data.toString());
    data = data.toString().replace('Robot:','');
    data = data.toString().replace('Human:','');
    console.log(' after regex ' + data.toString());
    io.emit('chat message',data.toString());
});

// debug 
//jar.stdout.pipe(process.stdout);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/speech.js', function(req, res){
  res.sendFile(__dirname + '/speech.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    //io.emit('chat message', msg);
    jar.stdin.write(msg + '\n');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
