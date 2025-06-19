import Image from "next/image"


const IconImageTextCard = ({ icon, image, title, text }) => {
  return (
    <div className='max-w-[426px] max-sm:w-[80vw]'>
      <div className='flex'>
        <div className='flex items-center justify-center p-[24px] bg-white rounded-[16px] border border-[#EAECEE]'>
          <Image src={icon} width={32} height={32} alt='' />
        </div>
        <h4 className='rich-h4 flex items-center p-[24px] bg-white rounded-[16px] border border-[#EAECEE] flex-1'>
          {title}
        </h4>
      </div>
      <div className='flex flex-col p-[20px] pt-[50px] mt-[-30px] bg-white rounded-[16px] gap-[24px]'>
        <Image src={image} width={386} height={262} alt='' />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default IconImageTextCard
