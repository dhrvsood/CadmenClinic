// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse27Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 292 529"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M171.063 528.646A292 292 0 00.704.001L.697 2.92a289.082 289.082 0 01274.018 379.073A289.083 289.083 0 01169.352 526.28l1.711 2.366z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse27Icon;
/* prettier-ignore-end */
