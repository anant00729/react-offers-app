const Offer = require('./models/Offer')
const qrcode = require('qrcode')
const fs = require('fs')
const fetch = require('node-fetch')
const FormData = require('form-data');


exports.getAllOffers = async (req,res) => {
  let responseD = await Offer.getAll()
  res.status(200).json(responseD)
}


exports.deleteAllOffers = async (req,res) => {
  let responseD = await Offer.deleteAll()
  res.status(200).json(responseD)
}


exports.addOffer = async (req,res) => {
  const date = new Date()
  const currentDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
  
  const mainOfferID = req.body.mainOfferID || ''
  const offerImages = req.body.offerImages || ''
  const offerTitle = req.body.offerTitle || ''
  const description = req.body.description  || ''
  const tAndC = req.body.tAndC || ''
  const availSteps = req.body.availSteps || ''
  const expiryDate = req.body.expiryDate || currentDate
  const createdOn = req.body.createdOn || currentDate
  const updatedOn = req.body.updatedOn || currentDate
  const imagePath = makeid(20)
  //let offerQrCodePath = `/${imagePath}.png`

  //let qrRes = await qrcode.toDataURL(`http://tcp.com/${mainOfferID}`);
  let qrRes = await qrcode.toDataURL(description);
  let base64Image = qrRes.split(';base64,').pop();
  const uploadRes = await uploadImageToImgUr(base64Image)

  if(uploadRes.status){
    let offerQrCodePath = uploadRes.imgUrl
    let responseD = await Offer.save({
      mainOfferID ,offerImages ,offerTitle ,description ,tAndC ,availSteps ,expiryDate ,createdOn ,updatedOn, offerQrCodePath
    })
    res.status(200).json(responseD)
  }else {
    res.status(200).json(responseD)
  }

  // fs.writeFile(`./public/${imagePath}.png`, base64Image, {encoding: 'base64'}, async (err) => {
  //   if(err) {
  //     res.json({status : false , message : err.message})
  //   }
  //   let responseD = await Offer.save({
  //     mainOfferID ,offerImages ,offerTitle ,description ,tAndC ,availSteps ,expiryDate ,createdOn ,updatedOn, offerQrCodePath
  //   })
  //   res.status(200).json(responseD)
  // });

}



const uploadImageToImgUr = async (base64) => {

  let uploadRes = {}

  const form = new FormData()
  form.append('image' , base64)
  try {

    const res_d = await fetch('https://api.imgur.com/3/upload', 
    { 
      method: 'POST', 
      body: form,
      headers : { 'Authorization': 'Client-Id 20317a5496712ab' } 
    })

    const resData = await res_d.json()

    if(resData.status === 200){
      if(resData.data.link){
        uploadRes = {status : true , imgUrl : resData.data.link}
      }else {
        uploadRes = {status : false , message : `Image URL not found`}
      }
    }else {
      uploadRes = {status : false , message : `Image not uploaded to imgur ${resData.status}`}
    }
  } catch (error) {
    uploadRes = {status : false , message : error.message}
  }
  return uploadRes
}


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


