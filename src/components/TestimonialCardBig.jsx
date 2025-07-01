import Image from 'next/image'

const TestimonialCardBig = ({ quote, imageUrl }) => {
  return (
    <div className='m-auto rounded-[24px] bg-white p-[20px] sm:p-[32px] max-w-[900px] w-full'>
      <div className='flex flex-col md:flex-row items-center gap-[24px] md:gap-[48px]'>
        
        {/* Left: Text & Google Icon */}
        <div className='flex-1 flex flex-col gap-[16px]'>
          <Image
            src='/graphics/5-stars.svg'
            width={163}
            height={24}
            alt='5 stars'
          />
          <p
            className='text-[16px] sm:text-[18px] md:text-[20px] font-medium italic leading-relaxed'
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <div className='flex items-end'>
            <Image
              src='/graphics/google-icon.svg'
              width={32}
              height={32}
              alt='Google icon'
            />
          </div>
        </div>

        {/* Right: Testimonial Image */}
        <div className='w-full md:w-[45%]'>
          <Image
            src={imageUrl}
            width={453}
            height={410}
            alt='Testimonial image'
            className='w-full h-auto rounded-[16px] object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCardBig
