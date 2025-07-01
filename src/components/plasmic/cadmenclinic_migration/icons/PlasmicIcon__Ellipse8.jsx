/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 828 469"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M826.943 234.171c0 64.405-46.127 122.814-120.922 165.149-74.781 42.327-178.124 68.522-292.3 68.522-114.175 0-217.518-26.195-292.298-68.522C46.627 356.985.5 298.576.5 234.171S46.627 111.358 121.423 69.022C196.203 26.695 299.546.5 413.721.5c114.176 0 217.519 26.195 292.3 68.522 74.795 42.336 120.922 100.744 120.922 165.149z"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
      ></path>
    </svg>
  );
}

export default Ellipse8Icon;
/* prettier-ignore-end */
