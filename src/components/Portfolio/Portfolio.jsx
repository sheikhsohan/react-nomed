import React from 'react'

import imagesOne from '../../assets/images/portfolio/imagesOne.jpeg'
import imagesTwo from '../../assets/images/portfolio/imagesTwo.jpeg'
import imagesThree from '../../assets/images/portfolio/imagesThree.jpeg'
import imagesFour from '../../assets/images/portfolio/imagesFour.jpeg'

const Portfolio = () => {
  return (
	<div>
		<section className="section-padding" id="portfolio">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="mb-5 text-center" data-aos="fade-up">Portfolio</h2>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mb-5" data-aos="fade-up">
                                <a href="images/portfolio/visuals-Y4qzW3AsvqI-unsplash.jpeg" className="image-popup">
                                    <img src={imagesOne} className="img-fluid portfolio-image" alt="" />
                                </a>

                                <div className="portfolio-info">                     
                                    <h4 className="portfolio-title mb-0">Effortless</h4>

                                    <p className="text-danger">Branding</p>
                                </div>
                            </div> 

                            <div className="portfolio-thumb" data-aos="fade-up">
                                <a href="images/portfolio/severin-candrian-nn3uIZqmUtE-unsplash.jpeg" className="image-popup">
                                    <img src={imagesTwo} className="img-fluid portfolio-image" alt="" />
                                </a>

                                <div className="portfolio-info">                     
                                    <h4 className="portfolio-title mb-0">Health technology</h4>

                                    <p className="text-success">Art Direction</p>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="portfolio-thumb mt-5 mt-lg-0 mb-5" data-aos="fade-up">
                                <a href="images/portfolio/tyler-nix-Y1drF0Y3Oe0-unsplash.jpeg" className="image-popup">
                                    <img src={imagesThree} className="img-fluid portfolio-image" alt="" />
                                </a>
 
                                <div className="portfolio-info">                     
                                    <h4 className="portfolio-title mb-0">Maki</h4>

                                    <p className="text-warning">Website</p>
                                </div>
                            </div> 

                            <div className="portfolio-thumb" data-aos="fade-up">
                                <a href="images/portfolio/thought-catalog-gv-T-OjLe4c-unsplash.jpeg" className="image-popup">
                                    <img src={imagesFour} className="img-fluid portfolio-image" alt="" />
                                </a>

                                <div className="portfolio-info">                     
                                    <h4 className="portfolio-title mb-0">The gig economy</h4>

                                    <p className="text-info">Graphic</p>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </section>
	</div>
  )
}

export default Portfolio