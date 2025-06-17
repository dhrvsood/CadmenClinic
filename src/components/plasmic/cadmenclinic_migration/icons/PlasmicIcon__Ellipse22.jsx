/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse22Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 584 584"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"292"}
        cy={"292"}
        r={"291"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default Ellipse22Icon;
/* prettier-ignore-end */
