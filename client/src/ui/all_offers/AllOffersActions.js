import {  GET_ALL_OFFERS, SHOW_ERROR} from '../context/AAApConstants'


class AllOfferActions {

  constructor(dispatch){
    this.dispatch = dispatch
  }


  //Actions 
  // Get All Offers
  getAllOffers = async () => {

    try {
      const res_dd = await fetch('offers/getAllOffers')
      const res_d = await res_dd.json()  

      if(res_dd.status === 200){
        if(res_d.status){
          this.dispatch({
            type : GET_ALL_OFFERS, 
            payload : res_d.offerList
          })
        }
        else {
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


export default AllOfferActions;
