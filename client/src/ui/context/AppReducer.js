import {SET_SIDE_MENU_OPTIONS, GET_ALL_OFFERS, SHOW_ERROR, 
  ADD_OFFER, DISMISS_ERROR_TOAST, SHOW_ERROR_TOAST,
  MSG_OFFER_ADDED
} from './AAApConstants'


function resetDefaultState(state) {
  return {...state , errorMessage : '' , isCollected : false}
}

export default (state , action) => {
  const { type , payload } = action
  switch(type){
    
    case SET_SIDE_MENU_OPTIONS:
      let sideMenu = state.sideMenuOptions.map(menu=> {
          menu.isSelected = menu.rName === payload 
          return menu
      })
    return {
      ...resetDefaultState(state),
      sideMenuOptions : [...sideMenu],
    }

    case GET_ALL_OFFERS:
    return {
      ...resetDefaultState(state),
      allOffers : [...payload],
    }

    case ADD_OFFER:
    return {
      ...resetDefaultState(state),
      displayToastGlobal : true,
      toastMessage : MSG_OFFER_ADDED
    }

    case SHOW_ERROR:
    return {
      ...state , 
      errorMessage : payload,
      toastMessage : payload,
      displayToastGlobal : true
    }
    case DISMISS_ERROR_TOAST:
      return {
        ...state,
        displayToastGlobal : false,
        toastMessage : ''
      }


    case SHOW_ERROR_TOAST:
      return {
        ...state,
        displayToastGlobal : true,
        toastMessage : payload
      }

    default:
      return state
  }
}


