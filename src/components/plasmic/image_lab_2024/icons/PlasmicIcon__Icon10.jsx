// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12 12"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.696.086a1.75 1.75 0 00-2.097.869l-.47.92a.583.583 0 01-.255.254l-.92.47a1.75 1.75 0 00-.87 2.097l.32.983a.583.583 0 010 .359l-.318.983a1.75 1.75 0 00.869 2.097l.919.47a.58.58 0 01.254.255l.47.92a1.75 1.75 0 002.098.869l.983-.319a.583.583 0 01.359 0l.983.318a1.75 1.75 0 002.097-.869l.47-.92a.583.583 0 01.254-.254l.92-.47a1.75 1.75 0 00.87-2.097l-.32-.983a.584.584 0 010-.36l.319-.982a1.75 1.75 0 00-.869-2.097l-.92-.47a.583.583 0 01-.254-.255l-.47-.92A1.75 1.75 0 007.021.085l-.983.319a.583.583 0 01-.36 0L4.697.086zM3.214 6.129a.583.583 0 11.825-.825L5.244 6.51a.046.046 0 00.064 0l2.856-2.856a.583.583 0 11.825.826L5.5 7.966a.318.318 0 01-.45 0L3.214 6.13z"
        }
        fill={"#157AD9"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
