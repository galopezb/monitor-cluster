(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("memory-canvas"), 1000);
  require('ipc').on('datagram-h1', function(message) {
    var metrics = message.split(";");
    var memoryUsage = metrics[0];
     
    line1.append(new Date().getTime(), parseFloat(memoryUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  });  
}());

(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("cpu-canvas"), 1000);
  require('ipc').on('datagram-h1', function(message) {
    var metrics = message.split(";");
    var cpuUsage = metrics[1];

    line1.append(new Date().getTime(), parseFloat(cpuUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  
    var idHost = metrics[2];
    console.log(idHost);
    document.getElementById('host1-title').innerHTML = idHost;
  });  
}());



(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("memory-canvas2"), 1000);
  require('ipc').on('datagram-h2', function(message) {
    var metrics = message.split(";");
    var memoryUsage = metrics[0];
     
    line1.append(new Date().getTime(), parseFloat(memoryUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  });  
}());

(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("cpu-canvas2"), 1000);
  require('ipc').on('datagram-h2', function(message) {
    var metrics = message.split(";");
    var cpuUsage = metrics[1];

    line1.append(new Date().getTime(), parseFloat(cpuUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  
    var idHost = metrics[2];
    console.log(idHost);
    document.getElementById('host2-title').innerHTML = idHost;
  });  
}());




(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("memory-canvas3"), 1000);
  require('ipc').on('datagram-h3', function(message) {
    var metrics = message.split(";");
    var memoryUsage = metrics[0];
     
    line1.append(new Date().getTime(), parseFloat(memoryUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  });  
}());

(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  var line3 = new TimeSeries();

  var smoothie = new SmoothieChart({ grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 } });

  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0)', lineWidth: 0 });
  smoothie.addTimeSeries(line3, { strokeStyle: 'rgb(0, 255, 255)', fillStyle: 'rgba(0, 255, 255, 0)', lineWidth: 0 });

  smoothie.streamTo(document.getElementById("cpu-canvas3"), 1000);
  require('ipc').on('datagram-h3', function(message) {
    var metrics = message.split(";");
    var cpuUsage = metrics[1];

    line1.append(new Date().getTime(), parseFloat(cpuUsage));
    line2.append(new Date().getTime(), 0);
    line3.append(new Date().getTime(), 100);
  
    var idHost = metrics[2];
    console.log(idHost);
    document.getElementById('host3-title').innerHTML = idHost;
  });  
}());

