import AgeGroupsCard from '@/components/v2-components/AgeGroupsCard'
import SelectPill from '@/components/v2-components/SelectPill'
import TextToggler from '@/components/v2-components/TextToggler'
import React, { useMemo, useState } from 'react'

import sty from './age-groups-section.module.css'

const AgeGroupsSection = ({ data }) => {
  const processedOptions = useMemo(() => {
    if (!data?.ageOptions) return []
    return data.ageOptions
  }, [data?.ageOptions])

  const defaultSelected =
    processedOptions.find((p) => p.selected) || processedOptions[0]
  const [selectedAge, setSelectedAge] = useState(defaultSelected?.years)

  return (
    <section data-section='age-groups'>
      <div className='px-[20px] py-[80px] max-sm:w-full max-sm:px-[10px] max-sm:py-[60px]'>
        <div className={sty.ageGroupsTextContainer}>
          <div className='__wab_flex-container ρfc'>
            <div className={sty.ageGroupsTitleContainer}>
              <div className='__wab_flex-container ρfc'>
                <div className='max-w-[840px]'>
                  <h2 className='text-[64px] max-sm:text-[48px]'>
                    <span className={sty.mainText}>
                      {data?.title?.beforeHighlight}{' '}
                    </span>
                    <span className={sty.highlightText}>
                      {data?.title?.highlight}
                    </span>
                    <span className={sty.mainText}>
                      {' '}
                      {data?.title?.afterHighlight}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className={sty.ageGroupsDescContainer}>
              <div className='__wab_flex-container ρfc'>
                <div className={sty.ageGroupsDescBox}>
                  <div className='__wab_flex-container ρfc'>
                    <div className={sty.ageGroupsDesc}>{data?.description}</div>
                    <TextToggler
                      className={sty.textToogler}
                      height='168px'
                      text={data?.description}
                      white
                    />
                  </div>
                </div>
                {data?.boxDescription && (
                  <div className={sty.titleDescBox}>
                    <div className='__wab_flex-container ρfc'>
                      <div className={sty.boxTitle}>{data.boxTitle}</div>
                      <div className={sty.boxDesc}>{data?.boxDescription}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-[1400px] mt-[60px]'>
          <div className='__wab_flex-container ρfc'>
            <div className={sty.pilBox}>
              <div className='__wab_flex-container ρfc'>
                <div className={sty.selectedPillContainer}>
                  <div className='__wab_flex-container ρfc'>
                    {(processedOptions || []).map((age, index) => (
                      <SelectPill
                        key={index}
                        value={age.years}
                        selected={age.years === selectedAge}
                        handleClick={() => setSelectedAge(age.years)}
                      />
                    ))}
                  </div>
                </div>
                <div className={sty.pillContainerText}>
                  <div className='__wab_flex-container ρfc'>
                    <AgeGroupsCard
                      className={sty.ageGroupsCard}
                      data={processedOptions.find(
                        (option) => option.years === selectedAge
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgeGroupsSection
