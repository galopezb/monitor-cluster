var arrayIncrement = [];

setInterval(function() {
  var bigString = "";
  for (var i = 0; i < 50000; i++) {
    bigString += ("a" + Math.random());
  };

  for (var i = 0; i < 1000; i++) {
    arrayIncrement.push(bigString);
  };
}, 1000);

// Estudiar garbage collector, heap, stack y en general el manejo de memoria de un proceso
// http://duartes.org/gustavo/blog/post/anatomy-of-a-program-in-memory/
