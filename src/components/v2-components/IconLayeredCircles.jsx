import React from 'react';
import classNames from 'classnames';
import sty from './IconLayeredCircles.module.css';
import Icon9Icon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Icon9';

const IconLayeredCircles = ({ children }) => {
  return (
    <div className={classNames(sty.root)}>
      <div className={classNames(sty.freeBox)}>
          {children || <Icon9Icon className={classNames(sty.svg__qHuxL)} role="img" />}
        </div>
    </div>
  );
};

export default IconLayeredCircles;
