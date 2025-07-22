import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { Stack as Stack__ } from "@plasmicapp/react-web";

import projectcss from "@/components/plasmic/blank_website/plasmic.module.css";
import sty from "@/components/plasmic/cadmenclinic_migration/PlasmicBotoxSeo.module.css";

const CadmenWantToLearnMore = ({
  overrides = {},
  title = {},
  description,
}) => {
  const { prefix, emphasis, end } = title;

  const baseSpan = "plasmic_default__all plasmic_default__span";
  const whiteStyle = { color: "#FFFFFF" };
  const goldStyle = { color: "#E4C08C" };

  const hasPrefixOrEnd = Boolean(prefix || end);

  const finalTitle = hasPrefixOrEnd ? (
    <>
      {prefix && <span className={baseSpan} style={whiteStyle}>{prefix}</span>}
      {emphasis && <span className={baseSpan} style={goldStyle}>{emphasis}</span>}
      {end && <span className={baseSpan} style={whiteStyle}>{end}</span>}
    </>
  ) : (
    <>
      <span className={baseSpan} style={whiteStyle}>Want to learn more about if </span>
      {emphasis && <span className={baseSpan} style={goldStyle}>{emphasis}</span>}
      <span className={baseSpan} style={whiteStyle}> for you?</span>
    </>
  );

  const finalDescription =
    description ??
    "Schedule a Consultation with our team to discuss a treatment plan tailored for you";

  return (
    <Stack__
      as="section"
      data-plasmic-name="ctaSection"
      data-plasmic-override={overrides.ctaSection}
      hasGap
      className={classNames(projectcss.all, sty.ctaSection)}
    >
      <Stack__
        as="div"
        hasGap
        className={classNames(projectcss.all, sty.freeBox__dlFxX)}
      >
        <div
          data-plasmic-name="heading9"
          data-plasmic-override={overrides.heading9}
          className={classNames(projectcss.all, projectcss.__wab_text, sty.heading9)}
        >
          {finalTitle}
        </div>
        <div
          data-plasmic-name="supportingText8"
          data-plasmic-override={overrides.supportingText8}
          className={classNames(projectcss.all, projectcss.__wab_text, sty.supportingText8)}
        >
          {finalDescription}
        </div>
      </Stack__>

      <Link href="/book-now" className="mt-[10px] w-full md:w-auto">
        <button className="button white w-full md:w-auto">Book Now</button>
      </Link>
    </Stack__>
  );
};

export default CadmenWantToLearnMore;