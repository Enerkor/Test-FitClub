import React from 'react'
import './Reasons.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="Photo-traning" />
            <img src={image2} alt="Photo-traning" />
            <img src={image3} alt="Photo-traning" />
            <img src={image4} alt="Photo-traning" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <p className='partners'>OUR PARTNERS</p>
            <div className="company">
                <img src={nb} alt="NewBalance" />
                <img src={adidas} alt="Adidas" />
                <img src={nike} alt="Nike" />
            </div>
        </div>
    </div>
  )
}

export default Reasons