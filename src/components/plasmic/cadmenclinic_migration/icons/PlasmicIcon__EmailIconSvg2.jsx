/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmailIconSvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.866.667H1.133c-.44 0-.8.36-.8.8v8.266c0 .88.72 1.6 1.6 1.6h10.133c.88 0 1.6-.72 1.6-1.6V1.466c0-.44-.36-.8-.8-.8zM2.766 2.2A.667.667 0 101.9 3.213L6.48 7.14a.8.8 0 00.52.19.8.8 0 00.52-.19l4.58-3.927a.668.668 0 00-.376-1.188.667.667 0 00-.491.175L7 5.83 2.766 2.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmailIconSvg2Icon;
/* prettier-ignore-end */
