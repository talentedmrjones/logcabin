var Log_Writer = require('./writers/writer');

var Log = function (options) {
  this.writers = [];
}

/*
 * addWriter function
 * @param writer Log_Writer
 *
 */
Log.prototype.addWriter = function (name, writer) {

  if (!writer instanceof Log_Writer || typeof writer.write!='function') {
    throw new Error(name+' must implement Log_Writer')
  } else {
    this.writers[name]=writer;
  }
  
};

/*
 * write function
 * @param tag string
 * @param message string
 * @param level  string
 *
 */
Log.prototype.write = function (tag, message, callback) {
    
  for (name in this.writers) {
    this.writers[name].write(tag, message, callback);
  }
  
};

/*
 * convenience methods, each proxy to .write()
 */

Log.prototype.debug = function (message, callback) {
  this.write('debug', message, callback);
}

Log.prototype.error = function (message, callback) {
  this.write('error', message, callback);
}

Log.prototype.alert = function (message, callback) {
  this.write('alert', message, callback);
}

Log.prototype.critical = function (message, callback) {
  this.write('critical', message, callback);
}

// expose
module.exports = Log;