/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TimeSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.095 23.258l-.01.002-.072.035-.02.004-.014-.004-.07-.035c-.011-.003-.02-.002-.025.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.008-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.01.018.43.005.013.008.007.201.093c.013.003.022 0 .03-.008l.003-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.02.02 0 00-.015-.002.02.02 0 00-.012.008l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
        }
        fill={"#9a7f71"}
      ></path>

      <path
        d={
          "M12.5 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4a1 1 0 00-1 1v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L13.5 11.586V7a1 1 0 00-1-1z"
        }
        fill={"#0C7A7B"}
      ></path>
    </svg>
  );
}

export default TimeSvgIcon;
/* prettier-ignore-end */
