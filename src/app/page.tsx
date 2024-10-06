import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
              {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              <img src='/icon.png' className='w-full' />
            </div>
            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
              The Next Generation{' '}
              <span className='bg-green-600 px-2 text-white'>Eco-Conscious
              </span>{' '}
              Delivery Solution
            </h1>
            <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              Capture your favorite memories with your own,{' '}
              <span className='font-semibold'>one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your
              phone case.
            </p>

            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
              <div className='space-y-2'>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  Fast Speed
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  Safe Security
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  Cheap Price
                </li>
              </div>
            </ul>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>

            <Link href='/case/startcase'>
                  <Button className="text-2xl font-semibold text-gray-100 py-6 px-5">Get Start Now!</Button>
                </Link>

              <div className='flex flex-col justify-between items-center sm:items-start pt-2'>
                <div className='flex gap-0.5'>
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                </div>

                <p>
                  with <span className='font-semibold'>2,000</span> customers and companies
                </p>

                
              </div>
              
            </div>
            <img src='/company.png' className='pt-32' />
          </div>
        </div>

        <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
          <div className='relative md:max-w-xl'>
            <div style={{ width: '60vw', height: '50vh', display: 'flex', flexDirection: 'column' }}>
              <Spline scene="https://prod.spline.design/LwDgJASg9bM3rCA6/scene.splinecode" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
