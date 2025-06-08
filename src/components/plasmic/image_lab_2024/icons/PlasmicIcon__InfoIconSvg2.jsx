// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InfoIconSvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#JV7lCvvXj9f-a)"}>
        <path
          d={
            "M7.999 5.333h.005m-.005 5.334V7.334M14.665 8A6.667 6.667 0 111.332 8a6.667 6.667 0 0113.333 0z"
          }
          stroke={"#B4B6B7"}
          strokeMiterlimit={"10"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"JV7lCvvXj9f-a"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default InfoIconSvg2Icon;
/* prettier-ignore-end */
