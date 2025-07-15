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

const CadmenExpectDuringAndAfter = ({
    overrides = {}, 
    globalVariants = {},
    img,
    titlePrefix,
    titleEmphasis,
    subheading,
    points,
    footer
}) => (
          <Stack__
            as={"section"}
            data-plasmic-name={"afterTheTreatmentSection"}
            data-plasmic-override={overrides.afterTheTreatmentSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.afterTheTreatmentSection)}
          >
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
                  fullWidth: 1300,
                  fullHeight: 1423,
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
                        {"What to Expect"}
                      </span>
                      <React.Fragment> </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#D19D51" }}
                      >
                        {"During and After "}
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#080909" }}
                      >
                        {"the Treatment"}
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
                <Stack__
                  as={"div"}
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
                    {"Post-Treatment Care:"}
                  </div>

                  {
                    points.map((point) => (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__pqLf)}
                    >
                      <PointIcon
                        className={classNames(projectcss.all, sty.svg___4KuWw)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___0Op2E
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#535556" }}
                          >
                            {point}
                          </span>
                        </React.Fragment>
                      </div>
                    </Stack__>
                  ))}
                </Stack__>
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

              <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
                <button className='button w-full md:w-auto'>Book Now</button>
              </Link>
            </div>
          </Stack__>
);

export default CadmenExpectDuringAndAfter;