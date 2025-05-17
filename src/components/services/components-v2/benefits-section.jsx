import BenefitsOfBotoxCard from '@/components/v2-components/BenefitsOfBotoxCard'
import sty from './benefits-section.module.css'
import Image from 'next/image'

export const BenefitsSection = ({ data }) => {
  return (
    <section className={sty.benefitsSection} data-section='benefits'>
      <div className='w-full py-[80px] max-sm:py-[60px]'>
        <div className='flex flex-col items-center gap-[20px] max-w-[800px] mx-auto mb-[40px] px-[20px] max-sm:px-[10px]'>
          <h2 className='text-center text-[64px] max-sm:text-[42px]'>
            <span style={{ color: '#080909' }}>{data.title}</span>{' '}
            <span style={{ fontStyle: 'italic', color: '#0C7A7B' }}>
              {data.highlightedText}
            </span>
          </h2>
          <p className={sty.sectionDescription}>{data.description}</p>
        </div>

        <div className='max-w-[1400px] mx-auto max-sm:max-w-none w-full max-sm:px-[10px] max-sm:overflow-x-scroll pb-[10px]'>
          <div className='grid grid-cols-4 max-sm:flex w-full gap-8 max-sm:w-fit max-sm:gap-4'>
            {data.benefitCards.map((benefitCard, index) => (
              <BenefitsOfBotoxCard
                key={index}
                icon={<Image width={24} height={0} src={benefitCard.icon} alt='' />}
                slot={
                  <div className={sty.cardSupportingText}>
                    {benefitCard.supportingText}
                  </div>
                }
                title={
                  <div className={sty.cardTitleText}>
                    {benefitCard.title && <strong>{benefitCard.title}</strong>}
                    <br />
                    {benefitCard.titleNormal}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
