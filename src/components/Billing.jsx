import React from 'react'
import { bill, apple, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => (
  <section id='product' className={`${layout.sectionReverse} items-center `}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className={`w-[80%]  relative z-[5]`} />
      {/* gradients */}
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' />billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-[5]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="appstore" className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain' />
        <img src={google} alt="playstore" className='w-[128px] h-[42px]  cursor-pointer object-contain' />
      </div>
    </div>

  </section>
)


export default Billing