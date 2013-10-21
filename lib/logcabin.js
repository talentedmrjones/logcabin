module.exports = {
  Log:require('./log')
  ,writers:{
    Null:require('./writers/writer')
    ,Console:require('./writers/console')
    ,Loggly:require('./writers/loggly')
  }
};