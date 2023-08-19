import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks, Announcement } from '@/constants'
import AuthProviders from './AuthProviders'
import {getCurrentUser} from '@/lib/session'
import ProfileMenu from './ProfileMenu'


const Navbar = async () => {
    const session = await getCurrentUser();
    return (
        <div>
            <div className='grid place-content-center bg-[#eeddb1] h-10'>
                <div className='item-center text-center'>
                    {Announcement.map((key) => (
                        <div>
                            {key.text}
                        </div>
                    ))}
                </div>
            </div>
            <nav className='grid navbar'>
                <div className='grid grid-cols-3 content-center '>
                    <div className='flex self-center gap-2' >
                        <Link className='lg:hidden' href='/'>
                            <Image
                                src='/menu.png'
                                width={25}
                                height={25}
                                alt='Coqurate Box'
                            />
                        </Link>
                        <Link className="" href='/'>
                            <Image
                                src='/search-interface-symbol.png'
                                width={25}
                                height={25}
                                alt='Coqurate Box'
                            />
                        </Link>
                    </div>
                    <div className='justify-self-center gap-10' >
                        <Link href='/'>
                            <Image
                                src='/Logo.png'
                                width={150}
                                height={63}
                                alt='Coqurate Box'
                            />
                        </Link>
                    </div>
                    <div className='flex justify-self-end pr-50px self-center gap-10' >
                        {
                            session?.user ? (
                                <>
                                    <ProfileMenu session={session} />    
                                </>
                            ) : (
                                <>
                                <AuthProviders />
                                </>
                            )
                        }
                    </div>
                </div>
                <div className='justify-self-center pt-2 h-50px'>
                    <ul className='lg:flex hidden text-small gap-7'>
                        {NavLinks.map((link) => (
                            <Link href={link.href} key={link.key}>
                                <div className='nav-title group transition duration-300 '>
                                    {link.text}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#000000]"></span>

                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
