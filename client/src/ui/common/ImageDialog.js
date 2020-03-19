import React , {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const ImageDialog = () => {

  let {showImageModal, dismissImageDialog, selectedOffer} = useContext(GlobalContext)

  let {offerTitle, offerQrCodePath} = selectedOffer

  function escFunction(event){
    if(event.keyCode === 27) {
      dismissImageDialog()
    }
  }

  useEffect(()=> {
    document.addEventListener("keydown", escFunction, false);
  }, [])


  return (
    <>
    {/* <!--Modal--> */}
  
  <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${showImageModal}`}>
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div className="modal-container bg-white max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">

      <div 
      onClick={dismissImageDialog} 
      className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span className="text-sm">(Esc)</span>
      </div>

      {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
      <div className="modal-content py-4 text-left px-6">
        {/* <!--Title--> */}
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">{offerTitle}</p>
          <div 
          onClick={dismissImageDialog} 
          className="modal-close cursor-pointer z-50">
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>


        {/* <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage : `url(${'https://img.ticketak.com/assets/images/movies/HeaderImage/5e4d29917b48d.jpg'})`}} title="Woman holding a mug">
          </div>
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div class="flex items-center">
              <img class="w-10 h-10 rounded-full mr-4" src={'https://img.ticketak.com/assets/images/movies/HeaderImage/5e4d29917b48d.jpg'} alt="Avatar of Jonathan Reinink"/>
              <div class="text-sm">
                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div> */}


        <img 
        className="w-56 mx-auto"
        src={`https://offers-a.herokuapp.com${offerQrCodePath}`}
        alt="image_dailog"/>

        


        
        {/* <!--Footer--> */}
        <div className="flex justify-end pt-2">
          
        </div>
        
      </div>
    </div>
  </div>
      
    </>
    
  )
}
