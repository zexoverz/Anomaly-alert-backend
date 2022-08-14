require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')


// Initialize express
const app = express()
// Set DB
const db = require('./db')

// parse json objects
app.use(express.json()); 
app.use(morgan("dev")); 
app.use(cors());
app.use(express.urlencoded({extended: true}));

//endpoint
app.get("/ping", (req, res) => {  
    return res.send({
      status: "Healthy",
    });
});

app.use(routes);

// create a server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀🚀 Server running on port ${PORT  }`)
})