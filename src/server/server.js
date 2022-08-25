const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')
const https=require('https')
const fs = require('fs')
PORT = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  console.log("Server is running at port", PORT);
  res.send('hello world')
})

app.get("/api/auth", (req,res)=>{
  res.send("api,2")
  path = require('path')
  console.log(__dirname)
  var userData = fs.readFileSync("./users.json",'utf8', function(err, data){
  })

  userData_JSON = JSON.parse(userData)
  console.log(userData_JSON);
  
})