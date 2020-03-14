import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'


function SideMenu (props) {
  const { pathname } = props.location
  const { setSideMenuButtons, sideMenuOptions } = useContext(GlobalContext)

  useEffect(() => {
    setSideMenuButtons(pathname)
  }, [])


  let sideMenuJSX = sideMenuOptions.map((menu, i)=> {
    return (
      <div key={i}>
        <Link className="nav-link  text-white text-center cursor-pointer w-full " 
                  to={menu.rName} onClick={() => setSideMenuButtons(menu.rName)}>
          <div className={`py-4 px-6 ${menu.isSelected ? 'side-menu-selected' : ''} side-navbutton`}>
            {menu.name}
          </div>
        </Link>
      </div>
    )
  })
  
  return (
      <section className="md:w-56 md:h-screen side-top-padding md:visible hidden md:block shadow-2xl side-bar-bg">
        {sideMenuJSX}
      </section>
  )
}

export default withRouter(SideMenu);

