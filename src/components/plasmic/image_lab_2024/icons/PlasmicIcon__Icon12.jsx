// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 88 88"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#-52KxpF20BR9a)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M44 88c24.3 0 44-19.7 44-44S68.3 0 44 0 0 19.7 0 44s19.7 44 44 44zm-6.875-27.86l24.75-13.834a2.62 2.62 0 000-4.612l-24.75-13.833C35.292 26.836 33 28.117 33 30.166v27.668c0 2.05 2.292 3.33 4.125 2.305z"
          }
          fill={"#fff"}
          fillOpacity={".85"}
        ></path>
      </g>

      <defs>
        <filter
          id={"-52KxpF20BR9a"}
          x={"-16"}
          y={"-16"}
          width={"120"}
          height={"120"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feGaussianBlur
            in={"BackgroundImageFix"}
            stdDeviation={"8"}
          ></feGaussianBlur>

          <feComposite
            in2={"SourceAlpha"}
            operator={"in"}
            result={"effect1_backgroundBlur_2031_2258"}
          ></feComposite>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_2031_2258"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
