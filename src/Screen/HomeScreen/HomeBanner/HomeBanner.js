import React from 'react'
import './HomeBanner.css'

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
      <img className='homeBannerImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg"  />
      <div className='greyBackgroundHomeBanner'></div>

      <div className='homeBannerItemDiv'>
        <div className='homeBannerItemDivCardTitle'>Title</div>
      </div>
    </div>
  )
}

export default HomeBanner
