const Offer = require('./models/Offer')

exports.getAllOffers = async (req,res) => {
  let responseD = await Offer.getAll()
  res.status(500).json(responseD)
}

exports.addOffer = async (req,res) => {

  const date = new Date()


  const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  
  
  const mainOfferID = req.body.mainOfferID || ''
  const offerImages = req.body.offerImages || ''
  const offerTitle = req.body.offerTitle || ''
  const description = req.body.description  || ''
  const tAndC = req.body.tAndC || ''
  const availSteps = req.body.availSteps || ''
  const expiryDate = req.body.expiryDate || currentDate
  const createdOn = req.body.createdOn || currentDate
  const updatedOn = req.body.updatedOn || currentDate


  let responseD = await Offer.save({
    mainOfferID ,offerImages ,offerTitle ,description ,tAndC ,availSteps ,expiryDate ,createdOn ,updatedOn
  })

  res.status(500).json(responseD)
}



