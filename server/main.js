var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window');

// Report crashes to our server.
require('crash-reporter');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  var dgram = require('dgram');
  var server = dgram.createSocket('udp4');

  // Listen for emission of the "message" event.
  server.on('message', function (message, rinfo) {
    console.log('received a message: ' + message);
    console.log(rinfo);
    // mainWindow.openDevTools();
	  // mainWindow.webContents.on('did-finish-load', function() {
    var metrics = message.toString().split(";");
    var idHost = metrics[2];
    if (idHost === "1") {
	    mainWindow.webContents.send('datagram-h1', "" + message);
    }
    else if (idHost === "2") {
      mainWindow.webContents.send('datagram-h2', "" + message);
    }
    else if (idHost === "3") {
      mainWindow.webContents.send('datagram-h3', "" + message);
    }
	  // });
  });

  server.on("listening", function () {
    var address = server.address();
    console.log("I am listening on " + address.address + ":" + address.port);
  });

  // Bind to port 4000
  var port = 4000;
  server.bind(port);
});
