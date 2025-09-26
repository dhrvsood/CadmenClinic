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
import parse from 'html-react-parser';
import BookNowButton from "@/components/ui/BookNowButton";

const CadmenExpectDuringAndAfter = ({
    overrides = {}, 
    globalVariants = {},
    title,
    img,
    subheading,
    sections,
    ctaId,
    ctaText="Book Now",
    footer
}) => (
          <Stack__
            as={"section"}
            data-plasmic-name={"afterTheTreatmentSection"}
            data-plasmic-override={overrides.afterTheTreatmentSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.afterTheTreatmentSection)}
          >
            <div className={classNames(projectcss.all, sty.afterTheTreatmentContent)}>
            <div className={classNames(projectcss.all, sty.freeBox__avtMx)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__pM6Cj)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "midsize") ? "300px" : "auto"
                }
                displayWidth="100%"
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                loading={"lazy"}
                src={{
                  src: img,
                  // fullWidth: 1300,
                  // fullHeight: 1423,
                  aspectRatio: undefined
                }}
                style={{ height: "auto", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fBcEx)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jyaYg)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xXnt1)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__io7Fa
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#080909" }}
                      >
                        {title
                          ? title.prefix
                          : "What to Expect"
                        }
                      </span>
                      <React.Fragment> </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#D19D51" }}
                      >
                        {title
                          ? title.emphasis
                          : "During and After "
                        }
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#080909" }}
                      >
                        {title
                          ? title.end
                          :"the Treatment"
                        }
                      </span>
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wQcHr
                    )}
                  >
                    {subheading}
                  </div>
                </Stack__>


                {sections.map((section, index) => (
                  <Stack__
                    key={`section-${index}`}
                    as="div"
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xk3C)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9EBfz
                      )}
                    >
                      {section.title}
                    </div>

                    {section.points.map((point, pointIndex) => (
                      <div
                        key={`point-${index}-${pointIndex}`}
                        className={classNames(
                          "flex items-start gap-2", // keeps dot in line instead of vertically centered
                          projectcss.all,
                          sty.freeBox__pqLf
                        )}
                      >
                        <PointIcon
                          className={classNames("mt-1", projectcss.all, sty.svg___4KuWw)}
                          role="img"
                        />
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___0Op2E
                          )}
                        >
                          <span
                            className="plasmic_default__all plasmic_default__span"
                            style={{ color: "#535556" }}
                          >
                            {parse(point)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </Stack__>
                ))}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bx3Iz
                  )}
                >
                    {footer}
                </div>
              </Stack__>

              <BookNowButton ctaId={ctaId} text={ctaText}/>
            </div>
            </div>
          </Stack__>
);

export default CadmenExpectDuringAndAfter;
