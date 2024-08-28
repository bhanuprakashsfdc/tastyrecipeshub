import React from 'react'
import waveShapeImage from '/assets/images/shapes/wave-shape1.png';

const Divider = () => {
  return (
    <div className="section-devider d-flex">
       <img className="w-100" src={waveShapeImage} alt="Wave Shape" />
    </div>
  )
}

export default Divider
