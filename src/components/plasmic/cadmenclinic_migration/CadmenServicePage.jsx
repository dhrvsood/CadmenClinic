/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import DiscountPricingPill from "../../DiscountPricingPill"; // plasmic-import: TO66K8qjr8TP/component
import Button from "../../Button"; // plasmic-import: 0o-OkGmTYJg3/component
import HowItWorksCard from "../../HowItWorksCard"; // plasmic-import: w7EJDoU6NMVc/component
import AreasInteractive from "../../AreasInteractive"; // plasmic-import: cNLJfmXsSSOr/component
import TestimonialsSlider from "@/components/TestimonialsSlider/TestimonialsSlider"; // plasmic-import: J0SSSRogRoTR/codeComponent
import TestimonialCard from "../../TestimonialCard"; // plasmic-import: zWVJ2Qd7n2nR/component
import AreaExplainerCard from "../../AreaExplainerCard"; // plasmic-import: 4NENsursTaMC/component
import BigTestimonial from "../../BigTestimonial"; // plasmic-import: qZkEECWSrv1-/component
import Faq from "../../Faq"; // plasmic-import: kXqZTEGKWOeX/component
import { Video } from "@plasmicpkgs/plasmic-basic-components";
import OurLocationSection from "../../OurLocationSection"; // plasmic-import: 90jT_0Y9mL-p/component
import { useScreenVariants as useScreenVariants } from "../blank_website/PlasmicGlobalVariant__Screen"; // plasmic-import: 4iUCGKIIJTv2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./CadmenServicePage.module.css"; // plasmic-import: 9rME71zJbGo1/css

// newly created components
import RatingReviewPill from "@/components/RatingReviewPill";
import AffordableHairRestoration from "@/components/AffordableHairRestoration";
import ServiceStepCard from "@/components/ServiceStepCard";
import WhyPeopleChooseCard from "@/components/WhyPeopleChooseCard";
import SmallInfoCard from "@/components/SmallInfoCard";
import ServicesCarousel from "@/components/blog_categories_carousel";
import CadmenOurProcess from "./CadmenOurProcess";
import CadmenPreparingForAppointment from "./CadmenPreparingForAppointment";
import CadmenTreatmentCardsSection from "./CadmenTreatmentCardsSection";
import CadmenWantToLearnMore from "./CadmenWantToLearnMore";
import CadmenExpectDuringAndAfter from "./CadmenExpectDuringAndAfter";
import InteractiveInfo from "@/components/InteractiveInfo";

createPlasmicElementProxy;

export const CadmenServicePage__VariantProps = new Array();

