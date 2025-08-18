import React from "react";
import classNames from "classnames";
import Link from "next/link";

import {
    PlasmicImg as PlasmicImg__,
    Stack as Stack__,
    hasVariant
} from "@plasmicapp/react-web";
import BotoxProcessCard from "@/components/BotoxProcessCard";
import projectcss from "@/components/plasmic/blank_website/plasmic.module.css";
import sty from "@/components/plasmic/cadmenclinic_migration/PlasmicBotoxSeo.module.css";
import BookNowButton from "@/components/ui/BookNowButton";

const CadmenOurProcess = ({ 
    overrides = {}, 
    globalVariants = {},
    title,
    subheading,
    program,
    consultation,
    treatment,
    ctaId,
    results
}) => (
    <Stack__
        as={"div"}
        data-plasmic-name={"ourBotoxProcessSection"}
        data-plasmic-override={overrides.ourBotoxProcessSection}
        hasGap={true}
        className={classNames(projectcss.all, sty.ourBotoxProcessSection)}
    >
        {/* heading and description */}
        <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2OIGn)}
        >
            <div
            className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ubNkL
            )}
            >
            <React.Fragment>
                <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FFFFFF" }}
                >
                {`Our ${title}`}
                </span>
                <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#E4C08C", fontStyle: "italic" }}
                >
                {program || " Process"}
                </span>
            </React.Fragment>
            </div>
            <div
            className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___63Mxp
            )}
            >
                {subheading 
                    ? subheading
                    : "From consultation to treatment, we make the process simple and comfortable for natural, lasting results."
                }
            {/* {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "From consultation to treatment, we make the process simple and comfortable for natural, lasting results."
                : "From consultation to treatment, we make the process\n simple and comfortable for natural, lasting results."} */}
            </div>
        </Stack__>

        {/* icons and description */}
        <div className={classNames(projectcss.all, sty.freeBox__sfxyV)}>
            <div
            data-plasmic-name={"ourBotoxProcessCircle"}
            data-plasmic-override={overrides.ourBotoxProcessCircle}
            className={classNames(
                projectcss.all,
                sty.ourBotoxProcessCircle
            )}
            />

            <div
            data-plasmic-name={"ourBotoxProcessCircleBg"}
            data-plasmic-override={overrides.ourBotoxProcessCircleBg}
            className={classNames(
                projectcss.all,
                sty.ourBotoxProcessCircleBg
            )}
            >
            <div
                data-plasmic-name={"ourBotoxProcessEllipse1"}
                data-plasmic-override={overrides.ourBotoxProcessEllipse1}
                className={classNames(
                projectcss.all,
                sty.ourBotoxProcessEllipse1
                )}
            />

            <div
                data-plasmic-name={"ourBotoxProcessEllipse2"}
                data-plasmic-override={overrides.ourBotoxProcessEllipse2}
                className={classNames(
                projectcss.all,
                sty.ourBotoxProcessEllipse2
                )}
            />

            <div
                data-plasmic-name={"ourBotoxProcessEllipse3"}
                data-plasmic-override={overrides.ourBotoxProcessEllipse3}
                className={classNames(
                projectcss.all,
                sty.ourBotoxProcessEllipse3
                )}
            />
            </div>
            
            <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__f83H1)}
            >
            <div className={classNames(projectcss.all, sty.freeBox__wjfNi)}>
                <div
                className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__or5Lo
                )}
                >
                {"Step "}
                </div>
                <div
                data-plasmic-name={"ourBotoxProcessNumber"}
                data-plasmic-override={overrides.ourBotoxProcessNumber}
                className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.ourBotoxProcessNumber
                )}
                >
                {"1"}
                </div>
            </div>
            </Stack__>
            <Stack__
            as={"div"}
            data-plasmic-name={"ourBotoxProcessContent"}
            data-plasmic-override={overrides.ourBotoxProcessContent}
            hasGap={true}
            className={classNames(
                projectcss.all,
                sty.ourBotoxProcessContent
            )}
            >
            {/* CONSULTATION */}
            <BotoxProcessCard
                className={classNames(
                "__wab_instance",
                sty.botoxProcessCard___1RJzs
                )}
                description={consultation}
                icon={
                <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__r7ScN)}
                    displayHeight={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "48px"
                        : "100%"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "48px"
                        : "100%"
                    }
                    loading={"lazy"}
                    src={{
                    src: "/icons/document-icon.svg",
                    fullWidth: 73,
                    fullHeight: 72,
                    aspectRatio: 1.013889
                    }}
                />
                }
                title={"\u00a0Consultation"}
            />

            {/* Treatment */}
            <BotoxProcessCard
                className={classNames(
                "__wab_instance",
                sty.botoxProcessCard__yVyJm
                )}
                description={treatment}
                icon={
                <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__kFeTq)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                    src: "/icons/syringe-icon copy.svg",
                    fullWidth: 73,
                    fullHeight: 72,
                    aspectRatio: 1.013889
                    }}
                />
                }
                title={"Treatment"}
            />

            {/* Results */}
            <BotoxProcessCard
                className={classNames(
                "__wab_instance",
                sty.botoxProcessCard__kRbN
                )}
                description={results}
                icon={
                <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__p6Fxk)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                    src: "/icons/verified-icon.svg",
                    fullWidth: 73,
                    fullHeight: 72,
                    aspectRatio: 1.013889
                    }}
                />
                }
                title={"Results"}
            />
            </Stack__>

            <BookNowButton color="white" ctaId={ctaId}/>
        </div>
    </Stack__>
);

export default CadmenOurProcess;
