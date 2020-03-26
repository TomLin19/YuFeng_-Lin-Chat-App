var mongoose = require('mongoose')
var settings = require('../setting.js')

var db

db = settings.host + '/' + settings.db
mongoose.connect(db)

mongoose.connection.on('close', function(){
    console.log('Log in the Database')
    mongoose.connect(db)
})

mongoose.connection.on('error', function(error){
    console.log('Can not link the Database')
    console.log(error)
    mongoose.disconnect()
})

module.exports = mongoose