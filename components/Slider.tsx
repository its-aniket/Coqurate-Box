import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Slider = () => {
  return (
    <div className='p-0'>
        <Link href='/'>
            <Image
              src='/Logo.png'
              width={220}
              height={65}
              alt='Coqurate Box'
            />
          </Link>
        
    </div>
  )
}

export default Slider