// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaterialSymbolsStarIcon(props) {
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
          "M2.913 10.5l.812-3.513L1 4.625l3.6-.313L6 1l1.4 3.313 3.6.312-2.725 2.362.813 3.513L6 8.637 2.913 10.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaterialSymbolsStarIcon;
/* prettier-ignore-end */
