var 
	Log_Writer = require('./writer'),
	util = require('util'),
	loggly = require('loggly')
;

/*
 * constructor Log_Writer_Loggly
 * writes logs to loggly.com account
 *
 */
var Log_Writer_Loggly = function () {
  
  Log_Writer.apply(this, arguments); // inherit instance properties
  this.client = loggly.createClient(this.options);

}

// inherit super-contructor
util.inherits(Log_Writer_Loggly, Log_Writer);

/*
 * @method write
 * satisfies required interface
 */
Log_Writer_Loggly.prototype.write = function (tag, data, callback) {

  if (this.shouldWrite(tag)) {
		// clone this.options.tags so we dont modify original
		var tags = this.options.tags.slice(0);
		// add the tag that was written
		tags.push(tag);

    this.client.log(data, tags);
  }
}

module.exports = Log_Writer_Loggly;