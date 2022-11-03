import React from 'react'
import './showroom.css'

const Showroom = () => {
  return (
    <div className='showroom'>
        <div className='container showroom-div'>
            <div className='showroom-divdiv'>
                <h3>GET UP TO 40% OFF</h3>
                <h2>Don't Miss This Opportunity</h2>
                <p className='mt-4'>Online shopping free home delivery over $100</p>

                <button>SHOP NOW</button>
            </div>
        </div>
        <img src="/img/showroom.png" alt='showroom' className='showroom-img me-4 d-sm-none d-md-block d-none d-sm-block'/>
    </div>
  )
}

export default Showroom