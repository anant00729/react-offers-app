import React, { useState, useContext } from 'react'
import lifeImg from '../../app_images/life.svg'
import {GlobalContext} from '../context/GlobalState'
import {MSG_OFFER_ADDED, R_ALL_OFFERS} from '../context/AAApConstants'

export const AddOffer = (props) => {

  const [offerTitle, setOfferTitle] = useState('')
  const [offerDescription, setOfferDescription] = useState('')
  const [offerOfferId, setOfferOfferId] = useState('')
  

  const {addOffer, setShowToast, toastMessage, setSideMenuButtons} = useContext(GlobalContext)


  const onSubmit = e => {
    e.preventDefault()

    if(offerTitle.length === 0){
      setShowToast('Please enter Offer Title')

    }else if(offerDescription.length === 0){
      setShowToast('Please enter Offer Description')
    }else {
      const offer = {
        offerTitle,
        description : offerDescription,
        mainOfferID : offerOfferId
      }
      addOffer(offer)
    }



    
  } 


  if(toastMessage === MSG_OFFER_ADDED){
    setShowToast(MSG_OFFER_ADDED)
    setSideMenuButtons(R_ALL_OFFERS)
    props.history.push(R_ALL_OFFERS)
  }
  
  return (
    <div>
        {/* <!-- Dashboard Header --> */}
            <div className="body-main-bar w-full px-8 py-8">
                <div className="flex items-center">
                    <img 
                    className="w-10 h-10 heart-beat"
                    src={lifeImg} 
                    alt="heart_beat"/>
                    <p className="text-4xl ml-2 text-white">Add Offer</p>
                </div>
                <div>
                    <p className="text-alfa">Add a new offer for the mocking</p>
                </div>
            </div>        
            
            {/* <!-- Dashboard Content --> */}
            <section className="flex app-primary-font text-lg px-5 pb-5 bg-white">
              
              <section className="w-full flex app-primary-font text-bold text-lg px-5 pb-5 h-screen">
                <div className="w-full pr-3 lg:w-1/2">
                    <div className="bg-white rounded shadow-lg overflow-hidden -mt-32">
                        <p className="p-4 bg-gray-200 w-full">Area Chart Example</p>
                        <form
                          onSubmit={onSubmit}
                         className="p-4">
                           <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                              Offer ID
                            </label>
                            <input 
                            value={offerOfferId}
                            onChange={(e)=> setOfferOfferId(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Offer ID"/>
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                              Title
                            </label>
                            <input 
                            value={offerTitle}
                            onChange={(e)=> setOfferTitle(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Title"/>
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                              Description
                            </label>
                            <input 
                            value={offerDescription}
                            onChange={(e)=> setOfferDescription(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Description"/>
                          </div>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base" type="submit">
                            Submit
                          </button>

                        </form>
                    </div>
                </div>
              </section>
                
            </section>


            
    </div>
  )
}
