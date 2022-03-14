import React from 'react'
import image from '../food2.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={image} className="d-block mx-lg-auto img-fluid" alt="food1" width="700" height="500" loading="lazy" />
                    </div>   
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">About Us</h1>
                        <p className="lead">Why this smart nutrition important? Our gut is our second brain. There are many conditions that have no cure, other than eating healthy food. The human body needs a ton of vitamins, especially since many bodies drain them. A lot of people are not aware of these issues and are always sick. The goal of this company is to teach about different conditions that humans have and can be manage with vitamins, supplements, and food.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About