import Image from "next/image"
import { client as sanityClient } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const TestimonialCardBig = ({ quote, imageUrl }) => {
  return (
    <div className='m-auto rounded-[24px] bg-white p-[20px]'>
      <div className='flex flex-row gap-[48px] max-md:flex-col'>
        <div className='mr-[32px] flex flex-1 flex-col gap-[24px]'>
          <Image
            src='/graphics/5-stars.svg'
            width={163}
            height={24}
            alt='5 stars'
          />
          <p className='text-[20px] font-medium italic max-sm:text-[16px]'>{quote}</p>
          <div className='flex h-full items-end'>
            <Image
              src='/graphics/google-icon.svg'
              width={40}
              height={40}
              alt='5 stars'
            />
          </div>
        </div>
        <Image
          src={builder.image(imageUrl).url()}
          width={453}
          height={410}
          alt=''
          className='max-md:w-full'
        />
      </div>
    </div>
  )
}

export default TestimonialCardBig
