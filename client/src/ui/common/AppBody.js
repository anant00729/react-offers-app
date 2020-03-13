import React from 'react'
import {AddOffer} from '../add_offer/AddOffer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AllOffers } from '../all_offers/AllOffers'
import SideMenu from '../common/SideMenu'
import {withRouter} from 'react-router-dom'
import {R_HOME , R_ADD_OFFER , R_ALL_OFFERS} from '../context/AAApConstants'



function AppBody (props) {

  

  return (
    <div>
    <section className="main-body flex">
        <SideMenu/>
        <section className="main-body bg-gray-200 w-full h-screen flex-shrink overflow-auto pt-14">
            <Route exact path={R_ALL_OFFERS} component={AllOffers}/>
            <Route exact path={R_ADD_OFFER} component={AddOffer}/>
        </section>
    </section>
    </div>
  )
}


export default withRouter(AppBody);