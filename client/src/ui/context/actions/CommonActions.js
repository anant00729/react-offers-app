import { SET_SIDE_MENU_OPTIONS, 
  DISMISS_ERROR_TOAST, SHOW_ERROR_TOAST,DISMISS_APP_DIALOG,SHOW_APP_DIALOG,DISMISS_CLASS,
  DISMISS_IMG_DIALOG, SHOW_IMG_DIALOG
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

  // dismiss app dialog
  dismissImageDialog = () => {
    const payload = {
      payload : DISMISS_CLASS,
      offer : {}
    }
    this.dispatch({
      type : DISMISS_IMG_DIALOG, 
      payload : payload
      })
  }
  // show app dialog
  showImageDialog = (offer) => {
    
    let payload = {
      payload : '',
      offer : offer
    }
    console.log('payload', payload)
    this.dispatch({
      type : SHOW_IMG_DIALOG, 
      payload : payload
    })
  }

}

export default CommonActions;
