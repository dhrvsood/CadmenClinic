import BotoxResultCard from '@/components/v2-components/BotoxResultCard'
import SelectPill from '@/components/v2-components/SelectPill'
import TextToggler from '@/components/v2-components/TextToggler'
import imageUrlBuilder from '@sanity/image-url'
import React, { useMemo, useState } from 'react'

import sty from './result-section.module.css'



const ResultsSection = ({ data }) => {
  // Prepare pills once with transformed images
  const processedPills = useMemo(() => {
    if (!data.selectPills) return []

    return data.selectPills.map((pill) => ({
      ...pill,
      content: {
        ...pill.content,
        icon: pill.content.icon ? builder.image(pill.content.icon).url() : '',
        image: pill.content.image ? builder.image(pill.content.image).url() : ''
      }
    }))
  }, [data.selectPills])

  // Get default selected item
  const defaultSelected =
    processedPills.find((p) => p.selected) || processedPills[0]

  // State
  const [selectedArea, setSelectedArea] = useState(defaultSelected)

  return (
    <section className={sty.botoxResultsSection} data-section='result'>
      <div className={sty.freeBox__ftLgU}>
        <div className='flex gap-[60px] max-sm:gap-[40px] max-sm:flex-col max-sm:flex-col-reverse'>
          <div className=''>
            {selectedArea && (
              <BotoxResultCard
                key={selectedArea.name}
                data={selectedArea.content}
                className={sty.resultCard}
              />
            )}
          </div>
          <div className={sty.freeBox__il0Qi}>
            <div className='flex flex-col'>
              <div className={sty.text__gam0J}>
                <h2>
                  <span style={{ color: '#080909' }}>{data.title}</span>{' '}
                  <span style={{ color: '#0C7A7B', fontStyle: 'italic' }}>
                    {data.highlightedText}
                  </span>
                </h2>
              </div>
              {data.description && (
                <>
                  <TextToggler
                    className={sty.textToggler__isZmY}
                    height='120px'
                    text={data.description}
                  />

                  <div className={sty.text__zvM6H}>{data.description}</div>
                </>
              )}
            </div>
            <div className={sty.pillsRow}>
              {processedPills.map((pill, index) => (
                <SelectPill
                  key={pill.name + index}
                  value={pill.name}
                  selected={pill.name === selectedArea.name}
                  handleClick={() => setSelectedArea(pill)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
