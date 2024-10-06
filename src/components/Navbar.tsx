import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {
  // const {getUser} = getKindeServerSession()
  // const user = await getUser()
  // const isAdmin = user?.email === process.env.ADMIN_EMAIL
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            Drone<span className='text-green-600'>DASH</span>
          </Link>

          <div className='h-full flex items-center space-x-4'>

            
            <Link
              href='/orders'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })}>
              Orders
            </Link>
            =

            <Link
              href='/profile'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })}>
              Profile
            </Link>

            <div className='h-8 w-px bg-zinc-200 hidden sm:block'></div>

            <Link
              href='/address'
              className={buttonVariants({
                size: 'sm',
                className: 'hidden sm:flex items-center gap-1'
              })}>
              Create order
              <ArrowRight className='ml'></ArrowRight>
            </Link>

          </div>
        </div>

      </MaxWidthWrapper>

    </nav>
  )
}

export default Navbar