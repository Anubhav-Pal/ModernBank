import React from 'react'
import { feedback } from '../constants'
import styles, { layout } from '../styles'
import FeedbackCard from './FeedbackCard'

const Testimonial = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* gradient */}
    {/* <div  className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'></div> */}



    <div className='flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] gap-[80px] mt-7'>
      <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h1>
      <div className='w-full md:mt-0 '>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center relative  z-[1] mb-10">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)


export default Testimonial