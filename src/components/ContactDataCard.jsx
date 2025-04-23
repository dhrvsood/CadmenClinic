import Image from "next/image";
import Link from "next/link";

const ContactDataCard = ({linkTo, linkText, icon, title, newTab}) => {
  return (
    <div className='flex'>
      <div className='flex items-center rounded-[12px] border border-[#eaecee] p-[28px] bg-[#fcfcfc]'>
        <Image
          src={icon}
          width={32}
          height={32}
          alt='Phone icon'
        />
      </div>
      <div className='rounded-[12px] border border-[#eaecee] p-[20px] bg-[#fcfcfc] flex flex-col w-full ml-[-1px]'>
        <h4 className='d-h4'>{title}</h4>
        <Link href={linkTo} className='text-[18px] mt-[8px] max-sm:text-[16px]' target={newTab ? '_blank' : undefined}>{linkText}</Link>
      </div>
    </div>
  )
}

export default ContactDataCard;
