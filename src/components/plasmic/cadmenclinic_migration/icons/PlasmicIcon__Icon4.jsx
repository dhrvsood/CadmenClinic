/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 39 37"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M38.5 19H5M19.5 1.5l-17 17 17 17"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
