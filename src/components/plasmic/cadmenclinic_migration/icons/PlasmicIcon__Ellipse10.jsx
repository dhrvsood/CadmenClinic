/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1391 1118"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1389.52 558.812c0 308.25-310.83 558.308-694.51 558.308C311.336 1117.12.5 867.062.5 558.812.5 250.561 311.336.5 695.01.5c383.68 0 694.51 250.061 694.51 558.312z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
