/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorSvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.25 4.668l3.452 5.436a.7.7 0 01.03.728.406.406 0 01-.03.09l-.196.393c-2.282 4.565-7.782 9.142-12.883 9.148h-1.326c-5.096 0-10.6-4.583-12.872-9.148l-.196-.392a.327.327 0 01-.024-.06.7.7 0 01.013-.759L3.63 4.732c.236-.49 1.003-1.522 1.003-1.522A6.81 6.81 0 019.798.847a6.815 6.815 0 014.156 1.4 6.815 6.815 0 014.156-1.4c2.064 0 3.92.922 5.17 2.369 0 0 .75 1.014.97 1.452zM2.042 10.843l2.06.622a34.018 34.018 0 0019.725 0l2.054-.62-4.66-1.582a22.624 22.624 0 00-14.526 0l-4.653 1.58z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorSvg2Icon;
/* prettier-ignore-end */
