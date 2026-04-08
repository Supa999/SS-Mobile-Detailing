import { TextAnimate } from "@/components/ui/text-animate"
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className='min-h-screen py-20 px-8 bg-black flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center gap-5 bg-linear-to-br from-red-300 to-primary-color rounded-xl p-4'>
        <h2 className='text-4xl font-bold tracking-tighter text-center'>Ready to restore your car to its full potential?</h2>
        <p className='text-center font-bold'>Reach out to me or book an appointment online!</p>
        <Link href='' className='bg-white text-primary-color p-2 text-xl font-bold tracking-tighter w-full text-center rounded-lg'>Book Appointment</Link>
        <Link href='' className='bg-white text-primary-color p-2 text-xl font-bold tracking-tighter w-full text-center rounded-lg'>Reach out</Link>
      </div>
    </section>
  )
}
