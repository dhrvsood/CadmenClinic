/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1046 701"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1045.42 350.308c0 96.516-58.407 183.956-152.954 247.289-94.543 63.331-225.183 102.518-369.508 102.518-144.326 0-274.965-39.187-369.509-102.518C58.902 534.264.5 446.824.5 350.308c0-96.517 58.402-183.957 152.949-247.29C247.993 39.688 378.632.5 522.958.5c144.325 0 274.965 39.187 369.508 102.518 94.547 63.333 152.954 150.773 152.954 247.29z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
