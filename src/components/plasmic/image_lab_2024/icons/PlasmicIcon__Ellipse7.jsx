// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 241 137"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M240.482 68.2c0 18.573-13.306 35.488-35.038 47.788-21.716 12.292-51.751 19.91-84.953 19.91-33.203 0-63.237-7.618-84.954-19.91C13.806 103.688.5 86.773.5 68.199c0-18.573 13.306-35.488 35.037-47.789C57.254 8.118 87.288.5 120.491.5c33.202 0 63.237 7.618 84.953 19.91 21.732 12.3 35.038 29.216 35.038 47.79z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
