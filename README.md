# Log Cabin

Provides flexible logging for Node.JS applications inspired by Zend Framework's Zend_Log package.

## Install
`npm install logcabin`

## Usage

In an Express-based application you might create something like `lib/log.js`

```javascript

var 
  logcabin = require('logcabin'),
  Log = new logcabin.Log(),
  logglyOptions = {
    token: 'my-very-long-token',
    subdomain: 'mysubdomain',
    tags: [], 
    auth: {
      username: "myusername",
      password: "myP@ssw0rd"
    },
    json:true
  }
;

switch (process.env.NODE_ENV) {
  
  // on my local machine just console everything
  case 'local': 
    Log.addWriter('console', new logcabin.writers.Console()); 
    break;

  // on development and production log to loggly
  case 'development':
  case 'production':
    logglyOptions.tags.push(process.env.NODE_ENV);
    var loggly = new logcabin.writers.Loggly(logglyOptions, ['warn', 'error', 'notfound', 'unauthorized']);
    Log.addWriter('loggly', loggly);
}

module.exports = Log;

```

Then in your application you could do something like this:

```javascript

// be sure to point to the right path to where you saved log.js
var log = require('lib/log');

// Using a Mongoose model
MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {
  if (err !== undefined) {
    log.error(err);
  }
});

```