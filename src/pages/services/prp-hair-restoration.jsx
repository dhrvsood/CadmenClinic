import { useBeforeAfterAnimation } from '@/animations/lander/useBeforeAfterAnimation'
import { useBotoxHelpedScrollerAnimation } from '@/animations/lander/useBotoxHelpedScrollerAnimation'
import { useChooseBotoxAnimation } from '@/animations/lander/useChooseBotoxAnimation'
import { useFaceAnimation } from '@/animations/lander/useFaceAnimation'
import { useHowBotoxWorksAnimation } from '@/animations/lander/useHowBotoxWorksAnimation'
import { useLanderHeroAnimation } from '@/animations/lander/useLanderHeroAnimation'
import { useThreeCardsAnimation } from '@/animations/lander/useThreeCardsAnimation'
// import { ctaToBooking } from '@/helpers/cta_to_booking'
import { PageParamsProvider as PageParamsProvider__ } from '@plasmicapp/react-web/lib/host'
// import { ReactLenis, useLenis } from 'lenis/react'
import { useRouter } from 'next/router'
import * as React from 'react'

// import GlobalContextsProvider from '../../components/plasmic/blank_website/PlasmicGlobalContextsProvider'
import { CadmenPRPLander } from '../../components/plasmic/cadmenclinic_migration/CadmenPRPLander'

function PRPLander() {
//   const lenis = useLenis(({ scroll }) => {
//     // called every scroll
//   })

//   const handleBookNow = () => {
//     ctaToBooking('844863b9-2438-4d68-9008-d12ee4990636')
//   }

  const { heroImgRef, heroRef } = useLanderHeroAnimation()

  const {
    sectionRef: chooseBotoxSectionRef,
    dotRef: chooseBotoxDotRef,
    barRef: chooseBotoxBarRef,
    contentRefs: chooseBotoxPointsRef,
    imageRefs: chooseBotoxImagesRef,
    headerRef: chooseBoxoxHeaderRef,
    navRef: peopleChooseNavRef
  } = useChooseBotoxAnimation()

  const {
    sectionRef: howBotoxWorksSectionRef,
    cardsRef: howBotoxWorksCardsRef,
    mobileCardsRef: howBotoxWorksMobileCardsRef,
    headerRef: howBotoxWorksHeaderRef
  } = useHowBotoxWorksAnimation()

  const { botoxHelpedScrollerRef, botoxHelpedSectionRef } =
    useBotoxHelpedScrollerAnimation()

  const { threeCardsRef, threeCardsSectionRef } = useThreeCardsAnimation()

  const {
    sectionRef: faceSectionRef,
    headerRef: faceHeaderRef,
    pillsRef: facePillsRef,
    cardRef: faceCardRef,
    dotsRef: faceDotsRef
  } = useFaceAnimation()

  const { sectionRef: beforeAfterSectionRef, headerRef: beforeAfterHeaderRef } =
    useBeforeAfterAnimation()

  return (
    // <GlobalContextsProvider>
    //   <PageParamsProvider__
    //     route={useRouter()?.pathname}
    //     params={useRouter()?.query}
    //     query={useRouter()?.query}
    //   >
        <CadmenPRPLander
          hero={{}}
          heroImage={{ ref: heroImgRef }}
          threeCardsSection={{ ref: threeCardsSectionRef }}
          threeCards={{ ref: threeCardsRef }}
          peopleChooseNav={{ ref: peopleChooseNavRef }}
          chooseBotoxHeader={{ ref: chooseBoxoxHeaderRef }}
          chooseBotoxDot={{ ref: chooseBotoxDotRef }}
          chooseBotoxBar={{ ref: chooseBotoxBarRef }}
          chooseBotoxSection={{ ref: chooseBotoxSectionRef }}
          chooseBotoxPoints={{ ref: chooseBotoxPointsRef }}
          chooseBotoxImages={{ ref: chooseBotoxImagesRef }}
          howBotoxWorksHeader={{ ref: howBotoxWorksHeaderRef }}
          howBotoxWorksCards={{ ref: howBotoxWorksCardsRef }}
          howBotoxWorksCardsMobile={{ ref: howBotoxWorksMobileCardsRef }}
          howBotoxWorksSection={{ ref: howBotoxWorksSectionRef }}
          botoxHelpedScroller={{ ref: botoxHelpedScrollerRef }}
          botoxHelpedSection={{ ref: botoxHelpedSectionRef }}
          faceSection={{ ref: faceSectionRef }}
          faceHeader={{ ref: faceHeaderRef }}
          facePills={{ ref: facePillsRef }}
          faceCard={{ ref: faceCardRef }}
          faceDots={{ ref: faceDotsRef }}
          beforeAfterSection={{ ref: beforeAfterSectionRef }}
          beforeAfterHeader={{ ref: beforeAfterHeaderRef }}
        //   heroButton={{ onClick: handleBookNow }}
        //   chooseBotoxButton={{ onClick: handleBookNow }}
        //   specialOfferButton={{ onClick: handleBookNow }}
        //   satisfiedClientsSlider={{ handleButtonClick: handleBookNow }}
        //   beforeAfterSlider={{ handleButtonClick: handleBookNow }}
        //   videoCtaButton={{ onClick: handleBookNow }}
        //   claimBotoxFooter={{ onClick: handleBookNow }}
        />
    //   </PageParamsProvider__>
    // </GlobalContextsProvider>
  )
}

export default PRPLander
