var exec = require('child_process').exec;
var dgram = require('dgram');

setInterval(function() {
  exec("free | awk 'FNR == 3 {print $3/($3+$4)*100}'", function puts(errorMemory, stdoutMemory, stderrMemory) {
    var memoryUsage = stdoutMemory.trim();
    exec("top -d 0.5 -b -n2 | grep 'Cpu(s)' | tail -n 1 | awk '{print $2 + $4}'", function puts(errorCpu, stdoutCpu, stderrCpu) {
      var cpuUsage = stdoutCpu.trim();
      var message = new Buffer(memoryUsage + ";" + cpuUsage + ";" + process.env.ID_HOST + ";" + process.env.NAME_HOST);
      var client = dgram.createSocket('udp4');
      
      client.send(message, 0, message.length, 4000, '10.0.2.2', function (err, bytes) {
          if (err) {
            throw err;
          }
          // Reuse the message buffer,
          // or close client
          client.close();
        }
      );
    });  
  });  
}, 1000);


