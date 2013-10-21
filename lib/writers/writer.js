var _ = require('lodash');

/*
 * @constructor Log_Writer (used as an "interface")
 * @param options object
 * used primarily to check instanceof various Log_Writer(s)
 */
var Log_Writer = function (options, tags) {

  options = options || {};

  var
  	defaults  = {}
  ;

  this.tags = tags || [];
  this.options = _.merge({}, defaults, options);
};

/*
 * @method write
 * @param tag string
 * @param message string
 * @param callback function
 * @returns undefined
 * for logging to nowhere and defining an "interface"
 */
Log_Writer.prototype.write = function (tag, message, callback) {}

/*
 * @method shouldWrite
 * @param tag string
 * @returns boolean
 * determines whether the particular tag should be written based on whether tag exists in this.tags
 */
Log_Writer.prototype.shouldWrite = function (tag) {
  
  // returns true if tags are empty, or tag is found in this.tags
  if (!this.tags.length || ~this.tags.indexOf(tag)) {
    return true;
  }
  
  return false;
}

module.exports = Log_Writer;