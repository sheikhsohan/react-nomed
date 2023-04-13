import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import FloatingButton from './custom/FloatingTop';
import Footer from './components/Footer/Footer';
import PersonalWebsite from './custom/PersonalWebsite';


const App = () => {
	AOS.init();
  return (
	<div>
		<Home />
		<Navbar />
		<About />
		<Portfolio />
		<News />
		<Contact />
		<Footer />
		<FloatingButton />
		<PersonalWebsite />
	</div>
  )
}

export default App
