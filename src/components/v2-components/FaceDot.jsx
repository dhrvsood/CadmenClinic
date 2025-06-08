import React from 'react';
import classNames from 'classnames';
import sty from './FaceDot.module.css';

const FaceDot = ({ left, top, selected, handleClick }) => {
    return (
        <div
            className={classNames(sty.root, {
                [sty.rootselected]: selected
            })}
            onClick={handleClick}
            style={{ top, left }}
        >
            <div className={classNames(sty.freeBox___0KVzi)}>
                <div
                    className={classNames(sty.freeBox__bq3GX, {
                        [sty.freeBoxselected__bq3GXBIuk]: selected
                    })}
                />
            </div>
        </div>
    );
};

export default FaceDot;
