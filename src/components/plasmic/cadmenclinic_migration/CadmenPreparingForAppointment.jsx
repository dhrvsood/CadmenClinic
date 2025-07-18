import React from "react";
import classNames from "classnames";
import Link from "next/link";

import {
    PlasmicImg as PlasmicImg__,
    Stack as Stack__,
    hasVariant
} from "@plasmicapp/react-web";
import projectcss from "@/components/plasmic/blank_website/plasmic.module.css";
import sty from "@/components/plasmic/cadmenclinic_migration/PlasmicBotoxSeo.module.css";   
import PointIcon from "./icons/PlasmicIcon__Point";


const CadmenPreparingForAppointment = ({
    overrides = {}, 
    globalVariants = {},
    titlePrefix,
    titleEmphasis,
    subheading,
    points,
    img
}) => (
          <Stack__
            as={"section"}
            data-plasmic-name={"botoxAppointmentSection"}
            data-plasmic-override={overrides.botoxAppointmentSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.botoxAppointmentSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___14QN)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hhfus)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___4V7A8)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zXpNv
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "midsize") ? (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#080909" }}
                        >
                          {/* {"Preparing for Your"} */}
                          {titlePrefix}
                        </span>
                        <React.Fragment> </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#D19D51" }}
                        >
                          {/* {"Hair Restoration Appointment"} */}
                          {titleEmphasis}
                        </span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#080909" }}
                        >
                          {/* {"Preparing for Your"} */}
                          {titlePrefix}
                        </span>
                        <React.Fragment> </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#D19D51" }}
                        >
                          {/* {"Hair Restoration Appointment"} */}
                          {titleEmphasis}
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                        {subheading && (
                            <div
                                className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__k235L
                                )}
                            >
                                {subheading}
                            </div>
                        )}
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___87Pse)}
                >

                {points && points.map((point, idx) => (
                    <div
                        key={idx}
                        className={classNames(projectcss.all, sty.freeBox__eqIOp)}
                    >
                        <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.title)}
                        >
                            <PointIcon
                                className={classNames(projectcss.all, sty.svg__tNu1F)}
                                role={"img"}
                            />
                            <div
                                className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__a1TXf
                                )}
                            >
                                {point.heading}
                            </div>
                        </Stack__>
                        <div
                            className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___6Xz0B
                            )}
                        >
                            {point.description}
                        </div>
                    </div>
                ))}
                </Stack__>
              </Stack__>

              <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
                <button className='button w-full md:w-auto'>Book Now</button>
              </Link>

            
            {/* image section for "preparing for your hair restoration appointment " */}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ch388)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__m5RlW)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "200px"
                    : hasVariant(globalVariants, "screen", "midsize")
                    ? "100%"
                    : "641px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "100%"
                    : "641px"
                }
                loading={"lazy"}
                src={{
                  src: img,
                  fullWidth: 1300,
                  fullHeight: 1115,
                  aspectRatio: undefined
                }}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Stack__>
          </Stack__>
);

export default CadmenPreparingForAppointment;