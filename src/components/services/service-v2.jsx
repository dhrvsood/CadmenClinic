import { NextSeo } from 'next-seo'

import AffordableSection from './components-v2/affordableSection'
import AgeGroupsSection from './components-v2/age-groups-section'
import AreasInteractiveSection from './components-v2/areas-interactive-section'
import AvoidBotoxSection from './components-v2/avoid-botox-section'
import BeforeAfterSection from './components-v2/before-after-section'
import { BenefitsSection } from './components-v2/benefits-section'
import BotoxAppointmentSection from './components-v2/botox-appointment-section'
import BotoxMythsSection from './components-v2/botox-myth-section'
import BotoxRisksSection from './components-v2/botox-risk-section'
import ChooseBotoxSection from './components-v2/choose-botox-section'
import ContactSection from './components-v2/contact-section'
import CtaSection from './components-v2/cta-section'
import FaqSection from './components-v2/faq-section'
import { HeroSection } from './components-v2/hero-section'
import HeroSectionV2 from './components-v2/hero-section-v2'
import IsBotoxRightSection from './components-v2/is-botox-right-section'
import IsSafeSection from './components-v2/is-safe-section'
import JoinClubSection from './components-v2/join-the-club-section'
import OurProcessSection from './components-v2/our-process-section'
import PatientGuidelinesSection from './components-v2/patient-guidelines-section'
import ResultsSection from './components-v2/result-section'
import SafetyMeasuresSection from './components-v2/safety-measures-section'
import WhatAreLipFillersSection from './components-v2/what-are-lip-filler-section'

const ServiceV2 = ({ service }) => {
  console.log(service)
  const SectionRenderer = ({ section }) => {
    switch (section._type) {
      case 'heroSectionV2':
        return <HeroSectionV2 data={section} serviceId={service?.serviceId} />
      // case 'heroSection':
      //   return <HeroSection data={section} />
      // case 'benefitsSection':
      //   return <BenefitsSection data={section} />
      // case 'beforeAfterSection':
      //   return <BeforeAfterSection data={section} />
      // case 'whatAreLipFillersSection':
      //   return <WhatAreLipFillersSection data={section} serviceId={service?.serviceId} />
      // case 'ourProcessSection':
      //   return <OurProcessSection data={section} serviceId={service?.serviceId} />
      // case 'affordableBotoxSection':
      //   return <AffordableSection data={section} serviceId={service?.serviceId} />
      // case 'areasInteractiveSection':
      //   return <AreasInteractiveSection data={section} />
      // case 'botoxResultsSection':
      //   return <ResultsSection data={section} />
      // case 'learnMore':
      //   return <CtaSection data={section} serviceId={service?.serviceId} />
      // case 'isSafeSection':
      //   return <IsSafeSection data={section} />
      // case 'isBotoxRightSection':
      //   return <IsBotoxRightSection data={section} />
      // case 'appointmentSection':
      //   return <BotoxAppointmentSection data={section} serviceId={service?.serviceId} />
      // case 'ageGroupsSection':
      //   return <AgeGroupsSection data={section} />
      // case 'chooseBotoxSection':
      //   return <ChooseBotoxSection datas={section} />
      // case 'faqSection':
      //   return <FaqSection data={section} />
      // case 'avoidBotoxSection':
      //   return <AvoidBotoxSection data={section} />
      // case 'safetyMeasuresSection':
      //   return <SafetyMeasuresSection data={section} />
      // case 'botoxMythsSection':
      //   return <BotoxMythsSection data={section} />
      // case 'patientGuidelinesSection':
      //   return <PatientGuidelinesSection data={section} serviceId={service?.serviceId} />
      // case 'contactSection':
      //   return <ContactSection data={section} />
      // case 'understandingRisksSection':
      //   return <BotoxRisksSection data={section} />
      // case 'joinClubSection':
      //   return <JoinClubSection data={section} />
    }
  }
  return (
    <>
      <div className='sanity-root'>
        <HeroSectionV2 data={section} serviceId={service?.serviceId} />
      </div>
    </>
  )
}

export default ServiceV2
