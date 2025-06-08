// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.462 2.76L6.99 4.257 5.283 2.516l1.42-1.448L5.658 0 0 5.765l1.047 1.068 1.42-1.449 1.71 1.743-1.47 1.499 12.715 12.96 5.298.125L22.966 24 24 23.886l-2.706-2.758-.122-5.4L8.462 2.76zm0 1.707l6.46 6.585-4.07 4.148-1.644-1.674 2.04-2.08-.863-.88-2.04 2.08-1.522-1.55 2.041-2.08-.863-.88-2.041 2.08-1.564-1.594 4.066-4.155z"
        }
        fill={"#4C8D91"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
