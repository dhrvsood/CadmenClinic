import React from "react";
import Link from "next/link";
import classNames from "classnames";
import IconIcon from "@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Icon";
import CheckSvgIcon from "@/components/plasmic/image_lab_2024/icons/PlasmicIcon__CheckSvg";
import sty from "./Button.module.css";

const Button = ({
  link,
  startIcon,
  endIcon,
  children = "Button",
  size,
  shape,
  color,
  isDisabled,
  showStartIcon,
  showEndIcon,
  ...rest
}) => {
  const isLink = Boolean(link);
  const Component = isLink ? Link : "button";
  const componentProps = isLink ? { href: link } : { type: "button" };

  return (
    <Component
      {...componentProps}
      className={classNames(
        sty.root,
        {
          [sty[`rootsize_${size}`]]: size,
          [sty[`rootshape_${shape}`]]: shape,
          [sty[`rootcolor_${color}`]]: color,
          [sty.rootisDisabled]: isDisabled,
          [sty.rootshowStartIcon]: showStartIcon,
          [sty.rootshowEndIcon]: showEndIcon
        },
        rest.className
      )}
      disabled={isDisabled}
    >
      {showStartIcon && (
        <div className={classNames(sty.startIconContainer)}>
          {startIcon || <CheckSvgIcon className={sty.svg__dbAKh} role="img" />}
        </div>
      )}

      <div className={classNames(sty.contentContainer)}>
        <span className={classNames(sty.slotTargetChildren)}>{children}</span>
      </div>

      {showEndIcon && (
        <div className={classNames(sty.endIconContainer)}>
          {endIcon || <IconIcon className={sty.svg__dp3HQ} role="img" />}
        </div>
      )}
    </Component>
  );
};

export default Button;
