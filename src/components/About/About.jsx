import React from 'react'

import imagesOne from '../../assets/images/about/imagesOne.jpg';
import imagesTwo from '../../assets/images/about/imagesTwo.jpg';
import imagesThree from '../../assets/images/about/imagesThree.jpg';
import imagesFour from '../../assets/images/about/imagesFour.jpg';
import imagesFive from '../../assets/images/about/ImagesFive.jpg';
import imagesSix from '../../assets/images/about/imagesSix.jpg';

const About = () => {
  return (
	<div>
		<section className="section-padding pb-0" id="about">
                <div className="container mb-5 pb-lg-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-3" data-aos="fade-up">Let us create...</h2>
                        </div>

                        <div className="col-lg-6 col-12 mt-3 mb-lg-5">
      <p className="me-4" data-aos="fade-up" data-aos-delay="300">
        You may contribute{' '}
        <a rel="noopener noreferrer" href="http://paypal.me/templatemo" target="_blank">
          a small amount
        </a>{' '}
        via PayPal if{' '}
        <a
          rel="noopener noreferrer"
          href="https://templatemo.com/tm-567-nomad-force"
          target="_parent"
        >
          Nomad Force Template
        </a>{' '}
        is useful for you. This will absolutely help us to keep creating better CSS templates for you. We provide you 100% free templates on TemplateMo website. Images are provided by FreePik and Unsplash websites.
      </p>
    </div>

                        <div className="col-lg-6 col-12 mt-lg-3 mb-lg-5">
                            <p data-aos="fade-up" data-aos-delay="500">This Bootstrap 5 layout is free to use for your business. You are allowed to edit it in any way you like. However, please do not redistribute this template ZIP file for a template download purpose on any other website such as Free CSS collections.</p>
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-12 p-0">      
                            <img src={imagesOne} className="img-fluid about-image" alt="" />
                        </div>

                        <div className="col-lg-3 col-12 bg-dark">  
                            <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
                                <h3 className="text-white mb-3" data-aos="fade-up">We’re - idealists and strategic thinkers.</h3>

                                <p className="text-secondary-white-color" data-aos="fade-up">Over six years in the video business</p>

                                <div className="mt-3 custom-links">
                                    
								<a href="#news" rel='noopener noreferrer' className="text-white custom-link" data-aos="zoom-in" data-aos-delay="100">
        Read News &amp; Events
      </a>
      <a href="#contact" rel='noopener noreferrer' className="text-white custom-link" data-aos="zoom-in" data-aos-delay="300">
        Work with Us
      </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-12 p-0">  
                            <section id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={imagesTwo} className="img-fluid team-image" alt="" />

                                        <div className="team-thumb bg-warning">
                                            <h3 className="text-white mb-0">Susane R.</h3>

                                            <p className="text-secondary-white-color mb-0">Founding Partner</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={imagesThree} className="img-fluid team-image" alt="" />

                                        <div className="team-thumb bg-primary">
                                            <h3 className="text-white mb-0">Morgan S.</h3>

                                            <p className="text-secondary-white-color mb-0">CEO & Investor</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={imagesFour} alt="" />

                                        <div className="team-thumb bg-success">
                                            <h3 className="text-white mb-0">Naomi W.</h3>

                                            <p className="text-secondary-white-color mb-0">Art Director</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={imagesFive} className="img-fluid team-image" alt="" />

                                        <div className="team-thumb bg-info">
                                            <h3 className="text-white mb-0">Robinson H.</h3>

                                            <p className="text-secondary-white-color mb-0">Sales & Marketing</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={imagesSix} className="img-fluid team-image" alt="" />

                                        <div className="team-thumb bg-danger">
                                            <h3 className="text-white mb-0">Jane M.</h3>

                                            <p className="text-secondary-white-color mb-0">Project Management</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                                      <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>

                                      <span className="visually-hidden">Next</span>
                                </button>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
	</div>
  )
}

export default About