import React from 'react'

import imagesOne from '../../assets/images/news/imagesOne.jpg'
import imagesTwo from '../../assets/images/news/imagesTwo.jpeg'
import imagesThree from '../../assets/images/news/imagesThree.jpeg'

const News = () => {
  return (
	<div>
		<section className="news section-padding" id="news">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center" data-aos="fade-up">News &amp; Events</h2>
          </div>

          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="news-thumb" data-aos="fade-up">
              <a href="news-detail.html" className="news-image-hover news-image-hover-warning">
                <img src={imagesOne} className="img-fluid large-news-image news-image" alt="" />
              </a>

              <div className="news-category bg-warning text-white">News</div>

              <div className="news-text-info">
                <h5 className="news-title">
                  <a href="news-detail.html" className="news-title-link">The rise of the gig economy spells the end for these workers the old system</a>
                </h5>

                <span className="text-muted">22 hours ago</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
              <div className="news-top w-100">

                <a href="news-detail.html" className="news-image-hover news-image-hover-primary">
                  <img src={imagesTwo} className="img-fluid news-image" alt="" />
                </a>

                <div className="news-category bg-primary text-white">Events</div>
              </div>

              <div className="news-bottom w-100">
                <div className="news-text-info">
                  <h5 className="news-title">
                    <a href="news-detail.html" className="news-title-link">Job Opportunities: Digital, Marketing</a>
                  </h5>

                  <div className="d-flex flex-wrap">
                    <span className="text-muted me-2">
                      <i className="bi-geo-alt-fill me-1 mb-2 mb-lg-0"></i>
                      Alaska,
                    </span>

                    <span className="text-muted">August 6, 2021</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
              <div className="news-top w-100" data-aos="fade-up">

                <a href="news-detail.html" className="news-image-hover news-image-hover-success">
                  <img src={imagesThree} className="img-fluid news-image" alt="" />
                </a>

                <div className="news-category bg-success text-white">News</div>
              </div>

              <div className="news-bottom w-100">
                <div className="news-text-info">
                  <h5 className="news-title">
                    <a href="news-detail.html" className="news-title-link">What happened to new viral video?</a>
                  </h5>

                  <span className="text-muted">6 days ago</span>
                </div>
              </div>
            </div>
			</div>
			</div>
			</div>
			</section>
	</div>
  )
}

export default News