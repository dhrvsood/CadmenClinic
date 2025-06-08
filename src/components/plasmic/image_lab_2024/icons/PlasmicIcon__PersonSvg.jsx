// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PersonSvgIcon(props) {
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
          "M15.997 15.18c-1.1 0-2.04-.392-2.825-1.176-.784-.784-1.176-1.725-1.175-2.824.001-1.098.393-2.04 1.175-2.826s1.724-1.177 2.825-1.172a3.886 3.886 0 012.826 1.173c.782.778 1.174 1.72 1.174 2.827.001 1.106-.39 2.048-1.174 2.824a3.914 3.914 0 01-2.826 1.174zm-9.333 9.642v-2.195c0-.55.16-1.065.48-1.544a3.23 3.23 0 011.293-1.117 18.9 18.9 0 013.78-1.358 16.16 16.16 0 013.78-.453c1.262 0 2.523.151 3.783.453 1.26.303 2.52.755 3.776 1.358.542.265.973.637 1.293 1.117.321.48.482.994.482 1.544v2.195H6.664z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PersonSvgIcon;
/* prettier-ignore-end */
