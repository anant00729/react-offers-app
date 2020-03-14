import React ,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import { R_ALL_OFFERS , R_ADD_OFFER,DISMISS_CLASS} from './AAApConstants'
import CommonActions from './actions/CommonActions'
import AddOfferActions from '../add_offer/AddOfferActions'
import AllOffersActions from '../all_offers/AllOffersActions'


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
  toastMessage  : '',
  showModal : DISMISS_CLASS
}

// Create global context
export const GlobalContext = createContext(initState) 

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer , initState) 

  let { setSideMenuButtons, setDismissToast, setShowToast,
        setDismissDialog, setShowDialog}  = new CommonActions(dispatch)

  let { addOffer }  = new AddOfferActions(dispatch)
  let { getAllOffers }  = new AllOffersActions(dispatch)

        

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
        setShowToast,
        showModal: state.showModal,
        setDismissDialog,
        setShowDialog
      }}>
      {children}
    </GlobalContext.Provider>
  )
}






