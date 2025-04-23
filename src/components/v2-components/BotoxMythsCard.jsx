import React from 'react';
import classNames from 'classnames';
import sty from './BotoxMythsCard.module.css';

const BotoxMythsCard = ({ number, title, fact, description }) => {
    return (
        <div className={classNames(sty.root)}>
            <div className={classNames(sty.freeBox__qZv)}>
                <div className={classNames(sty.freeBox__gIlHd)}>
                    <div className={classNames(sty.freeBox__sojbq)}>
                        <div className="__wab_flex-container ρfc">
                            <div className={classNames(sty.text___7EQvV)}>Myth #</div>
                            <div className={classNames(sty.text__ozrfs)}>{number || '1'}</div>
                            <div className={classNames(sty.text__sQioD)}>:</div>
                        </div>
                    </div>
                    <div className="__wab_flex-container ρfc">
                        <div className={classNames(sty.text__xjWp)}>{title}</div>
                    </div>
                </div>
            </div>
            <div className={classNames(sty.freeBox__ggRdm)}>
                <div className="__wab_flex-container ρfc">
                    <div className={classNames(sty.freeBox___1K9Us)}>
                        <div className="__wab_flex-container ρfc">
                            <span className={classNames(sty.span)}>
                                <div
                                    className="__wab_expr_html_text"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            fact
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="__wab_flex-container ρfc">
                    <div className={classNames(sty.text__y2HOx)}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotoxMythsCard;
