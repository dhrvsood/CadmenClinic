// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DocumentIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.333 45.536h21.334c4.159 0 6.228-2.11 6.228-6.288V21.007c0-2.592-.281-3.717-1.888-5.364l-11.09-11.27c-1.526-1.568-2.772-1.909-5.042-1.909h-9.542c-4.138 0-6.228 2.13-6.228 6.309v30.475c0 4.198 2.09 6.288 6.228 6.288zm.16-3.234c-2.069 0-3.154-1.106-3.154-3.114V8.833c0-1.989 1.085-3.135 3.175-3.135h8.92v11.673c0 2.531 1.285 3.776 3.776 3.776h11.45v18.04c0 2.009-1.065 3.115-3.154 3.115H13.493zm13.078-24.189c-.783 0-1.105-.32-1.105-1.124V6.32l11.571 11.793H26.571zm4.822 8.559H16.144c-.722 0-1.244.542-1.244 1.225 0 .703.523 1.246 1.245 1.246h15.248a1.228 1.228 0 001.245-1.246c0-.683-.542-1.225-1.245-1.225zm0 7.011H16.144c-.722 0-1.244.562-1.244 1.265 0 .683.523 1.206 1.245 1.206h15.248c.703 0 1.245-.523 1.245-1.206 0-.703-.542-1.265-1.245-1.265z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DocumentIcon;
/* prettier-ignore-end */
