"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { navlinks } from '../const'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Sheet } from '../ui/sheet'
import MobileNav from '../MobileNav'
import { connectToDatabase } from '@/lib/database'

const Header = () => {
  const pathname = usePathname();
  const mobile = true;
  // const mobile=window.innerWidth < 760 ? true : false;


  // const handleSize =()=>{
  //   if(window.innerWidth < 760)
  //     setMobile(true);
  //   else{
  //     setMobile(false);
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('resize',handleSize);
  //   return ()=>{
  //     window.removeEventListener('resize',handleSize);
  //   }
  // },[])
 
  return (
   <>
    <header className='w-full border-b border-gray-100 px-6 md:px-12 md:py-4 '>
      <div className=' flex-center justify-between'>
        <Link href='/'>
          <Image 
          width={32}
          height={32}
          src="/logo.webp"
          alt="Home"
          />
        </Link>

      {/* navitens */}
        <div className="">
          <ul className='flex gap-4 text-white text-md  items-center'>
      { !mobile &&
        navlinks.map((item)=>{
          const isActive = pathname == item || pathname.startsWith(`${item}/`);
          return (
          <Link href={item} className={cn(` `,{'border-red-800':isActive})} >
          <li className={cn('md:text-xl md:px-3 text-md hover:text-blue-500 active:border-b',{"border-b":isActive})}>{item}</li>
          </Link>
          )
      }
        )
      }
          </ul>
        </div>

      {/* sing in sinn out */}
      <div className='flex gap-2 '>
      <SignedIn >
          <UserButton  afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
      <Button className='bg-red-600'>
        <Link href='/sign-in'>
        Login
        </Link>
      </Button>
      </SignedOut>{
        mobile &&
      <MobileNav/>
      }
      </div>

      </div>

    </header>
   
   </>
  )
}

export default Header
