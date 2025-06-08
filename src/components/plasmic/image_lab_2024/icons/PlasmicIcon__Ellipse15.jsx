// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 721 408"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M719.515 203.768c0 56.01-40.115 106.818-105.19 143.651-65.061 36.825-154.974 59.618-254.318 59.618-99.343 0-189.257-22.793-254.317-59.618C40.614 310.586.5 259.778.5 203.768c0-56.009 40.114-106.817 105.19-143.65C170.75 23.293 260.664.5 360.007.5c99.344 0 189.257 22.793 254.318 59.617 65.075 36.834 105.19 87.642 105.19 143.651z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse15Icon;
/* prettier-ignore-end */
