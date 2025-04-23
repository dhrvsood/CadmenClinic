import Image from 'next/image'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import { ctaToBookingServiceCategory } from '@/helpers/cta_to_booking_service_category'

const OfferCard = ({
  service,
  image,
  percentOff,
  price,
  unitText,
  priceFrom,
  serviceId,
  category
}) => {
  const handleOfferNav = () => {
    if (category) {
      ctaToBookingServiceCategory(category)
    } else if (serviceId) {
      ctaToBooking(serviceId)
    }
  }

  return (
    <div>
      <div className='flex'>
        <Image src={image} width={120} height={115} alt='' />
        <div className='flex w-full flex-col rounded-[16px] bg-dawnPink p-[20px]'>
          <div className='flex min-h-[22px] items-center justify-between gap-[16px]'>
            <h5 className='text-[20px] font-medium text-customBlack'>{service}</h5>
            {price && (
              <p className='text-[16px] font-medium text-customBlack'>{percentOff}% Off</p>
            )}
          </div>
          <div className='mt-[16px] flex justify-center rounded-full bg-white px-[12px] py-[8px]'>
            {price ? (
              <div className='flex items-center'>
                {priceFrom && (
                  <p className='mr-[8px] text-[12px] text-customBlack'>From</p>
                )}
                <p className='mr-[3px] text-[18px] font-medium text-customBlack'>
                  {price}
                </p>
                <p className='text-[12px] text-customBlack'>{unitText}</p>
              </div>
            ) : (
              <p className='text-[18px] font-medium text-customBlack'>
                {percentOff}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='rounded-[16px] bg-dawnPink p-[20px]'>
        <button
          className='w-full rounded-lg bg-white px-[12px] py-[10px] text-[18px] font-medium'
          onClick={() => handleOfferNav(serviceId)}
        >
          Claim My Offer
        </button>
      </div>
    </div>
  )
}

export default OfferCard
