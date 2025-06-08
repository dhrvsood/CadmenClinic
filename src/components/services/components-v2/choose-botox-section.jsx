import React from 'react';
import sty from './choose-botox-section.module.css';
import classNames from 'classnames';
import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point';
import Image from 'next/image';
import IconLayeredCircles from '@/components/v2-components/IconLayeredCircles';
import imageUrlBuilder from '@sanity/image-url'



const ChooseBotoxSection = ({datas}) => {
    return (
        <section className={sty.chooseBotoxSection}>
            <div className={sty.freeBox__znAc}>
                <div className="__wab_flex-container ρfc">
                    <div className={sty.chooseBotoxContent}>
                        <div className="__wab_flex-container ρfc">
                        
                            {(datas?.contentBlocks || []).map((data, index) => {
                     
                                if(index % 2 === 0) {
                                    return (<div key={index} className={sty.freeBox___4FxyF}>
                                        <div className="__wab_flex-container ρfc">
                                            <div className={sty.freeBox__baqLu}>
                                                <div className="__wab_flex-container ρfc">
                                                    <div className={sty.freeBox__pl0Os}>
                                                        <IconLayeredCircles className={sty.iconLayeredCircles}>
                                                            <Image
                                                                alt=""
                                                                width={32}
                                                                height={32}
                                                                className={sty.iconImg}
                                                                src={builder.image(data.icon).url()}
                                                            />
                                                        </IconLayeredCircles>
                                                        <div className={sty.freeBox__bY7E} />
                                                    </div>
                                                    <div className={sty.freeBox___49Qh}>
                                                        <h3 className={classNames(sty.botoxSectioSubtitle)}>
                                                            {data.title}
                                                        </h3>
                                                        <p className={classNames(sty.p___6XT5C)}>
                                                            {data.description}
                                                        </p>
                                                        {(data?.benefits || []).map((benefit, index) => {
                                                            return (
                                                                <div key={index} className={sty.freeBox__zbWca}>
                                                                    <div className={sty.title}>
                                                                        <div className="__wab_flex-container ρfc">
                                                                            <PointIcon className={sty.svg__tKlBw} role="img" />
                                                                            <div className={sty.text__hxHp9}>{benefit.description}</div>
                                                                        </div>
                                                                    </div>
                                                                    <p className={sty.text___6Tk0V}>{benefit.description}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
        
                                                </div>
                                            </div>
                                            <div className={sty.freeBox__opUsc}>
                                                <div className="__wab_flex-container ρfc">
                                                    <div className={sty.freeBox__opUsc}>
                                                        <Image
                                                            alt=""
                                                            width={1300}
                                                            height={860}
                                                            className={sty.img__rCcc8}
                                                            src={builder.image(data.mainImage).url()}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                } else {
                                    return (
                                        <div key={index} className={sty.freeBox___4PqWj}>
                                        <div className="__wab_flex-container ρfc">
                                            <div className={sty.freeBox__uSrLd}>
                                                <Image
                                                    alt=""
                                                    width={1300}
                                                    height={860}
                                                    className={sty.img__rCcc8}
                                                    src={builder.image(data.mainImage).url()}
                                                />
                                            </div>
                                            <div className={sty.freeBox__x3UPp}>
                                                <div className="__wab_flex-container ρfc">
                                                    <div className={sty.freeBox__aTjJf}>
                                                        <IconLayeredCircles className={sty.iconLayeredCircles}>
                                                            <Image
                                                                alt=""
                                                                width={32}
                                                                height={32}
                                                                className={sty.iconImg}
                                                                src={builder.image(data.icon).url()}
                                                            />
                                                        </IconLayeredCircles>
                                                        <div className={sty.freeBox__sbYfv} />
                                                    </div>
                                                    <div className={sty.freeBox__rZTnW}>
                                                        <h3 className={sty.botoxSectioSubtitle}>{data.title}</h3>
                                                        <p className={sty.p__qcv3Y}>
                                                            {data.description}
                                                        </p>
                                                        {(data?.benefits || []).map((benefit, index) => {
                                                            return (
                                                                <div key={index} className={sty.freeBox__zbWca}>
                                                                    <div className={sty.title}>
                                                                        <div className="__wab_flex-container ρfc">
                                                                            <PointIcon className={sty.svg__tKlBw} role="img" />
                                                                            <div className={sty.text__hxHp9}>{benefit.description}</div>
                                                                        </div>
                                                                    </div>
                                                                    <p className={sty.text___6Tk0V}>{benefit.description}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <Image
                                                        alt=""
                                                        width={686}
                                                        height={444}
                                                        className={sty.img__q1OR}
                                                        src={builder.image(data.mainImage).url()}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                               
                            }) }
                        

                           

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseBotoxSection;
