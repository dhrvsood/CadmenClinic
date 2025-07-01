/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse28Icon(props) {
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

      <path
        d={
          "M584 292c0 161.267-130.733 292-292 292S0 453.267 0 292 130.733 0 292 0s292 130.733 292 292zM2.92 292c0 159.654 129.426 289.08 289.08 289.08S581.08 451.654 581.08 292 451.654 2.92 292 2.92 2.92 132.346 2.92 292z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse28Icon;
/* prettier-ignore-end */
