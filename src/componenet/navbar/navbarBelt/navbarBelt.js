import React from 'react'
import './navbarBelt.css'
import logo from '../../../Assests/logo.jpg'
import India from '../../../Assests/India.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>
      <div className='leftNavBelt'>
        <div className='leftNavBeltLogo'>
          <img className='amazonLogoNavbar' src={logo} alt='amazonLogo' />
          <span className='navbar_inLogo'>.in</span>
        </div>
        <div className='navbarBeltLocation'> 
          <div className='navbarBeltLocationImage'>
            <LocationOnIcon className='navbarBeltLocationImgIcon' sx={{ fontSize : "22px" }}/>
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationOnTop'>Delivering to pune 411032</div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>

      </div>
      <div className='navbarBeltSearchBox'>
         <div className='navbarBeltSearchDiv'>
          <div className='navbarBeltSearchBoxAll'>
            <div className='navbarBeltSearchAllText'>All</div>
            <ArrowDropDownIcon sx={{fontSize: "20px"}} />
          </div>
          <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in'></input>
          
          <div className='searchIconNavbarBelt'>
            <SearchIcon  sx={{fontSize: "26px"}} className='searchIconNavbarBeltIcon'/>
          </div>
        
         </div>
      </div>
      <div className='rigtSideNavbarBelt'>
        <div className='indianFlagCode'>
          <img src={India} className='indianFlag' />
          <div className='indiaCodeNavbarBelt'>
            EN 
            <ArrowDropDownIcon sx={{fontSize:16,marginTop:1,marginLeft : -0.4}} 
            className='indiaCodeNavbarBeltDrp' 
            />
          </div>
          

        </div>
        {/* <div className='helloSignInNavbarBelt'>
          <div className='helloTopNavbarBelt'>Hello , User</div>
          <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
        </div>


        <div className='helloSignInNavbarBelt'>
          <div className='helloTopNavbarBelt'>Returns</div>
          <div className='indiaCodeNavbarBelt'> & Orders</div>
        </div> */}
      </div>
    </div>
    
  )
}

export default NavbarBelt
