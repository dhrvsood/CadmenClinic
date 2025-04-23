// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorHeartSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 8.18c-1.1 0-2.041-.392-2.825-1.176C6.39 6.22 5.999 5.28 6 4.18c0-1.099.392-2.04 1.175-2.827C7.957.568 8.899.177 10 .181a3.886 3.886 0 012.825 1.174C13.608 2.133 14 3.075 14 4.18c0 1.107-.39 2.048-1.175 2.824A3.914 3.914 0 0110 8.18zM.667 17.821v-2.194c0-.55.16-1.065.48-1.544a3.23 3.23 0 011.293-1.118 18.9 18.9 0 013.779-1.357A16.17 16.17 0 0110 11.155c1.261 0 2.522.15 3.783.453 1.26.302 2.519.755 3.776 1.357.542.265.973.638 1.293 1.118.32.479.481.993.481 1.544v2.194H.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorHeartSvgIcon;
/* prettier-ignore-end */
