// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BackArrowSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.328 13.495a.399.399 0 00.632-.464.4.4 0 00-.092-.126L2.933 8.4h11.065a.4.4 0 100-.8H2.936l4.932-4.502a.4.4 0 00-.54-.592L1.797 7.558a.6.6 0 000 .886l5.532 5.051z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackArrowSvgIcon;
/* prettier-ignore-end */
