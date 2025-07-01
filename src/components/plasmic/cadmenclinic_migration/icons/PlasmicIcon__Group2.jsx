/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
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
          "M8 0a8 8 0 00-8 8v5.333A2.667 2.667 0 002.667 16h1.228a1.778 1.778 0 001.59-.983l.156-.311a5.862 5.862 0 01-.804-.676c-.977-.983-1.726-2.426-1.726-4.252 0-.654.11-1.303.31-1.918.09-.272.335-.304.579-.304a4.44 4.44 0 003.636-1.89.444.444 0 01.728 0A4.444 4.444 0 0012 7.557c.244 0 .49.032.579.304a6.25 6.25 0 01.31 1.918c0 1.826-.75 3.27-1.726 4.252a5.941 5.941 0 01-.804.676l.156.31a1.778 1.778 0 001.59.984h1.228A2.667 2.667 0 0016 13.333V8a8 8 0 00-8-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
