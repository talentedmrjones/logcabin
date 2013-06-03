var Log_Writer = require('./writer');

/*
 * class Log_Writer_Loggly
 * writes logs to loggly.com account
 *
 */
var Log_Writer_Loggly = function (options) {
  
  Log_Writer.call(this);
  
  var loggly = require('loggly')
  this.client = loggly.createClient(options.config)
  this.key = options.key;
  ;

}

// inherit
Log_Writer_Loggly.prototype = new Log_Writer();

/*
 * method write
 * satisfies required interface
 */
Log_Writer_Loggly.prototype.write = function (tag, message, callback) {

  if (this.shouldWrite(tag)) {
    this.client.log(this.key, message, callback);
  }
}

module.exports = Log_Writer_Loggly;