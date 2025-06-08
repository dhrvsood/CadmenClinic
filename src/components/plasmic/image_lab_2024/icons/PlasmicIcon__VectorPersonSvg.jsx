// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorPersonSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 7.585c0 6.027 4.824 9.238 8.354 12.113C9.6 20.71 10.8 21.667 12 21.667c1.2 0 2.4-.955 3.646-1.97C19.177 16.823 24 13.611 24 7.586S17.4-2.716 12 3.079C6.6-2.715 0 1.56 0 7.585z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorPersonSvgIcon;
/* prettier-ignore-end */
