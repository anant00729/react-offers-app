import { R_HOME , R_ALL_OFFERS , R_ADD_OFFER, SET_SIDE_MENU_OPTIONS, GET_ALL_OFFERS, SHOW_ERROR, ADD_OFFER,
  DISMISS_ERROR_TOAST, SHOW_ERROR_TOAST,DISMISS_APP_DIALOG,SHOW_APP_DIALOG,DISMISS_CLASS
} from '../../context/AAApConstants'


class CommonActions {

  constructor(dispatch){
    this.dispatch = dispatch
  }

  // Set Side menu buttons 
  setSideMenuButtons = (pathname) => {
    this.dispatch({
      type : SET_SIDE_MENU_OPTIONS, 
      payload : pathname
    })
  }

  setDismissToast = () => {
    this.dispatch({
      type : DISMISS_ERROR_TOAST, 
      payload : ''
    })
  }
  // show toast value  
  setShowToast = (message) => {
    this.dispatch({
      type : SHOW_ERROR_TOAST, 
      payload : message
    })
  }

  // dismiss app dialog
  setDismissDialog = () => {
    this.dispatch({
      type : DISMISS_APP_DIALOG, 
      payload : DISMISS_CLASS
      })
  }
  // show app dialog
  setShowDialog = () => {
    this.dispatch({
      type : SHOW_APP_DIALOG, 
      payload : ''
    })
  }

}

export default CommonActions;
