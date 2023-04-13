import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <section className=" contact section-padding" id="contact">
        <div className="container">
          <div className="row">

            <div className="col-lg-7 col-12 mx-auto">

              <h2 className="mb-4 text-center" data-aos="fade-up">Don't be shy, write to us</h2>

              {isSubmitted ? (
                <div className='text-center'>
					<h5 className='alertMassage'>Thanks for your message! The admin will come back to you soon.</h5>
				</div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">

                  <div className="row">

                    <div className="col-lg-6 col-6">
                      <label htmlFor="name" className="form-label">Name <sup className="text-danger">*</sup></label>
                      <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />
                    </div>

                    <div className="col-lg-6 col-6">
                      <label htmlFor="email" className="form-label">Email <sup className="text-danger">*</sup></label>
                      <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                    </div>

                    <div className="col-12 my-4">
                      <label htmlFor="message" className="form-label">How can we help?</label>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Tell us about the project" required></textarea>
                    </div>

                    <div className="col-12">
                      <label htmlFor="services" className="form-label">Services<sup className="text-danger">*</sup></label>
                    </div>

                    <div className="col-lg-4 col-12">
                      <div className="form-check">
                        <input type="checkbox" id="checkbox1" name="checkbox1" className="form-check-input" />
                        <label className="form-check-label" htmlFor="checkbox1">Branding</label>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12 my-2 my-lg-0">
                      <div className="form-check">
                        <input type="checkbox" id="checkbox2" name="checkbox2" className="form-check-input" />
                        <label className="form-check-label" htmlFor="checkbox2">Digital Experiences</label>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12">
                      <div className="form-check">
                        <input type="checkbox" id="checkbox3" name="checkbox3" className="form-check-input" />
                        <label className="form-check-label" htmlFor="checkbox3">Web Development</label>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-5 col-12 mx-auto mt-5">
                    <button type="submit" className="form-control">Send Message</button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
