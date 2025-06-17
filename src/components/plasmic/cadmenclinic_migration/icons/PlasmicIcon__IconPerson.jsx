/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconPersonIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 11.385a2.89 2.89 0 01-2.119-.882A2.885 2.885 0 019 8.385c0-.824.294-1.53.881-2.12A2.865 2.865 0 0112 5.386a2.915 2.915 0 012.119.88c.587.583.88 1.29.881 2.12 0 .83-.293 1.536-.881 2.118a2.936 2.936 0 01-2.119.881zm-7 7.231V16.97c0-.413.12-.799.36-1.158.24-.36.564-.64.97-.838a14.173 14.173 0 012.834-1.018c.945-.227 1.89-.34 2.836-.34s1.892.113 2.837.34c.945.227 1.89.566 2.832 1.018.407.199.73.478.97.838s.361.745.361 1.158v1.646H5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPersonIcon;
/* prettier-ignore-end */
