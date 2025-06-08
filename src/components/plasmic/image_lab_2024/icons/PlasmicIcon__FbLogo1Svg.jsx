// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FbLogo1SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 12.03C24 5.39 18.624 0 12 0S0 5.39 0 12.03c0 5.823 4.128 10.67 9.6 11.79v-8.18H7.2v-3.61h2.4V9.023a4.21 4.21 0 014.2-4.211h3v3.609h-2.4c-.66 0-1.2.541-1.2 1.203v2.406h3.6v3.61h-3.6V24c6.06-.602 10.8-5.726 10.8-11.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FbLogo1SvgIcon;
/* prettier-ignore-end */
