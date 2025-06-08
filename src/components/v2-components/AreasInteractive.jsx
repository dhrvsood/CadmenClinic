import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import sty from './AreasInteractive.module.css';
import SelectPill from '@/components/v2-components/SelectPill';
import AreaCard from '@/components/v2-components/AreaCard';
import FaceDot from '@/components/v2-components/FaceDot';

const AreasInteractive = ({ data = [], selected, onSelectedChange, layout = '', children, slot }) => {
    const [currentSelected, setCurrentSelected] = useState(selected || '');

    useEffect(() => {
        onSelectedChange?.(currentSelected);
    }, [currentSelected]);

    const isNoImage = layout === 'noImage';

    return (
        <section className={classNames(sty.faceSection, { [sty.faceSectionlayout_noImage]: isNoImage })}>
            <div className={classNames(sty.columns)}>
                <div className="__wab_flex-container ρfc">
                    <div className={classNames(sty.column__qli0D)}>
                        <div className={classNames(sty.freeBox__dQDpa, { [sty.freeBoxlayout_noImage__dQDpaWahVz]: isNoImage })}>
                            <div className="__wab_flex-container ρfc">
                                <div className={classNames(sty.faceHeader)}>
                                    <div className="__wab_flex-container ρfc">
                                        <h2 className={classNames(sty.h2)}>
                                            <div className={classNames(sty.text__oPcFl)}>
                                                {children || (
                                                    <>
                                                        Achieve Flawless Skin at{' '}
                                                        <span style={{ fontWeight: 500, fontStyle: 'italic', color: '#D19D51' }}>
                                                            Affordable Prices
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </h2>
                                        <p className={classNames(sty.p)}>
                                            {slot}
                                        </p>
                                    </div>
                                </div>

                                <div className={classNames(sty.freeBox___61Zze)}>
                                    {!isNoImage && (
                                        <div className={classNames(sty.facePills)}>
                                            <div className="__wab_flex-container ρfc">
                                                {data.map((item, index) => (
                                                    <SelectPill
                                                        key={index}
                                                        value={item.name}
                                                        selected={item.name === currentSelected}
                                                        handleClick={() => setCurrentSelected(item.name)}
                                                        className={classNames('__wab_instance', sty.selectPill__mcu8T)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={classNames(sty.freeBox__t5Ube, { [sty.freeBoxlayout_noImage__t5UbeWahVz]: isNoImage })}>
                            <div className="__wab_flex-container ρfc">
                                <div className={classNames(sty.freeBox__iCato, { [sty.freeBoxlayout_noImage__iCatoWahVz]: isNoImage })}>
                                    <div className="__wab_flex-container ρfc">
                                        {data.map((item, index) => (
                                            <SelectPill
                                                key={index}
                                                value={item.name}
                                                selected={item.name === currentSelected}
                                                handleClick={() => setCurrentSelected(item.name)}
                                                className={classNames('__wab_instance', sty.selectPill__hOdou, {
                                                    [sty.selectPilllayout_noImage__hOdouWahVz]: isNoImage
                                                })}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="__wab_flex-container ρfc">
                        <div className={classNames(sty.column__kiWqT, { [sty.columnlayout_noImage__kiWqTWahVz]: isNoImage })}>
                            {isNoImage && (
                                <AreaCard
                                    className={classNames('__wab_instance', sty.faceCard2, { [sty.faceCard2layout_noImage]: isNoImage })}
                                    data={data.find((item) => item.name === currentSelected)}
                                    types="content"
                                />
                            )}
                            <div className={classNames(sty.faceDots, { [sty.faceDotslayout_noImage]: isNoImage })}>
                                {!isNoImage && (
                                    <img
                                        className={classNames(sty.img__sZKo, { [sty.imglayout_noImage__sZKoWahVz]: isNoImage })}
                                        src="/plasmic/image_lab_2024/images/image15.heic"
                                        alt=""
                                    />
                                )}
                                <div className={classNames(sty.dots, { [sty.dotslayout_noImage]: isNoImage })}>
                                    <div className="__wab_flex-container ρfc">
                                        {data.map((item, index) => (
                                            <FaceDot
                                                key={index}
                                                left={item.face_dot?.left}
                                                top={item.face_dot?.top}
                                                value={item.name}
                                                selected={item.name === currentSelected}
                                                handleClick={() => setCurrentSelected(item.name)}
                                                className={classNames('__wab_instance', sty.faceDot)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <AreaCard
                                    className={classNames('__wab_instance', sty.faceCard, { [sty.faceCardlayout_noImage]: isNoImage })}
                                    data={data.find((item) => item.name === currentSelected)}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreasInteractive;
