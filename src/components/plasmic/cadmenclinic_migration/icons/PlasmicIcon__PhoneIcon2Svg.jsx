/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PhoneIcon2SvgIcon(props) {
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
          "M19.557 18.406l-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654l-1.26-1.683c-.764-1.02-2.24-1.155-3.114-.285l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.86 4.238.517-.048.965-.31 1.326-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.786-.309-2.416.317z"
        }
        fill={"#9a7f71"}
      ></path>
    </svg>
  );
}

export default PhoneIcon2SvgIcon;
/* prettier-ignore-end */
