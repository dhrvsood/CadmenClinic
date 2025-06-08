// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1046 671"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1045.42 335.25c0 92.348-58.395 176.023-152.945 236.636C797.93 632.496 667.287 670 522.958 670c-144.33 0-274.973-37.504-369.517-98.114C58.891 511.273.5 427.598.5 335.25c0-92.348 58.39-176.024 152.941-236.637C247.985 38.004 378.628.5 522.958.5 667.287.5 797.93 38.004 892.475 98.613c94.55 60.613 152.945 144.289 152.945 236.637z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
