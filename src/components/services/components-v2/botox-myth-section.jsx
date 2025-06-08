import React from 'react';
import classNames from 'classnames';
import sty from './botox-myth-section.module.css';
import BotoxMythsSlider from '@/components/BotoxMythsSlider/BotoxMythsSlider';
import BotoxMythsCard from '@/components/v2-components/BotoxMythsCard';
import useIsScreen from '@/helpers/useIsMobile';

const BotoxMythsSection = ({ data }) => {
    const isMobile = useIsScreen('mobileOnly');

    return (
        <section className={classNames(sty.botoxMythsSection)}>
            <div className={classNames(sty.text__b6CEt)}>
                {data.title}
            </div>

            <div className={classNames(sty.freeBox__coT0D)}>
                <div className={classNames(sty.freeBox__kWt6W)}>
                    <div className={classNames(sty.mythsDesktop)}>
                        <BotoxMythsSlider
                            className={classNames(sty.botoxMythsSlider__vugRo)}
                            isDarkBg={false}
                            settings={{ dots: true, infinite: true, speed: 500, slidesToShow: isMobile ? 1 : 2, slidesToScroll: 1 }}
                        >
                            {(data.cards || []).map((card, index) => {
                                return (
                                    <BotoxMythsCard
                                        key={index}
                                        className={classNames(sty.botoxMythsCard__q31NC)}
                                        number={index + 1}
                                        title={card.title}
                                        fact={card.fact}
                                    />
                                )
                            })}
                        </BotoxMythsSlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BotoxMythsSection;
