import Image from 'next/image'
import Link from 'next/link'

const RatingReviewPill = ({ rating, reviewCount }) => {
  return (
    <div className='flex items-center space-x-4 border border-[#EAECEE] rounded-full py-[4px] pr-[16px] pl-[4px]'>
      <div className='flex items-center gap-[8px] border border-quicksand-dark rounded-full px-[12px] py-[6px] bg-wildSand'>
        <Image src='/graphics/5-stars.svg' width={82} height={12} alt='5 stars' />
        <p className='text-gold-base'><b>4.9</b>/5.0</p>
      </div>
      <div className='flex items-center gap-[10px]'>
        <Link href='https://www.google.com/search?q=cadmenclinic&oq=cadmenclinic&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTISCAEQLhgKGK8BGMcBGIAEGI4FMgkIAhAAGAoYgAQyEggDEC4YChivARjHARiABBiOBTIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINjMxMGoxajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x882b350228b56b63:0x114171d25aa4df4d,1,,,,' target='_blank'>
          <Image src='/graphics/google-icon.svg' width={24} height={24} alt='Google icon' />
        </Link>
        <p className='font-semibold'>200+ reviews</p>
      </div>
    </div>
  )
}

export default RatingReviewPill
