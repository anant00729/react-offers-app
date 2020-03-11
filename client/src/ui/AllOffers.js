import React, {useEffect, useContext} from 'react'
import lifeImg from '../app_images/life.svg'
import {GlobalContext} from './context/GlobalState'


function _displayError(error){
  return (
    <div class="h-screen w-full flex justify-center items-center">
      <p className="w-full text-center">{error}</p>
    </div>
  )
}

function _displayMainData(allOffers, setShowDialog) {
  let tdJSX = []

  if(allOffers){
    tdJSX = allOffers.map((offer)=>{
      return (
        <tr>
          <td className="border px-4 py-2 table-img-width">
            <img 
            className="h-32"
            src="https://startbootstrap.com/assets/img/screenshots/premium/sb-admin-pro-angular.jpg" alt="offer_img"/>
          </td>
          <td className="border px-4 py-2">{offer.offerTitle}</td>
          <td className="border px-4 py-2">
            <button className="bg-transparent hover:bg-green-500 text-green-700  hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-sm" >
              Edit
            </button>
          </td>
          <td className="border px-4 py-2">
            <button className="bg-transparent hover:bg-red-500 text-red-700  hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded text-sm">
              Delete
            </button>
          </td>
          <td className="border px-4 py-2">
            <img 
             onClick={setShowDialog} 
            className="h-32"
            src={`http://localhost:8087/${offer.offerQrCodePath}`} alt="offer_img"/>
          </td>
        </tr>
      )
    })
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
                  <p className="text-4xl ml-2 text-white">All Offers</p>
              </div>
              <div>
                  <p className="text-alfa">List of all offers</p>
              </div>
          </div>        
          
          {/* <!-- Dashboard Content --> */}
          <section className="flex app-primary-font text-lg px-5 pb-5 bg-white">

            <table className="table-auto rounded -mt-32 bg-white">
              <thead className="bg-gray-200 border-gray-200 border rounded shadow">
                <tr>
                  <td className="px-4 py-2">Image</td>
                  <td className="px-4 py-2">Title</td>
                  <td className="px-4 py-2">Edit</td>
                  <td className="px-4 py-2">Delete</td>
                  <td className="px-4 py-2">QR Code</td>
                </tr>
              </thead>
              <tbody>
                {tdJSX}
              </tbody>
            </table>
          </section>
  </div>
  )
}


export const AllOffers = () => {

  const {getAllOffers, allOffers, errorMessage, setShowDialog} = useContext(GlobalContext)

  useEffect(()=> {
    getAllOffers()
  }, [])

  if(errorMessage.length != 0){
    return _displayError(errorMessage)
  }else {
    return _displayMainData(allOffers, setShowDialog)
  }
  
}
