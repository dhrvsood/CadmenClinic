/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse29Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 785 526"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M784.045 262.767c0 72.343-43.774 137.898-114.672 185.389-70.894 47.489-168.863 76.878-277.1 76.878-108.238 0-206.206-29.389-277.101-76.878C44.275 400.665.5 335.11.5 262.767S44.275 124.87 115.172 77.378C186.067 29.888 284.035.5 392.273.5c108.237 0 206.206 29.389 277.1 76.878 70.898 47.492 114.672 113.046 114.672 185.389z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Ellipse29Icon;
/* prettier-ignore-end */
