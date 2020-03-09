
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')
// const path = require('path')
// const request = require('request')
// const http = require('http') 
// const fetch = require('node-fetch');
// const async = require('async')



// All routes
const offersRoute = require('./offers/offersRoute')


const app = express()

// Authenticate DB 
db.authenticate()
.then(() => {
  console.log('^^%&%^&^%^$%^&$%%^$%^$^ Wolla Connected to DB ^^%&%^&^%^$%^&$%%^$%^$^')})
.catch(err=> {
  console.log(`DB Connection failed ${err.message}`)})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/offers', offersRoute)

app.get('*', (req,res)=> {
  res.json({
    message : "Welcome to the rest API of Offers"
  })
})

const port = process.env.PORT || 8087

app.listen(port, () => {
  console.log(`The app is running on PORT number ${port}`)
})