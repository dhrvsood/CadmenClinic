import React, { useState } from 'react';
import classNames from 'classnames';
import sty from './TextToggler.module.css';

const TextToggler = ({ text = '', height = '200px', white = false }) => {
    const [isShowText, setIsShowText] = useState(false);

    const toggleText = () => {
        setIsShowText(!isShowText);
    };

    const iconSrc = white
        ? '/plasmic/image_lab_2024/images/arrowDownSvg2.svg'
        : '/plasmic/image_lab_2024/images/arrowDownSvg.svg';

    return (
        <div className={classNames(sty.root, { [sty.rootwhite]: white })}>
            <div
                className={classNames(sty.freeBox__n0TI)}
                style={{ height: isShowText ? '100%' : height }}
            >
                <div
                    className={classNames(sty.text__jYwe, {
                        [sty.textwhite__jYweqjObc]: white
                    })}
                >
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>

            <div className={classNames(sty.freeBox__zau41)}>
                {isShowText && (
                    <div
                        className={classNames(sty.freeBox___6KhjE)}
                        onClick={toggleText}
                    >
                        <div
                            className={classNames(sty.text__ssRxZ, {
                                [sty.textwhite__ssRxZqjObc]: white
                            })}
                        >
                            Read less
                        </div>
                        <img
                            alt=""
                            className={classNames(sty.img___09D1V, {
                                [sty.imgwhite___09D1VqjObc]: white
                            })}
                            src={iconSrc}
                            width={16}
                            height={16}
                        />
                    </div>
                )}

                {!isShowText && (
                    <div
                        className={classNames(sty.freeBox__s6G3P, {
                            [sty.freeBoxwhite__s6G3PqjObc]: white
                        })}
                        onClick={toggleText}
                    >
                        <div
                            className={classNames(sty.text___3ENgm, {
                                [sty.textwhite___3ENgmqjObc]: white
                            })}
                        >
                            Read more
                        </div>
                        <img
                            alt=""
                            className={classNames(sty.img__wayha, {
                                [sty.imgwhite__wayhAqjObc]: white
                            })}
                            src={iconSrc}
                            width={16}
                            height={16}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextToggler;
