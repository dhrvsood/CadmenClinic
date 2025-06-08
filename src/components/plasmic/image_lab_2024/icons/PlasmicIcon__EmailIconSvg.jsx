// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmailIconSvgIcon(props) {
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

      <rect
        x={".25"}
        y={".75"}
        width={"31.5"}
        height={"31.5"}
        rx={"15.75"}
        stroke={"#EAECEE"}
        strokeWidth={".5"}
      ></rect>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M24.8 8.5H7.2c-.66 0-1.2.54-1.2 1.2v12.4c0 1.32 1.08 2.4 2.4 2.4h15.2c1.32 0 2.4-1.08 2.4-2.4V9.7c0-.66-.54-1.2-1.2-1.2zM9.65 10.8a1 1 0 10-1.3 1.52l6.87 5.89a1.2 1.2 0 00.78.285c.286 0 .562-.1.78-.286l6.87-5.89a1 1 0 10-1.3-1.518L16 16.244 9.65 10.8z"
        }
        fill={"#4C8D91"}
      ></path>
    </svg>
  );
}

export default EmailIconSvgIcon;
/* prettier-ignore-end */
