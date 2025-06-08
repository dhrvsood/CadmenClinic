// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PinIconSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".25"}
        y={".75"}
        width={"31.5"}
        height={"31.5"}
        rx={"15.75"}
        stroke={"#EAECEE"}
        strokeWidth={".5"}
      ></rect>

      <path
        d={
          "M16 16a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-9.5a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z"
        }
        fill={"#4C8D91"}
      ></path>
    </svg>
  );
}

export default PinIconSvgIcon;
/* prettier-ignore-end */
