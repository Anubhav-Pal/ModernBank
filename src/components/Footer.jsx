import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full flex-1`}>
      <div className='flex flex-1 flex-col justify-start mr-10'>
        <img src={logo} alt="woobank" className='w-[266px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className='felx-[1.5] w-full flex flex-wrap flex-row justify-between md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4  min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mt-3'>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


  </section>
)


export default Footer