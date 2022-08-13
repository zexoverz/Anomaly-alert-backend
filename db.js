const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://zexoverz:blackgamer780@cluster0.qpoj4.mongodb.net/anomaly-alert-db'
mongoose.connect(dbURI, {useNewUrlParser:true})
// connect to database
const db = mongoose.connection
// if error
db.on("error", (err) => {
  console.error(`err: ${err}`)
})// if connected
db.on('connected', (err, res) => {
  console.log('Connected to database')
})