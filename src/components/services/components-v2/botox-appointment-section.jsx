import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point'
import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import useIsScreen from '@/helpers/useIsMobile'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import sty from './botox-appointment-section.module.css'



const BotoxAppointmentSection = ({ data, serviceId }) => {
  const isMobile = useIsScreen('mobileOnly')
  const title = data?.title || {}

  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  const renderLeftImage = () => {
    return (
      <div className='overflow-hidden rounded-[20px] max-sm:w-full'>
        <Image
          src={builder.image(data.lipFillerAppointmentLeftImage).url()}
          alt={
            data.lipFillerAppointmentLeftImage.alt || 'Appointment Illustration'
          }
          width={1300}
          height={1115}
          className={sty.img__oLtBw}
        />
      </div>
    )
  }

  return (
    <section
      className={sty.botoxAppointmentSection}
      data-section='botox-appointment'
    >
      <div className='mx-auto grid max-w-[1400px] grid-cols-[1fr_1fr] flex-col items-start gap-[80px] max-sm:flex'>
        {data?.lipFillerAppointmentLeftImage?.asset?._ref &&
          !isMobile &&
          renderLeftImage()}
        <div className='__wab_flex-container ρfc'>
          <div className='flex flex-col items-start justify-start gap-[40px] max-md:gap-[20px]'>
            <div className='flex flex-col items-start justify-start'>
              <div className='__wab_flex-container ρfc'>
                <div className={sty.freeBox__y8L8Q}>
                  <div className={sty.text__yrNm}>
                    <h2>
                      <span style={{ color: '#080909' }}>
                        {title.beforeHighlight}{' '}
                      </span>
                      <span style={{ color: '#D19D51' }}>
                        {title.highlight}
                      </span>
                      <span style={{ color: '#080909' }}>
                        {' '}
                        {title.afterHighlight}
                      </span>
                    </h2>
                  </div>
                  <p className={sty.text__irPrU}>{data?.description}</p>
                </div>
              </div>

              <div className={sty.freeBox__neqq1}>
                <div className='__wab_flex-container ρfc'>
                  {(data?.tips || []).map((tip, index) => {
                    return (
                      <div key={index} className={sty.freeBox__zbWca}>
                        {data?.lipFillerAppointmentRightImage?.asset?._ref ? (
                          <>
                            <div className={sty.title}>
                              <div className='__wab_flex-container ρfc'>
                                <PointIcon
                                  className={sty.svg__tKlBw}
                                  role='img'
                                />
                                <div className={sty.text__hxHp9}>
                                  {tip.title}
                                </div>
                              </div>
                            </div>
                            <p className={sty.text___6Tk0V}>
                              {tip.description}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className={sty.title}>
                              <div className='__wab_flex-container ρfc'>
                                <div className={sty.text__hxHp9}>
                                  {tip.title}
                                </div>
                              </div>
                            </div>
                            {tip.description && (
                              <div
                                className={`__wab_flex-container ρfc ${sty.freeBox__aQie}`}
                              >
                                <div className='__wab_flex-container ρfc'>
                                  <PointIcon
                                    className={sty.svg__tKlBw}
                                    role='img'
                                  />
                                  <div className={sty.text__uwDu6}>
                                    <span className={sty.appoitmentOnlyDesc}>
                                      {tip.description}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {serviceId && (
              <Button className={sty.preparingCta} onClick={handleClick}>
                {data?.cta?.text}
              </Button>
            )}
          </div>
        </div>

        {data?.lipFillerAppointmentLeftImage?.asset?._ref &&
          isMobile &&
          renderLeftImage()}
        {data?.lipFillerAppointmentRightImage?.asset?._ref && (
          <div className='overflow-hidden rounded-[20px]'>
            <Image
              src={builder.image(data.lipFillerAppointmentRightImage).url()}
              alt={
                data.lipFillerAppointmentRightImage.alt ||
                'Appointment Illustration'
              }
              width={1300}
              height={1115}
              className=''
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default BotoxAppointmentSection
