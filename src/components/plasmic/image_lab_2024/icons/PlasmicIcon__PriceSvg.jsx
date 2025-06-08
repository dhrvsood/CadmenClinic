// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PriceSvgIcon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16.03 4c-3.012 0-5.756.995-7.379 1.807-.147.074-.283.145-.41.215a8.966 8.966 0 00-.638.378L9.45 9.119l.87.346c3.396 1.714 7.952 1.714 11.35 0l.987-.512L24.403 6.4a10.67 10.67 0 00-1.126-.638C21.662 4.958 18.984 4 16.03 4m-4.295 3.077c-.654-.123-1.3-.285-1.934-.485 1.52-.675 3.787-1.392 6.229-1.392 1.691 0 3.29.344 4.613.78a35.34 35.34 0 00-4.78 1.043c-1.24.359-2.69.32-4.128.054zm10.64 3.376l-.164.083c-3.737 1.885-8.695 1.885-12.432 0l-.155-.079c-5.616 6.161-9.902 17.541 6.405 17.541s11.917-11.591 6.346-17.545zM15.336 16a1.334 1.334 0 000 2.667V16zm1.334-1.333V14h-1.334v.667a2.667 2.667 0 100 5.333v2.667c-.58 0-1.074-.37-1.258-.889a.665.665 0 00-1.3.183.667.667 0 00.044.261A2.667 2.667 0 0015.336 24v.667h1.334V24a2.667 2.667 0 000-5.333V16c.58 0 1.074.37 1.258.889a.667.667 0 101.256-.444 2.666 2.666 0 00-2.514-1.778zm0 5.333v2.667a1.333 1.333 0 100-2.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PriceSvgIcon;
/* prettier-ignore-end */
