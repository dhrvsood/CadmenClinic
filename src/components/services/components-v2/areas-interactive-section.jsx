import AreasInteractive from '@/components/v2-components/AreasInteractive'
import React, { useState } from 'react'

import sty from './areas-interactive-section.module.css'

const AreasInteractiveSection = ({ data }) => {
  const checkSelectedPill = () => {
    let selectedPill
    if (data.pills) {
      selectedPill = data.pills.find((pill) => pill.selected)
      return selectedPill ? selectedPill.name : ''
    }
  }

  const [selected, setSelected] = useState(checkSelectedPill())

  return (
    <section className={sty.areasInteractive}>
      <AreasInteractive
        className={sty.areasInteractive}
        interactiveDots={data.interactiveImage}
        data={data.points}
        selected={selected}
        onSelectedChange={setSelected}
      >
        <div className={sty.text__rFip}>
          <h2>
            {data.title}{' '}
            <span className={sty.hlihlightedTitle}>{data.highlightedText}</span>
          </h2>
        </div>
      </AreasInteractive>
    </section>
  )
}

export default AreasInteractiveSection
