
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')
const qrcode = require('qrcode')
const fs = require('fs')



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


app.use(express.static('public/build'));
app.use(express.static('public'));


app.use('/offers', offersRoute)


app.get('/generateQRCode' , async (req,res)=>{
  let qrRes = await qrcode.toDataURL('http://tcp.com/TD_Demo1');
  let base64Image = qrRes.split(';base64,').pop();

  fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    if(err) {
      res.json({status : false , message : err.message})
    }
    res.json({status : true , message : 'File Created Please check'})

  });


  // var createStream = fs.createWriteStream("JournalDEV.txt");
  // createStream.end();

  //fs.writeFileSync('./qr.html', `<img src="${res}">`);
})


app.use(express.static('public/build'));
app.use(express.static('public'));



app.get('*', (req,res)=> {
    ///app.use(express.static('public/build'))
    //res.sendFile(path.join(__dirname+'/public/build/index.html'));
    
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
    //res.sendFile(path.resolve(__dirname, 'public/build', 'index.html'))
})

// app.get('*', (req,res)=> {
//   res.json({
//     message : "Welcome to the rest API of Offers"
//   })
// })

const port = process.env.PORT || 8087

app.listen(port, () => {
  console.log(`The app is running on PORT number ${port}`)
})