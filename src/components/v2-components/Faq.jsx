import React, { useState } from 'react';
import classNames from 'classnames';
import sty from './Faq.module.css';
import Icon11Icon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Icon11';

const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <div
            className={classNames(sty.root, {
                [sty.rootopen]: isOpen
            })}
            onClick={toggleOpen}
        >
            <div
                className={classNames(sty.freeBox__sXkop, {
                    [sty.freeBoxopen__sXkopqD6HF]: isOpen
                })}
            >
                <div className={classNames(sty.text__cb0Ha)}>
                    <h4
                        className={classNames(sty.h4, {
                            [sty.h4open]: isOpen
                        })}
                    >
                        {question}
                    </h4>
                </div>
                <Icon11Icon
                    className={classNames(sty.svg, {
                        [sty.svgopen]: isOpen
                    })}
                    role="img"
                />
            </div>
            <div
                className={classNames(sty.freeBox__rV0Vr, {
                    [sty.freeBoxopen__rV0VrqD6HF]: isOpen
                })}
            >
                <div className={classNames(sty.text__wQbCb)}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Faq;
