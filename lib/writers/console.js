var Log_Writer = require('./writer');

/*
 * class Log_Writer_Console
 * writes logs to the standard node console
 *
 */
var Log_Writer_Console = function () {
  
  Log_Writer.apply(this, arguments);

}

// inherit so we get Log_Writer_Console instanceof Log_Writer===true
Log_Writer_Console.prototype = new Log_Writer();

/*
 * method write
 * satisfies required interface
 */
Log_Writer_Console.prototype.write = function (tag, message, callback) {
  
  if (this.shouldWrite(tag)) {
    console.log(message);

    if (typeof callback=='function') {
      callback.call(this);
    }

  }

}

module.exports = Log_Writer_Console;