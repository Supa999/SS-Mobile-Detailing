import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate'

type ReviewType = {
  review: string
  client: string
  rating: number
  car: string
}

const reviews: ReviewType[] = [
  {review: '', client: '', rating: 0, car: ''},
  {review: '', client: '', rating: 0, car: ''},
  {review: '', client: '', rating: 0, car: ''}
]

function renderReviews() {
  return reviews.map((reviewItem) => {
    return(
      <div key={reviewItem.client}>
        
      </div>
    )
  })
}

export default function Testimonials() {
  return (
    <section className='min-h-screen bg-bg-color py-20 px-8 space-y-16'>
          <div className="space-y-2">
            <TextAnimate animation='slideRight' as='p' duration={0.8} className="text-primary-color font-thin text-lg tracking-widest uppercase">
              The Proof
            </TextAnimate>
            <TextAnimate animation='slideRight' as='h2'duration={0.8}  className="text-5xl text-white font-extrabold tracking-tighter">
              Verified Shine
            </TextAnimate>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            
          </div>
        </section>
  )
}
