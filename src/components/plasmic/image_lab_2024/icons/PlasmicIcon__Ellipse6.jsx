// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 567 321"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M566.21 160.382c0 44.029-31.535 83.99-82.739 112.972-51.189 28.974-121.94 46.91-200.116 46.91-78.176 0-148.927-17.936-200.116-46.91C32.035 244.372.5 204.411.5 160.382c0-44.029 31.535-83.99 82.739-112.972C134.428 18.436 205.179.5 283.355.5c78.176 0 148.927 17.936 200.116 46.91 51.204 28.982 82.739 68.943 82.739 112.972z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
