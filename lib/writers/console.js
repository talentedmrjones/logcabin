var
	Log_Writer = require('./writer'),
	util = require('util')
	;

/*
 * constructor Log_Writer_Console
 * writes logs to the standard node console
 *
 */
var Log_Writer_Console = function () {
  
  Log_Writer.apply(this, arguments);

}

// inherit super-contructor
util.inherits(Log_Writer_Console, Log_Writer);

/*
 * @method write
 * satisfies required interface
 */
Log_Writer_Console.prototype.write = function (tag, message, callback) {
  
  if (this.shouldWrite(tag)) {
    console.log(message);

    if (typeof callback === 'function') {
      callback.call(this);
    }

  }

}

module.exports = Log_Writer_Console;