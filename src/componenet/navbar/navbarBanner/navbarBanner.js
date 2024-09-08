import React from 'react'
import './navbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
const NavbarBanner = () => {
  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptions'>
        <div className='OptionsNavbarBanner'>
          <MenuIcon sx={{fontSize : "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Fresh</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Amazon miniTV</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Sell</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Best Seller</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Today's Deal</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Mobiles</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Customer Services</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Electronics</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Fashion</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>New Releases</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Home&Kichen</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Computers</div>
        </div>

        <div className='OptionsNavbarBanner'>
         <div className='allOptionsNavbarBanner'>Amazon Prime</div>
        </div>

      </div>
      
    </div>
  )
}

export default NavbarBanner
