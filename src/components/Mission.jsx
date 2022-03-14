import React from 'react'
import image from '../food1.jpg'

const Mission = () => {
  return (
    <section id='mission'>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img src={image} className="d-block mx-lg-auto img-fluid" alt="food1" width="700" height="500" loading="lazy" />
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">Our Mission</h1>
					<p className="lead">Our purpose is to identify what foods we want to pay attention, with the ultimate goal of helping the community to feel good and to be healthier, happier, and more energetic.</p>
				</div>
            </div>
        </div>    
    </section>
  )
}

export default Mission