// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeartSvg4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 9.44c0 4.519 3.618 6.927 6.266 9.083C10.2 19.283 11.1 20 12 20c.9 0 1.8-.716 2.734-1.478C17.383 16.368 21 13.96 21 9.44c0-4.519-4.95-7.726-9-3.38-4.05-4.346-9-1.14-9 3.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartSvg4Icon;
/* prettier-ignore-end */
