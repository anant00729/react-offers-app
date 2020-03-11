const db = require('../../config/database')

class Offer {
  
  static async save(o){

    const {
      mainOfferID ,offerImages, offerTitle, description, tAndC, availSteps, expiryDate, createdOn, updatedOn, offerQrCodePath
    } = o
    
    let q1 = `INSERT INTO public.offers(
      "mainOfferID", 
      "offerImages", 
      "offerTitle", 
      "description", 
      "tAndC", 
      "availSteps", 
      "expiryDate", 
      "createdOn", 
      "updatedOn",
      "offerQrCodePath"
      )
      VALUES (
      (:mainOfferID),
      (:offerImages),
      (:offerTitle),
      (:description),
      (:tAndC),
      (:availSteps),
      (:expiryDate),
      (:createdOn),
      (:updatedOn),
      (:offerQrCodePath)
      );`

      try {
        
        await db.query(q1,{
          replacements : {
           mainOfferID, offerImages : JSON.stringify(offerImages), offerTitle, description, tAndC, availSteps, expiryDate, createdOn, updatedOn, offerQrCodePath
          }
        })
        return { status : true , message : 'Offer Added' , offer : o }
      } catch (error) {
        return { status : false , message : error.message , offer : o }
      }
  }
    

  static async getAll(){
    let q1 = `SELECT * FROM public.offers
    ORDER BY offers."offerID" DESC;`
    
    try {
      const res_d = await db.query(q1)
      return { status : true , message : '' , offerList : res_d[0] }
    } catch (error) {
      return { status : false , message : error.message  }
    }
  }
    
}


module.exports = Offer