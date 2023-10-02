import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import Router from 'next/router';
type props={
  id:string;
  image:string;
  title:string;
}
const  ProductCard= ({id,image,title}:props) => {
  return (
    <div className='flexCenter flex-col rounded-2xl drop-shadow-card'>
      <Link href={`/products/${id}`} className='flexCenter group relative w-full h-full'>
        <Image 
          src={image}
          width={350}
          height={440}
          className='w-full h-full object-cover '  
          alt="Project image ${}"
        />
        <div className='hidden group-hover:flex profile_card-title'>
          {title}
        </div>
      </Link>

    </div>
    
    
  )
}

export default ProductCard