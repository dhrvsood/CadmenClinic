// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InjectionSvgIcon(props) {
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
          "M12.462 6.76L10.99 8.257 9.283 6.516l1.42-1.448L9.658 4 4 9.765l1.047 1.068 1.42-1.449 1.71 1.743-1.47 1.499 12.715 12.96 5.298.125L26.966 28 28 27.886l-2.706-2.758-.122-5.4L12.462 6.76zm0 1.707l6.46 6.585-4.07 4.148-1.645-1.674 2.041-2.08-.863-.88-2.04 2.08-1.522-1.55 2.041-2.08-.863-.88-2.041 2.08-1.564-1.594 4.066-4.155z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InjectionSvgIcon;
/* prettier-ignore-end */
