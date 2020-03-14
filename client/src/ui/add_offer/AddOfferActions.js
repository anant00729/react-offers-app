import { SHOW_ERROR, ADD_OFFER} from '../context/AAApConstants'


class AddOfferActions {

  constructor(dispatch){
    this.dispatch = dispatch
  }


  //Actions 
  // Get All Offers
  // Add Offer
  addOffer = async (offer) => {

    try {

      const res_dd = await fetch('offers/addOffer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(offer)
      });
      
      const res_d = await res_dd.json()  

      if(res_dd.status === 200){
        if(res_d.status){
          this.dispatch({
            type : ADD_OFFER, 
            payload : {}
          })
        }else {
          this.dispatch({type : SHOW_ERROR, payload : `API ERROR : ${res_d.message}`})  
        }
        
      }else {
        this.dispatch({type : SHOW_ERROR, payload : `HTTP ERROR Code : ${res_dd.status}`})  
      }
      
    } catch (error) {
      this.dispatch({type : SHOW_ERROR, payload : `Error Details ${error.message}`})
    }
    
  }

  
}


export default AddOfferActions;
