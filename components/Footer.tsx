import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'
type ColumnProps = {
  title: string;
  links: Array<string>
}
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className='footer_coloumn'>
    <div className='flex footer-title  lg:footer-title tracking-wide'>{title}</div>
    <ul className='hidden focus:visible footer-links lg:flex flex-col gap-2 pt-7 leading-normal footer-links'>
      {links.map((link) => <Link href='/' key={link}>{link}</Link>)}
    </ul>
  </div>
)
const Footer = () => {
  return (
    <div className='bg-[#eeddb1]'>
      {/* AT XL SCREEN SIZE  */}
      <footer className='lg:grid grid-cols-5'>
        <div className='flex justify-center lg:justify-self-center pt-10 gap-10' >
          <Link href='/'>
            <Image
              src='/Logo.png'
              width={220}
              height={65}
              alt='Coqurate Box'
            />
            <div className='logounder text-3xl pt-5'>
              {/* get it now! */}
            </div>
          </Link>
        </div>

        <div className='flex justify-center'>
          <div className='flex justify-center text-center lg:flex flex-wrap justify-items-center gap-12 pt-5'>
            <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
          </div>
          <div className='px-5 pt-5 lg:hidden'>
            <Image
              src='/down-chevron.png'
              width={15}
              height={15}
              alt='down arrow by freepik'
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex justify-center text-center lg:flex flex-wrap justify-items-center gap-12 pt-5'>
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
          </div>
          <div className='px-5 pt-5 lg:hidden'>
            <Image
              src='/down-chevron.png'
              width={15}
              height={15}
              alt='down arrow by freepik'
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex justify-center text-center lg:flex flex-wrap justify-items-center gap-12 pt-5'>
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>
          <div className='px-5 pt-5 lg:hidden'>
            <Image
              src='/down-chevron.png'
              width={15}
              height={15}
              alt='down arrow by freepik'
            />
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <div className='flex justify-center text-center lg:flex flex-wrap justify-items-center gap-12 pt-5'>
              <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
            </div>
            <div className='px-5 pt-5 lg:hidden'>
              <Image
                src='/down-chevron.png'
                width={15}
                height={15}
                alt='down arrow by freepik'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <div className=' flex items-center Form--field footer-input-container'>
                <input placeholder='Enter your email' className='bg-[#eeddb1] footer-email-input ' type='email' id='email' />
                <button className='px-2'>
                  <Image
                    src='/mail.png'
                    width={35}
                    height={25}
                    alt='Coqurate Box'
                  />
                </button>
              </div>
              <div className='flex items-center lg:flex icon-container gap-2 m-5'>
                <Link href="/">
                  <Image
                    src='/instagram.png'
                    width={35}
                    height={35}
                    alt='instagram logo'
                  />
                </Link>
                <Link href="/">
                  <Image
                    src='/whatsapp.png'
                    width={35}
                    height={35}
                    alt='instagram logo'
                  />
                </Link>
                <Link href="/">
                  <Image
                    src='/linkedin.png'
                    width={35}
                    height={35}
                    alt='instagram logo'
                  />
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className='flex justify-center pb-2'>
          <div className='flex justify-center text-center lg:flex flex-wrap justify-items-center gap-12 pt-5'>
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
          </div>
          <div className='px-5 pt-5 lg:hidden'>
            <Image
              src='/down-chevron.png'
              width={15}
              height={15}
              alt='down arrow by freepik'
            />
          </div>
        </div>
        <div></div><div></div>
        <div></div>
        <div></div>
        <div></div><div></div>
        <div className='grid content-end pb-5 text-xs text-center' >© Copyrights 2023 - 2024.Coqurate Box.All Rights Reserved.</div>
      </footer>
    </div>
  )
}

export default Footer