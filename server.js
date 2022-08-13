const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// Initialize express
const app = express()
// Set DB
const db = require('./db')

// parse json objects
app.use(express.json()); 
app.use(morgan("dev")); 
app.use(cors());

//endpoint
app.get("/ping", (req, res) => {  
    return res.send({
      status: "Healthy",
    });
});

// create a server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`🚀🚀 Server running on port ${PORT  }`)
})