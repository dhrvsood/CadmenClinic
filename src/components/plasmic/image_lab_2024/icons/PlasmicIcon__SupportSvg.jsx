// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SupportSvgIcon(props) {
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
          "M15.997 2.667C8.645 2.667 2.664 8.648 2.664 16v5.524C2.664 22.89 3.86 24 5.331 24h1.333a1.333 1.333 0 001.333-1.333V15.81a1.333 1.333 0 00-1.333-1.334h-1.21c.74-5.16 5.18-9.142 10.543-9.142 5.363 0 9.803 3.982 10.544 9.142h-1.21a1.334 1.334 0 00-1.334 1.334V24a2.67 2.67 0 01-2.666 2.667h-2.667v-1.333h-5.333v4h8A5.339 5.339 0 0026.664 24c1.47 0 2.667-1.11 2.667-2.476V16c0-7.352-5.982-13.333-13.334-13.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SupportSvgIcon;
/* prettier-ignore-end */
