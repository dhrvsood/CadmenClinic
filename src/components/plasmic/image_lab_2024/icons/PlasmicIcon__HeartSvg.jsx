// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeartSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 12.585c0 6.026 4.824 9.237 8.354 12.112 1.246 1.014 2.446 1.97 3.646 1.97 1.2 0 2.4-.955 3.646-1.971C23.177 21.823 28 18.611 28 12.586c0-6.025-6.6-10.301-12-4.507-5.4-5.794-12-1.52-12 4.506z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartSvgIcon;
/* prettier-ignore-end */
