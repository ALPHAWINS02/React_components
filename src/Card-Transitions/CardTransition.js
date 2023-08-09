// CardTransition.js 
import React from 'react'
import './index.css'

export default function CardTransition() {
  return (
    <div><div className="page-wrapper">
    <div className="content-wrapper">
      <input type="radio" name="toggle" id="toggle1" />
      <input type="radio" name="toggle" id="toggle2" />
      <input type="radio" name="toggle" id="toggle3" />
      <section id="section-1">
        <div className="image-container">
          <img src="https://images.pexels.com/photos/13234166/pexels-photo-13234166.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="info-container">
          <h1>Hello.</h1>
          <label htmlFor="toggle2">Click Me.</label>
        </div>
      </section>
      <section id="section-2">
        <div className="image-container">
          <img src="https://images.pexels.com/photos/11897866/pexels-photo-11897866.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="info-container">
          <h1>Hello Again.</h1>
          <label htmlFor="toggle3">Click Me.</label>
        </div>
      </section>
    </div>
  </div>
  </div>
  )
}
