import React from 'react';
import classNames from 'classnames';
import sty from './SelectPill.module.css';

const SelectPill = ({ value = 'Forehead', selected = false, handleClick }) => {
  return (
    <div
      className={classNames(
        sty.root,
        { [sty.rootselected]: selected }
      )}
      onClick={handleClick}
    >
      <div
        className={classNames(
          sty.text,
          { [sty.textselected]: selected }
        )}
      >
        {value}
      </div>
    </div>
  );
};

export default SelectPill;