export const CadmenServicePage__ArgProps = ["serviceData"];

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function CadmenServicePage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  // Define service data
  const service = args.serviceData ?? {
    faceInteractive: [],
    infoInteractive: null
  };

  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  // NECESSARY DATA FOR AREA INTERACTIVE (safeguards added to prevent runtime error)
  const faceInteractive = service?.faceInteractive;

  const stateSpecs = React.useMemo(() => {
    return [
      {
        path: "selectedArea",
        type: "private",
        variableType: "text",
        initFunc: () =>
          Array.isArray(faceInteractive) && faceInteractive.length > 0
            ? faceInteractive[0].name
            : null
      },
      {
        path: "areasInteractive.data",
        type: "private",
        variableType: "array",
        initFunc: () => faceInteractive ?? []
      },
      {
        path: "areasInteractive.selected",
        type: "private",
        variableType: "text",
        initFunc: () =>
          Array.isArray(faceInteractive) && faceInteractive.length > 0
            ? faceInteractive[0].name
            : null
      }
    ];
  }, [faceInteractive]);

  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });


  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  const isHairRestoration = service.category === "hair-restoration"
  const faqSectionClass = classNames(
    projectcss.all,
    sty.section__qz9Z,
    !isHairRestoration && sty.dark_faq
  );

  const faqHeadingClass = classNames(
    projectcss.all,
    projectcss.h2,
    projectcss.__wab_text,
    sty.h2__nCrwW,
    !isHairRestoration && "!text-white"
  );

  const faqSpanStyle = {
    fontWeight: 500,
    fontStyle: "italic",
    color: isHairRestoration ? "#D19D51" : "#fad8a7"
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">CADMEN Clinic | {service.tabTitle}</title>
        <meta
          key="og:title"
          property="og:title"
          content={service.tabTitle}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={service.tabTitle}
        />
      </Head>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          {/* HERO SECTION */}
          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vUeE3)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___024F)}>
                <DiscountPricingPill
                  className={classNames(
                    "__wab_instance",
                    sty.discountPricingPill__lyb
                  )}
                  perUnit={service.general.perUnit}
                  salePrice={service.general.salePrice}
                  strikePrice={service.general.strikePrice}
                />

                <div className={classNames(projectcss.all, sty.freeBox__xeJeY)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___6RoWb)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___1NJ,
                        ".h1-plasmic"
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {service.hero.tagline}
                          {isHairRestoration ? " with\n" : " with "}
                        </React.Fragment>
                        
                        <span
                          style={{
                            fontWeight: 500,
                            fontStyle: "italic",
                            color: "#D19D51",
                            fontSize: "90%"
                          }}
                        >
                          {service.general.longTitle}
                        </span>
                      </React.Fragment>
                    </h1>
                  </div>
                  <p
                    className={classNames(
                      projectcss.all,
                      projectcss.p,
                      projectcss.__wab_text,
                      sty.p__kl4Li
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Claim your exclusive "}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#000000" }}
                      >
                        {service.general.discount}
                        {" offer"}
                      </span>
                      <React.Fragment>
                        {" now & "}
                        {service.hero.description}
                      </React.Fragment>
                    </React.Fragment>
                  </p>
                </div>
                <div style={{marginBottom: "25px"}}>
                  <RatingReviewPill />
                </div>
                
                <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
                  <button className='button w-full md:w-auto'>Book Now</button>
                </Link>
              
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__wyX9A)}>
                <PlasmicImg__
                  data-plasmic-name={"heroImage"}
                  data-plasmic-override={overrides.heroImage}
                  alt={""}
                  className={classNames(sty.heroImage)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"120%"}
                  displayMinWidth={"100%"}
                  displayWidth={"auto"}
                  src={{
                    src: service.hero.img,
                    fullWidth: 1605,
                    fullHeight: 1351,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
          </section>

          {/* THREE CARDS SECTION */}
          <section
            data-plasmic-name={"threeCardsSection"}
            data-plasmic-override={overrides.threeCardsSection}
            className={classNames(projectcss.all, sty.threeCardsSection)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"threeCards"}
              data-plasmic-override={overrides.threeCards}
              hasGap={true}
              className={classNames(projectcss.all, sty.threeCards)}
            >
              <SmallInfoCard
                icon="/icons/portrait-icon.svg"
                emphasis={service.general.longTitle === "Färsk IV Drips" ? "Proven" : "FREE"}
                title={service.general.longTitle === "Färsk IV Drips" ? " Results You Can Feel" : " Consultation"}
                subtitle={service.general.longTitle === "Färsk IV Drips"
                  ? "Proudly Formulated and made in Canada"
                  : "Claim your first consultation for <strong>FREE</strong>"
                }
              />
              
              <SmallInfoCard
                icon="/icons/discount.svg"
                emphasis={ 
                  isHairRestoration 
                    ? `${service.general.salePrice}`
                    : `${service.general.salePrice}${service.general.perUnit}` 
                  }
                title=" Special Price!"
                subtitle={`Exclusive <strong>${service.general.discount} discount</strong> for your first procedure`}
              />
              {
                isHairRestoration
                  ?
                  <SmallInfoCard
                    icon="/icons/star.svg"
                    emphasis="Trusted"
                    title=" by 2,100+ Patients"
                    subtitle="Proven results, 100% natural, minimal downtime"
                  />
                  :
                  <SmallInfoCard
                    icon="/icons/star.svg"
                    emphasis="Certified"
                    title=" Professionals"
                    subtitle="Only experienced experts for safe results"
                  />
              }
            </Stack__>
          </section>

          {
            isHairRestoration
            // FOR HAIR RESTORATION PAGES
            ?
            <>
              {/* CHOOSE SERVICE SECTION */}
              <section className={classNames(projectcss.all, sty.chooseBotoxSection)}>
            <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__jhpM3
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{
                        fontStyle: "italic",
                        fontWeight: 500,
                        color: "#D19D51"
                      }}
                    >
                      {"Why People Choose "}
                    </span>
                    <React.Fragment>{service.general.longTitle}</React.Fragment>
                  </React.Fragment>
                </h2>
                <p
                className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.p__zSnqu
                  )}
                  style={{
                    maxWidth: "800px",
                    paddingTop: "20px"
                  }}
                >
                  {service.whyPeopleChoose.description}
                </p>
              
            <div className="cards-container">
              {/* What is service */}
              <WhyPeopleChooseCard
                icon="/icons/syringe-icon.svg"
                title={`What is <strong><em>${service.general.longTitle}</em></strong>?`}
                img={service.whyPeopleChoose.what.img}
                description={service.whyPeopleChoose.what.description}
              />

              {/* why people choose service */}
              <WhyPeopleChooseCard
                icon="/icons/portrait-icon.svg"
                title={`Why <strong><em>People Choose</em></strong> ${service.general.shortTitle}?`}
                img={service.whyPeopleChoose.why.img}
                description={service.whyPeopleChoose.why.description}
              />

              {/* Safe and Professional care */}
              <WhyPeopleChooseCard
                icon="/icons/heart-icon.svg"
                title="<strong><em>Safe & Professional</em></strong> Care"
                img="/media/services/prp/3.3.jpg"
                description="Your safety is our top priority. Our licensed professionals use industry-leading techniques in a controlled, sterile environment. We believe in natural-looking results that allow your natural beauty to shine."
              />
            </div>

            <Link href='/book-now'  className='mt-[40px] w-full md:w-auto'>
              <button className='button w-full md:w-auto'>Book Now</button>
            </Link>

            <style jsx>{`
              .cards-container {
                max-width: 100%;
                width: 100%;
                margin: 0 auto;
                padding-top: 25px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                box-sizing: border-box;
              }
            `}</style>
              </section>

              {/* HOW SERVICE WORKS */}
              <section
                data-plasmic-name={"howBotoxWorksSection"}
                data-plasmic-override={overrides.howBotoxWorksSection}
                className={classNames(projectcss.all, sty.howBotoxWorksSection)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jomPy)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"howBotoxWorksHeader"}
                    data-plasmic-override={overrides.howBotoxWorksHeader}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.howBotoxWorksHeader)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__egivG
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={"plasmic_default__all plasmic_default__span"}
                          style={{
                            fontStyle: "italic",
                            fontWeight: 500,
                            color: "#FAD8A7"
                          }}
                        >
                          {"How"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                        <span
                          className={"plasmic_default__all plasmic_default__span"}
                          style={{ color: "#FAD8A7" }}
                        >
                          {" "}
                        </span>
                        <React.Fragment>
                          {service.general.longTitle}
                          {" Works"}
                        </React.Fragment>
                      </React.Fragment>
                    </h2>
                    <p
                      className={classNames(
                        projectcss.all,
                        projectcss.p,
                        projectcss.__wab_text,
                        sty.p__l5CD
                      )}
                    >
                      {
                        "Our patients have experienced significant hair regrowth with our science-backed approach, ensuring safe, long-lasting, and incredible results"
                      }
                    </p>
                  </Stack__>
                  <div className="cards-container">
                    {service.howItWorks.map((step) => (
                      <ServiceStepCard 
                        key={step.id}
                        img={step.img}
                        id={step.id}
                        title={step.title}
                        description={step.description}
                      />
                    ))}
                  </div>

                  <style jsx>{`
                    .cards-container {
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      gap: 20px;
                      padding: 20px;
                      box-sizing: border-box;
                      width: 100%;
                    }

                    @media (max-width: 1023px) {
                      .cards-container {
                        flex-direction: column;
                      }
                    }
                  `}</style>
                </Stack__>
              </section>

              <AffordableHairRestoration/>
            </>

            // FOR ALL OTHERS
            : <></>

          }

          {/* BEFORE AFTER */}
          {
            service.beforeAfters
            ?
            <section
              data-plasmic-name={"beforeAfterSection"}
              data-plasmic-override={overrides.beforeAfterSection}
              className={classNames(projectcss.all, sty.beforeAfterSection)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"beforeAfterHeader"}
                data-plasmic-override={overrides.beforeAfterHeader}
                hasGap={true}
                className={classNames(projectcss.all, sty.beforeAfterHeader)}
              >
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__yHrxl
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"Before & "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{
                        fontStyle: "italic",
                        fontWeight: 500,
                        color: "#FAD8A7"
                      }}
                    >
                      {"After"}
                    </span>
                  </React.Fragment>
                </h2>
                <p
                  className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.p__en7Rd
                  )}
                >
                  {"Results speak for themselves."}
                </p>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__bOf5N)}>
                <TestimonialsSlider
                  data-plasmic-name={"beforeAfterSlider"}
                  data-plasmic-override={overrides.beforeAfterSlider}
                  className={classNames("__wab_instance", sty.beforeAfterSlider)}
                  ctaLink={"#"}
                  ctaText={"Act Now"}
                  isDarkBg={true}
                  settings={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? {
                          dots: false,
                          arrows: false,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      : hasVariant(globalVariants, "screen", "midsize")
                      ? {
                          dots: false,
                          arrows: false,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      : {
                          dots: false,
                          arrows: false,
                          infinite: true,
                          speed: 500,
                          slidesToShow: 3,
                          slidesToScroll: 1
                        }
                  }
                >
                  {service.beforeAfters.map((beforeAfter) => (
                    <TestimonialCard
                      className={classNames(
                        "__wab_instance",
                        sty.testimonialCard__rFqgo
                      )}
                      id={beforeAfter.id}
                      subtitle={beforeAfter.subtitle}
                      title={beforeAfter.title}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img___2Nkey)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: beforeAfter.img,
                          fullWidth: 486,
                          fullHeight: 480,
                          aspectRatio: undefined
                        }}
                      />
                    </TestimonialCard>
                  ))}
                </TestimonialsSlider>
              </div>
            </section>
            : <></>
          }


          {
            isHairRestoration

            // IF HAIR RESTORATION
            ? <></>

            // FOR ALL OTHERS
            : 
            <>
              {/* 4. WHAT IS SERVICE AND HOW DOES IT WORK */}
              <CadmenPreparingForAppointment
                titlePrefix={service.whatAndHowItWorks.titlePrefix}
                titleEmphasis={service.whatAndHowItWorks.titleEmphasis}
                points={service.whatAndHowItWorks.points}
                img={service.whatAndHowItWorks.img}
              />

              {/* 5. OUR SERVICE PROCESS (Consultation, Treatment, Results) */}
              <CadmenOurProcess 
                title={service.ourProcess.title}
                subheading={service.ourProcess.subheading}
                consultation={service.ourProcess.consultation}
                treatment={service.ourProcess.treatment}
                results={service.ourProcess.results}
              />

              {/* 6. CARDS FOR OUR TREATMENTS */}
              <CadmenTreatmentCardsSection 
                title={service.treatmentCards.title}
                description={service.treatmentCards.description}
                regularUnit={service.treatmentCards.regularUnit}
                specialUnit={service.treatmentCards.specialUnit}
                cards={service.treatmentCards.cards}
                wide={service.treatmentCards.wide}
              />

              {/* 7. INTERACTIVE COMPONENT */}
              {
                // service.faceInteractive
                Array.isArray(service?.faceInteractive) && service.faceInteractive.length > 0 

                // Show interactive face dot component for Botox and Dermal Fillers
                ?
                  <AreasInteractive
                    data-plasmic-name={"areasInteractive"}
                    data-plasmic-override={overrides.areasInteractive}
                    className={classNames("__wab_instance", sty.areasInteractive)}
                    data={generateStateValueProp($state, ["areasInteractive", "data"])}
                    onDataChange={async (...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "areasInteractive",
                        "data"
                      ]).apply(null, eventArgs);
                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }
                    }}
                    onSelectedChange={async (...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "areasInteractive",
                        "selected"
                      ]).apply(null, eventArgs);
                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }
                    }}
                    selected={generateStateValueProp($state, [
                      "areasInteractive",
                      "selected"
                    ])}
                  />

                // Show interactive info component for rest
                :
                <InteractiveInfo
                  title={service.infoInteractive.title}
                  description={service.infoInteractive.description}
                  data={service.infoInteractive.data}
                />

              }

              {/* 8. WANT TO LEARN MORE */}
              <CadmenWantToLearnMore 
                title={service.wantToLearnMore.title}
                description={service.wantToLearnMore.description}
              />

              {/* 9. PREPARING FOR YOUR APPOINTMENT / WHAT TO EXPECT DURING AND AFTER THE TREATMENT */}
              <CadmenPreparingForAppointment
                titlePrefix={service.preparingForAppointment.titlePrefix}
                titleEmphasis={service.preparingForAppointment.titleEmphasis}
                subheading={service.preparingForAppointment.subheading}
                points={service.preparingForAppointment.points}
                img={service.preparingForAppointment.img}
              />
              
              <CadmenExpectDuringAndAfter 
                title={service.expectDuringAfter.title}
                img={service.expectDuringAfter.img}
                subheading={service.expectDuringAfter.subheading}
                sections={service.expectDuringAfter.sections}
                footer={service.expectDuringAfter.footer}
              />
            </>

          }


          {/* SERVICE TRANSFORMED/HELPED // UNDERSTANDING THE RISKS */}
          <section
            data-plasmic-name={"botoxHelpedSection"}
            data-plasmic-override={overrides.botoxHelpedSection}
            className={classNames(projectcss.all, sty.botoxHelpedSection)}
          >
            
            {/* stack for all */}
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9IgFv)}
            >

              {/* stack for left title */}
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__h0TYw)}
              >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__jJtq
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{service.transformations.title.first}</React.Fragment>
                      <span
                        // className={"plasmic_default__all plasmic_default__span"}
                        style={{
                          fontStyle: "italic",
                          fontWeight: 500,
                          color: "#D19D51"
                        }}
                      >
                        {service.transformations.title.emphasis}
                      </span>
                      <React.Fragment>{service.transformations.title.last}</React.Fragment>
                    </React.Fragment>
                  </h2>
                  <p
                    className={classNames(
                      projectcss.all,
                      projectcss.p,
                      projectcss.__wab_text,
                      sty.p__aWpbi
                    )}
                  >
                    {service.transformations?.description
                      ? service.transformations.description
                      : `Don’t wait any longer to restore your hair – join the many satisfied clients who have already experienced the benefits of ${service.general.longTitle}`}
                  </p>

              </Stack__>

              <div className={classNames(projectcss.all, sty.freeBox___5Wi9P)}>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"botoxHelpedScroller"}
                  data-plasmic-override={overrides.botoxHelpedScroller}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.botoxHelpedScroller,
                    hasVariant(globalVariants, "screen", "midsize")
                      ? "botox-helped-scroller"
                      : undefined
                  )}
                >
                  {service.transformations.cards.map((transformation) => (
                    <AreaExplainerCard
                      className={classNames(
                        "__wab_instance",
                        sty.areaExplainerCard__xBMjy
                      )}
                      id={transformation.id}
                      subtitle={transformation.subtitle}
                      title={transformation.title}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img___1N6Yf)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: transformation.img,
                          fullWidth: 287,
                          fullHeight: 256,
                          aspectRatio: undefined
                        }}
                      />
                    </AreaExplainerCard>
                  ))}
                </Stack__>
              </div>
            </Stack__>
          </section>


          {
            isHairRestoration

            // IF HAIR RESTORATION
            ?
            <section className={classNames(projectcss.all, sty.section__p5T3P)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rD1Um)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__eeq1)}
                >
                  <RatingReviewPill />

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__otgId
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Join Our Satisfied \n"}</React.Fragment>
                      {/* <React.Fragment>{"PRP Hair Restoration"}</React.Fragment> */}
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{
                          fontWeight: 500,
                          fontStyle: "italic",
                          color: "#d09d45"
                        }}
                      >
                        {service.general.longTitle}
                        {" Clients"}
                      </span>
                    </React.Fragment>
                  </h2>
                  <p
                    className={classNames(
                      projectcss.all,
                      projectcss.p,
                      projectcss.__wab_text,
                      sty.p__qhN8C
                    )}
                  >
                    {"Over thousands of people have transformed their lives with "}
                    {service.general.longTitle}
                  </p>
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__llpLu)}>
                  <TestimonialsSlider
                    data-plasmic-name={"satisfiedClientsSlider"}
                    data-plasmic-override={overrides.satisfiedClientsSlider}
                    className={classNames(
                      "__wab_instance",
                      sty.satisfiedClientsSlider
                    )}
                    ctaLink={"#"}
                    ctaText={"Book Now"}
                    isDarkBg={true}
                    settings={{
                      dots: false,
                      arrows: false,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }}
                  >
                    {service.testimonials.map((testimonial) => (
                      <BigTestimonial
                        key={testimonial.id}
                        quote={testimonial.quote}
                      />
                    ))}
                  </TestimonialsSlider>
                </div>
              </Stack__>
            </section>
            

            // FOR ALL OTHERS
            : <></> // No testimonials
          }

          {/* QUESTION ANSWERS FAQ */}
          <section className={faqSectionClass}>
            <Stack__
              as="div"
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__d6O5E)}
            >
              <Stack__
                as="div"
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kmhJs)}
              >
                <h2 className={faqHeadingClass}>
                  <>
                    {"Our "}
                    <span
                      className="plasmic_default__all plasmic_default__span"
                      style={faqSpanStyle}
                    >
                      {"Answers"}
                    </span>
                    {"\nfor Your Questions"}
                  </>
                </h2>
                <p
                  className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.p__sLxZu
                  )}
                >
                  {"Our clients have eliminated their doubts about "}
                  {service.tabTitle}
                  {", and you can join them today!"}
                </p>
              </Stack__>

              <Stack__
                as="div"
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rlxr1)}
              >
                {service.faqs.map((faq) => (
                  <Faq
                    key={faq.id}
                    id={faq.id}
                    answer={faq.answer}
                    question={faq.question}
                  />
                ))}
              </Stack__>
            </Stack__>
          </section>

          {/* VIDEO */}
          {
            isHairRestoration

            // IF HAIR RESTORATION
            ?
            <section className={classNames(projectcss.all, sty.section__kI06)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zva01)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__alzRe
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      <React.Fragment>{"Watch the\n"}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontStyle: "italic", fontWeight: 500 }}
                      >
                        {service.general.longTitle}
                        {" Process"}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <React.Fragment>{"Watch the "}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontStyle: "italic", fontWeight: 500 }}
                      >
                        {service.general.longTitle}
                        {" Process"}
                      </span>
                    </React.Fragment>
                  )}
                </h1>
                <div className={classNames(projectcss.all, sty.freeBox__vQFwz)}>
                  <Video
                    data-plasmic-name={"htmlVideo"}
                    data-plasmic-override={overrides.htmlVideo}
                    className={classNames("__wab_instance", sty.htmlVideo)}
                    controls={true}
                    src={service.video.src}
                    muted={service.video.muted}
                  />
                </div>
                <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
                  <button className='button white w-full md:w-auto'>Try It Now</button>
                </Link>
              </Stack__>
            </section>

            // FOR ALL OTHERS
            : <></> // No video
          }

          {/* OUR LOCATION */}
          <OurLocationSection
            data-plasmic-name={"ourLocationSection"}
            data-plasmic-override={overrides.ourLocationSection}
            className={classNames("__wab_instance", sty.ourLocationSection)}
          />


          {/* CLAIM SPECIAL OFFER */}
          {
            isHairRestoration

            // IF HAIR RESTORATION
            ?
            <section className={classNames(projectcss.all, sty.section__h2TW)}>
              <div className={classNames(projectcss.all, sty.freeBox__lSnUu)}>
                <DiscountPricingPill
                  className={classNames(
                    "__wab_instance",
                    sty.discountPricingPill__dvwCm
                  )}
                  perUnit={service.general.perUnit}
                  salePrice={service.general.salePrice}
                  strikePrice={service.general.strikePrice}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yjqrs)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lhEX
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Claim Your "}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{
                          fontStyle: "italic",
                          fontWeight: 500,
                          color: "#FAD8A7"
                        }}
                      >
                        {"Special Offer"}
                      </span>
                      <React.Fragment>{" Now!"}</React.Fragment>
                    </React.Fragment>
                  </h2>
                  <p
                    className={classNames(
                      projectcss.all,
                      projectcss.p,
                      projectcss.__wab_text,
                      sty.p__meiVy
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>
                        {"Book your FREE consultation and get "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {service.general.discount}
                        {" DISCOUNT"}
                      </span>
                      <React.Fragment>
                        {" for first "}
                        {service.general.longTitle}
                        {" procedure!"}
                      </React.Fragment>
                    </React.Fragment>
                  </p>
                </Stack__>
                <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
                  <button className='button white w-full md:w-auto'>Book Now</button>
                </Link>
              </div>
            </section>
            : <></>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default function CadmenServicePage(props) {
  const { variants, args, overrides } = React.useMemo(
    () =>
      deriveRenderOpts(props, {
        name: "root",
        descendantNames: ["root"],
        internalArgPropNames: CadmenServicePage__ArgProps,
        internalVariantPropNames: CadmenServicePage__VariantProps,
      }),
    [props]
  );

  return CadmenServicePage__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root",
  });
}

/* prettier-ignore-end */
