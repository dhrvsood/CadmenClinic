// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlayButtonIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 55"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#sB8YDZoKsNqMa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M27 54.202c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zm-4.219-17.096l15.188-8.49a1.608 1.608 0 000-2.829L22.78 17.298c-1.125-.629-2.531.157-2.531 1.415V35.69c0 1.257 1.406 2.043 2.531 1.414z"
          }
          fill={"currentColor"}
          fillOpacity={".49"}
        ></path>
      </g>

      <defs>
        <filter
          id={"sB8YDZoKsNqMa"}
          x={"-16"}
          y={"-16"}
          width={"86"}
          height={"86.202"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feGaussianBlur
            in={"BackgroundImageFix"}
            stdDeviation={"8"}
          ></feGaussianBlur>

          <feComposite
            in2={"SourceAlpha"}
            operator={"in"}
            result={"effect1_backgroundBlur_280_2321"}
          ></feComposite>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_280_2321"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default PlayButtonIcon;
/* prettier-ignore-end */
