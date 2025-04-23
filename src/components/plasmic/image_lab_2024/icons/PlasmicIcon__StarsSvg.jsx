// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarsSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.336 1.531l-1.68 3.667-3.653 1.667 3.653 1.68 1.68 3.653 1.667-3.653 3.666-1.68-3.666-1.667m-15 .333l-3.334 7.334-7.333 3.333 7.333 3.333 3.334 7.334 3.333-7.334 7.333-3.333-7.333-3.333m10 7.333l-1.68 3.653-3.653 1.68 3.653 1.667 1.68 3.667 1.667-3.667 3.666-1.667-3.666-1.68"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarsSvgIcon;
/* prettier-ignore-end */
