/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 84 78"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42 46.14s-6.076-4.18-11.646-5.573c-5.57-1.394-12.658 3.716-18.734 8.36-4.71 3.602-7.9 6.925-9.095 8.236a.891.891 0 00-.02 1.2c1.48 1.684 6.356 6.604 16.495 11.47 12.5 6 17 6.5 23 6.5"
        }
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        d={
          "M3 57.333l14.424.32A44.61 44.61 0 0133 60.834v0c2.645.992 5.447 1.5 8.272 1.5H42"
        }
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        d={
          "M42 46.14s6.076-4.18 11.646-5.573c5.57-1.394 12.658 3.716 18.734 8.36 4.71 3.602 7.9 6.925 9.095 8.236a.891.891 0 01.02 1.2c-1.48 1.684-6.356 6.604-16.495 11.47-12.5 6-17 6.5-23 6.5"
        }
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        d={
          "M81 57.333l-14.424.32A44.61 44.61 0 0051 60.834v0a23.559 23.559 0 01-8.272 1.5H42"
        }
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        d={
          "M41.857 40.333c-.457-.935-3.357-5.261-3.357-14.03V10.518m0 0H35m3.5 0H42V2.333h-4.143m4.286 38c.457-.935 3.357-5.261 3.357-14.03V10.518m0 0H49m-3.5 0H42V2.333h4.143"
        }
        stroke={"#000"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={"M40.5 55.333a1.5 1.5 0 103 0h-3zm0-16v16h3v-16h-3z"}
        fill={"#000"}
      ></path>

      <path d={"M38.5 25.833h7"} stroke={"#000"} strokeWidth={"3"}></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
