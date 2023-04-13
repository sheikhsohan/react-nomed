import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClasses = isSticky ? 'navbar navbar-expand-lg bg-light shadow-lg fixed-top' : 'navbar navbar-expand-lg bg-light shadow-lg'

  return (
    <div>
      <nav className={navbarClasses}>
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <strong>Nomad Force</strong>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#hero">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">Our Studio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#news">News & Events</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
