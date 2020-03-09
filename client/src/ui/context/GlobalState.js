import React ,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import { R_HOME , R_ALL_OFFERS , R_ADD_OFFER, SET_SIDE_MENU_OPTIONS, GET_ALL_OFFERS, SHOW_ERROR, ADD_OFFER,
  DISMISS_ERROR_TOAST, SHOW_ERROR_TOAST
} from './AAApConstants'


// Init State
const initState = {
  sideMenuOptions : [
    { name : "All Offers" , isSelected : false, rName : R_ALL_OFFERS },
    { name : "Add Offer" , isSelected : false, rName : R_ADD_OFFER } ,
  ],
  allOffers : [],
  errorMessage: '',
  isCollected :false,
  displayToastGlobal : false,
  toastMessage  : ''
}

// Create global context
export const GlobalContext = createContext(initState) 

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer , initState) 


  //Actions 
  // Get All Offers
  async function getAllOffers() {

    try {
      const res_dd = await fetch('offers/getAllOffers')
      const res_d = await res_dd.json()  

      if(res_dd.status === 200){
        if(res_d.status){
          dispatch({
            type : GET_ALL_OFFERS, 
            payload : res_d.offerList
          })
        }
        else {
          dispatch({type : SHOW_ERROR, payload : `API ERROR : ${res_d.message}`})  
        }
      }else {
        dispatch({type : SHOW_ERROR, payload : `HTTP ERROR Code : ${res_dd.status}`})  
      }
      
    } catch (error) {
      dispatch({type : SHOW_ERROR, payload : `Error Details ${error.message}`})
    }
    
  }



  // Add Offer
  async function addOffer(offer) {

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

        console.log('res_d', res_d)
        if(res_d.status){
          dispatch({
            type : ADD_OFFER, 
            payload : {}
          })
        }else {
          dispatch({type : SHOW_ERROR, payload : `API ERROR : ${res_d.message}`})  
        }
        
      }else {
        dispatch({type : SHOW_ERROR, payload : `HTTP ERROR Code : ${res_dd.status}`})  
      }
      
    } catch (error) {
      dispatch({type : SHOW_ERROR, payload : `Error Details ${error.message}`})
    }
    
  }



  // Set Side menu buttons 
  function setSideMenuButtons(pathname) {
    dispatch({
      type : SET_SIDE_MENU_OPTIONS, 
      payload : pathname
    })
  }

  // dismiss toast value  
  function setDismissToast() {
    dispatch({
      type : DISMISS_ERROR_TOAST, 
      payload : ''
    })
  }
  // show toast value  
  function setShowToast(message) {
    dispatch({
      type : SHOW_ERROR_TOAST, 
      payload : message
    })
  }

  return (
    <GlobalContext.Provider value={
      {
        sideMenuOptions : state.sideMenuOptions,
        allOffers : state.allOffers,
        setSideMenuButtons,
        getAllOffers,
        addOffer,

        // Default/Common States
        errorMessage : state.errorMessage,
        isCollected : state.isCollected,
        displayToastGlobal : state.displayToastGlobal,
        toastMessage : state.toastMessage,
        setDismissToast,
        setShowToast
      }}>
      {children}
    </GlobalContext.Provider>
  )
}






