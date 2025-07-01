/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaterialSymbolsStar2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.912 10.5l.813-3.513L1 4.625l3.6-.313L6 1l1.4 3.313 3.6.312-2.725 2.362.812 3.513L6 8.637 2.912 10.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaterialSymbolsStar2Icon;
/* prettier-ignore-end */
