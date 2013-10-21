var Log_Writer = require('./writers/writer');

var Log = function (options) {
  this.writers = [];
}

/*
 * addWriter function
 * @name string
 * @param writer Log_Writer
 * @returns this (fluent interface)
 */
Log.prototype.addWriter = function (name, writer) {

  if (!writer instanceof Log_Writer || typeof writer.write!='function') {
    throw new Error(name+' must implement Log_Writer')
  } else {
    this.writers[name]=writer;
  }
  return this;
};

/*
 * write function
 * @param tag string
 * @param message string
 * @param callback function
 * @returns this (fluent interface)
 */
Log.prototype.write = function (tag, message, callback) {
    
  for (name in this.writers) {
    this.writers[name].write.apply(this.writers[name], arguments);
  }
  return this;
};

/*
 * convenience methods, each proxy to .write()
 */

Log.prototype.debug = function (message, callback) {
  return this.write('debug', message, callback);
}

Log.prototype.warn = function (message, callback) {
  return this.write('warn', message, callback);
}

Log.prototype.error = function (message, callback) {
  return this.write('error', message, callback);
}

Log.prototype.alert = function (message, callback) {
  return this.write('alert', message, callback);
}

Log.prototype.critical = function (message, callback) {
  return this.write('critical', message, callback);
}

// expose
module.exports = Log;