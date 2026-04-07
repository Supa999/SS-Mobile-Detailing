import ArrowRight from '../svg/ArrowRight'


export default function CTAButtons() {
  
  return (
    <section className='flex flex-col items-center justify0center gap-4 w-full'>
      <button className='bg-red-400 text-2xl p-3 font-bold tracking-widest rounded-lg w-full flex items-center justify-center gap-2 shadow-[0_0_40px_5px_#FF0000]'>
        Secure Your Slot
        <ArrowRight className='size-6' />
        </button>
      <button className='bg-neutral-900 text-white text-2xl p-3 font-bold tracking-widest rounded-lg w-full'>View Packages</button>
    </section>
  )
}
