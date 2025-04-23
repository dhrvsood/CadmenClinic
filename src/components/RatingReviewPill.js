import Image from 'next/image'

const RatingReviewPill = ({ rating, reviewCount }) => {
  return (
    <div className='flex items-center space-x-4 border border-[#EAECEE] rounded-full py-[4px] pr-[16px] pl-[4px]'>
      <div className='flex items-center gap-[8px] border border-quicksand-dark rounded-full px-[12px] py-[6px] bg-wildSand'>
        <Image src='/graphics/5-stars.svg' width={82} height={12} alt='5 stars' />
        <p className='text-gold-base'><b>4.9</b>/5.0</p>
      </div>
      <div className='flex items-center gap-[10px]'>
        <Image src='/graphics/google-icon.svg' width={24} height={24} alt='Google icon' />
        <p className='font-semibold'>200+ reviews</p>
      </div>
    </div>
  )
}

export default RatingReviewPill
