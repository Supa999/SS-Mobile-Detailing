import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import Link from 'next/link'
import CheckSVG from '@/app/svg/CheckSVG'

type PackagesType = {
  title: string
  desc: string
  services: string[]
  price: number
  isMostPopular: boolean
}

const packages: PackagesType[] = [
  {title: 'Exterior Detail', desc: 'Thorough deep cleaning of your cars exterior', services: ['PH neutral soap', 'Wheel deep clean', 'Wax sealant'], price: 45, isMostPopular: true},
  {title: 'Interior Detail', desc: 'Full clean of the interior of your car to make it feel brand new', services: ['Vacuum', 'Complete Wipe Down', 'Leather and plastic protection'], price: 100, isMostPopular: false},
  {title: 'Full Detail', desc: 'Complete clean and restoration of your car.', services: ['Interior and exterior detail', 'Ceramic Sealant on Windows', 'Tire Shine'], price: 170, isMostPopular: false}
]

function renderPackages() {
  return packages.map((packageItem) => {
    return (
      <div key={packageItem.title} className='w-full bg-card-color flex flex-col items-start p-8 justify-center gap-5 rounded-lg'>
        <h2 className='text-white font-bold text-3xl tracking-[-2px]'>{packageItem.title}</h2>
        <p className='text-white/70'>{packageItem.desc}</p>
        <div className='space-y-3'>
          {packageItem.services.map((service) => {
            return (
              <div key={service} className='text-white tracking-wide font-thin flex items-center gap-2'>
                <CheckSVG className='size-5 text-primary-color inline' />
                {service}
              </div>
            )
          })}
        </div>
        <div className='flex items-center justify-between w-full text-primary-color mt-5'>
          <p className='text-3xl font-bold tracking-widest'>${packageItem.price}+</p>
          <Link href='' className='tracking-widest font-thin'>Details &gt;</Link>
        </div>
      </div>
    )
  })
}

export default function Packages() {
  return (
    <section className='min-h-screen bg-bg-color pt-20 px-8 space-y-16'>
      <div className="space-y-2">
        <TextAnimate animation='slideRight' as='p' className="text-primary-color font-thin text-xl tracking-widest">
          The Lab
        </TextAnimate>
        <TextAnimate animation='slideRight' as='h2' className="text-5xl text-white font-extrabold tracking-tight">
          Packages
        </TextAnimate>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {renderPackages()}
      </div>
    </section>
  )
}
