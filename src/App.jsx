import React from 'react'
import styles from './styles.js'

// Importing the react components
import Billing from './components/Billing.jsx'
import Business from './components/Business.jsx'
import Button from './components/Button.jsx'
import CardDeal from './components/CardDeal.jsx'
import Clients from './components/Clients.jsx'
import CTA from './components/CTA.jsx'
import FeedbackCard from './components/FeedbackCard.jsx'
import Footer from './components/Footer.jsx'
import GetStarted from './components/GetStarted.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'


const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Stats Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App