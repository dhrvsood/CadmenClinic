// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.964 11.588l-.38.378s-.902.897-3.364-1.552C6.757 7.966 7.66 7.07 7.66 7.07l.238-.238c.59-.585.645-1.525.131-2.212l-1.05-1.402c-.637-.85-1.866-.963-2.595-.238l-1.308 1.3c-.361.36-.603.825-.574 1.342.075 1.322.674 4.166 4.01 7.485 3.54 3.518 6.86 3.658 8.218 3.531.43-.04.803-.258 1.104-.558l1.183-1.177c.8-.794.575-2.156-.448-2.712l-1.592-.866c-.671-.364-1.488-.257-2.013.264z"
        }
        fill={"#0C7A7B"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
