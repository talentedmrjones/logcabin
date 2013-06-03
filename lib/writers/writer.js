/*
 * interface Log_Writer
 * used primarily to check instanceof various Log_Writer(s)
 */
var Log_Writer = function (options) {
  options = options || {tags:[]};
  
  this.tags = options.tags;
  
};

/*
 * write method
 * for logging to nowhere and defining an "interface"
 */
Log_Writer.prototype.write = function (tag, message, callback) {}

Log_Writer.prototype.shouldWrite = function (tag) {
  
  if (~this.tags.indexOf(tag)) {
    return true;
  }
  
  return false;
}

module.exports = Log_Writer;