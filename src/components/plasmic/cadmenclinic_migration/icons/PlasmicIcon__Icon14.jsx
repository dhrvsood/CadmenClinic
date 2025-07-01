/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 25"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2.5c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4a1 1 0 00-1 1v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L13 12.086V7.5a1 1 0 00-1-1z"
        }
        fill={"#9a7f71"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
