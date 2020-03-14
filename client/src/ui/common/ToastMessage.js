import React,{useContext, useEffect} from 'react'
import {GlobalContext} from '../../ui/context/GlobalState'

export const ToastMessage = () => {

  const {displayToastGlobal, setDismissToast, toastMessage } = useContext(GlobalContext)
  

  useEffect(() => {
    if(displayToastGlobal){
      setTimeout(()=> {
        setDismissToast()                
      },
      2500)
    }
  }, [displayToastGlobal])


  return (
    <>
      <div id="snackbar" className={`${displayToastGlobal ? "show" : ""}`}>{toastMessage}</div>
    </>
  )
}
