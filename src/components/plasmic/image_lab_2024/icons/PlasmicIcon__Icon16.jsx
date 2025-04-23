// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 22 16"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M21.333 8a1 1 0 00-1-1H1.667a1 1 0 000 2h18.666a1 1 0 001-1zm0-6.667a1 1 0 00-1-1H1.667a1 1 0 000 2h18.666a1 1 0 001-1zm0 13.334a1 1 0 00-1-1H1.667a1 1 0 000 2h18.666a1 1 0 001-1z"
        }
        fill={"#535556"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
