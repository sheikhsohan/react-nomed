import React from 'react'

import bgVideo from "../../assets/video/814dc43e870597176cad645798825c03.mp4"

const Home = () => {
  return (
	<div>
		<section className="hero" id="hero">
                <div className="heroText">
                    <h1 className="text-white mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="800">
                        Nomad Force
                    </h1>

                    <p className="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
                        create a great video for your <strong className="custom-underline">website</strong>
                    </p>
                </div>

                <div className="videoWrapper">
                    <video autoPlay loop muted className="custom-video" poster="videos/792bd98f3e617786c850493560e11c45.jpg">
                        <source src={bgVideo} type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="overlay"></div>
            </section>
	</div>
  )
}

export default Home