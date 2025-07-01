/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 83 82"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M66.416 31.333v32a3 3 0 01-3 3h-58a3 3 0 01-3-3v-44a3 3 0 013-3h46.5"
        }
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <circle
        cx={"66.916"}
        cy={"16.333"}
        r={"14.5"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></circle>

      <path
        d={"M59.916 15.833l4.5 4.5 9.5-9m-33 29h10.5m-10.5-11h19"}
        stroke={"#000"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>

      <path d={"M2.417 53.333h64"} stroke={"#000"} strokeWidth={"3"}></path>

      <path
        d={"M25.916 66.333v5a9 9 0 01-9 9h-6"}
        stroke={"#000"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M44.416 66.333v-1.5h-3v1.5h3zm13.5 15.5a1.5 1.5 0 000-3v3zm-16.5-15.5v5h3v-5h-3zm10.5 15.5h6v-3h-6v3zm-10.5-10.5c0 5.8 4.702 10.5 10.5 10.5v-3a7.5 7.5 0 01-7.5-7.5h-3z"
        }
        fill={"#000"}
      ></path>

      <path
        d={
          "M10.916 80.333h47m-35-37s3.766-1.46 6.158-3.892c2.392-2.432 2.842-3.892 2.842-6.324s-.9-4.378-2.842-5.351a4.06 4.06 0 00-1.235-.381c-2-.293-3.68 1.218-4.922 2.813v0m-.001 13.135s-3.765-1.46-6.157-3.892c-2.393-2.432-2.843-3.892-2.843-6.324s.9-4.378 2.843-5.351c.403-.202.823-.32 1.235-.381 2-.293 3.68 1.218 4.922 2.813v0"
        }
        stroke={"#000"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
