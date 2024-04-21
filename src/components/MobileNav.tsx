import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { navlinks } from './const';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
  
const MobileNav = () => {
    const pathname= usePathname();
  return (
    <div>
        <Sheet>
  <SheetTrigger>
  <GiHamburgerMenu className='text-white text-3xl ' />
  </SheetTrigger>
  <SheetContent side="right" className='bg-black border-none '>
    <Link 
    href="/" className=' items-center w-full  flex justify-center my-[2vh] gap-2'>
    <Image
    src="/logo.webp"
    width={32}
    height={32}
    alt='logo' />
    <p className=" text-[32px] font-extrabold text-white items-baseline">
        HULU
    </p>
    </Link>
    <div className="mt-10">
        <SheetClose asChild>

        
  <ul className='flex flex-col gap-4 text-white text-md  items-center'>
      {
        navlinks.map((item)=>{
          const isActive = pathname == item || pathname.startsWith(`${item}/`);
          return (
            <SheetClose asChild key={item}>
          <Link href={item} className={cn(`flex gap-4 items-center p-4 rounded-lg  w-full justify-center hover:bg-blue-400  `,{'border-red-800':isActive})} >
          <li className={cn('md:text-xl md:px-3 text-md hover:text-blue-500 active:border-b font-semibold',{"border-b":isActive})}>{item}</li>
          </Link>
          </SheetClose>
          )
      }
        )
      }
          </ul>
          </SheetClose>
    </div>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav
