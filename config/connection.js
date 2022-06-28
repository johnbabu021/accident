const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
// console.log(process.env) 
const state = {
    db: null
}

module.exports.connect = function (done) {
    const url = process.env.MNGD
    const dbname = 'accident'

    MongoClient.connect(url, (err, data) => {//err and done(err) have no common features
        if (err)
            return done(err)//this is passed to app.js in the if case
        else
            state.db = data.db(dbname)
        done()//else case in app.js is formed here
    })
}
module.exports.get = function () {
    return state.db
} 