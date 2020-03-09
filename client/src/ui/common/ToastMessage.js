import React,{useState,useContext, useEffect} from 'react'
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



  console.log('displayToastGlobal', displayToastGlobal)
  console.log('toastMessage', toastMessage)

  return (
    <>
      <div id="snackbar" className={`${displayToastGlobal ? "show" : ""}`}>{toastMessage}</div>
    </>
  )
}
