var mongoose   = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/blooddonordb', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo:'+err)
    process.exit(1)
  } else {
	  console.log('connected to Mongo')
   
  }
});

module.exports = connection;