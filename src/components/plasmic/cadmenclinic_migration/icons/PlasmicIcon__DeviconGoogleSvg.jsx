/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DeviconGoogleSvgIcon(props) {
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

      <g clipPath={"url(#pJuO66CGAavua)"}>
        <path
          d={
            "M5.574.526a7.91 7.91 0 00.541 15.113 8.45 8.45 0 004.045.043A7.14 7.14 0 0013.398 14a7.18 7.18 0 002-3.283 9.287 9.287 0 00.2-4.197h-7.44v3.086h4.31a3.714 3.714 0 01-1.583 2.44 4.522 4.522 0 01-1.741.688 5.162 5.162 0 01-1.888 0 4.65 4.65 0 01-1.756-.767A4.912 4.912 0 013.688 9.54a4.787 4.787 0 010-3.079c.237-.7.63-1.337 1.147-1.864a4.646 4.646 0 014.681-1.222 4.288 4.288 0 011.705 1c.486-.483.971-.968 1.455-1.454.25-.261.523-.51.77-.777A7.65 7.65 0 0010.9.574 8 8 0 005.574.526z"
          }
          fill={"#fff"}
        ></path>

        <path
          d={
            "M5.574.526A8 8 0 0110.9.572a7.65 7.65 0 012.544 1.578c-.25.267-.514.517-.769.777-.485.485-.97.967-1.454 1.448a4.288 4.288 0 00-1.705-1 4.646 4.646 0 00-4.682 1.217 4.907 4.907 0 00-1.148 1.864L1.096 4.45A7.941 7.941 0 015.573.526z"
          }
          fill={"#E33629"}
        ></path>

        <path
          d={
            "M.407 6.437c.14-.69.37-1.358.688-1.987l2.591 2.011a4.788 4.788 0 000 3.079c-.863.667-1.727 1.337-2.591 2.01a7.916 7.916 0 01-.688-5.113z"
          }
          fill={"#F8BD00"}
        ></path>

        <path
          d={
            "M8.159 6.519h7.44a9.287 9.287 0 01-.201 4.197 7.18 7.18 0 01-2 3.283c-.837-.653-1.677-1.3-2.513-1.953a3.715 3.715 0 001.582-2.442H8.16V6.519z"
          }
          fill={"#587DBD"}
        ></path>

        <path
          d={
            "M1.094 11.55c.864-.667 1.728-1.337 2.591-2.01.334.98.97 1.83 1.815 2.428a4.648 4.648 0 001.76.76 5.162 5.162 0 001.888 0 4.523 4.523 0 001.74-.688c.837.653 1.677 1.3 2.513 1.953a7.14 7.14 0 01-3.237 1.683 8.45 8.45 0 01-4.045-.043 7.962 7.962 0 01-5.025-4.082z"
          }
          fill={"#319F43"}
        ></path>
      </g>

      <defs>
        <clipPath id={"pJuO66CGAavua"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default DeviconGoogleSvgIcon;
/* prettier-ignore-end */
