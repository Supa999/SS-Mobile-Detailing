import StarSVG  from '../svg/StarSVG'

export default function StarRating({rating}: {rating: number}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <StarSVG
          key={starIndex}
          // The magic happens here:
          className={`size-6 ${starIndex <= rating ? 'text-primary-color': 'text-stone-700'}`}
        />
      ))}
    </div>
  )
}
