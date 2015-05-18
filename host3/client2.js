var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer ('my datagram');
client.send(message, 0, 
  message.length, 4000, '10.0.2.2', function (err, bytes) {
    if (err) {
      throw err;
    }
    // Reuse the message buffer,
    // or close client
    client.close();
  }
);