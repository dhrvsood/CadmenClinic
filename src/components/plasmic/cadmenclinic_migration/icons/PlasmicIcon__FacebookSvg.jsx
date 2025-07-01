/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.473 1.667H5.508a3.846 3.846 0 00-3.562 2.392 3.82 3.82 0 00-.28 1.478v8.926a3.812 3.812 0 001.109 2.733 3.845 3.845 0 002.732 1.137h4.07V12.38H8.023a.367.367 0 01-.365-.363v-1.911a.372.372 0 01.375-.373h1.546V7.87a3.026 3.026 0 01.851-2.415 3.051 3.051 0 012.402-.91h1.585a.368.368 0 01.365.372v1.616a.362.362 0 01-.365.362h-.96c-1.056 0-1.258.497-1.258 1.223v1.606h2.304a.365.365 0 01.365.41l-.23 1.912a.363.363 0 01-.365.325h-2.065v5.954h2.286a3.847 3.847 0 002.732-1.137 3.823 3.823 0 001.108-2.734V5.537a3.805 3.805 0 00-1.114-2.74 3.846 3.846 0 00-2.746-1.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookSvgIcon;
/* prettier-ignore-end */
