// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 597 338"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M596.177 168.863c0 46.371-33.212 88.452-87.128 118.969-53.901 30.508-128.397 49.394-210.711 49.394-82.313 0-156.81-18.886-210.71-49.394C33.712 257.315.5 215.234.5 168.863c0-46.371 33.212-88.452 87.127-118.97C141.529 19.387 216.025.5 298.339.5s156.81 18.886 210.711 49.394c53.916 30.517 87.128 72.598 87.128 118.969z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse14Icon;
/* prettier-ignore-end */
