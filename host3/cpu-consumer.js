var iterations = 100000;

setInterval(function() {
  for (var i = 0; i < iterations; i++) {
    var randomResult = Math.random() * 20000;
    randomResult = Math.sqrt(randomResult); 
  };

  iterations = iterations + 100000;
}, 1000);
