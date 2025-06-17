/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 25"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.557 14.406l-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L8.375 4.36c-.764-1.02-2.24-1.155-3.114-.285l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.86 4.238.517-.048.965-.31 1.326-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.786-.309-2.416.317z"
        }
        fill={"#9a7f71"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
