import React from 'react';
import classNames from 'classnames';
import IconPersonIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__IconPerson';
import sty from './BenefitsOfBotoxCard.module.css';

const BenefitsOfBotoxCard = ({ icon, title, slot }) => {
  return (
       <div className={classNames(sty.root, 'benefits-of-botox-card')}>
      <div className={classNames(sty.freeBox__jxaN)}>
        <div className={classNames(sty.freeBox__ntqs)}>
          <div className="__wab_flex-container ρfc">
            <div className={classNames(sty.freeBox___2CnZo)}>
              <div className="__wab_flex-container ρfc">
                <div className={classNames(sty.proiconsPerson)}>
                  <div className="__wab_flex-container ρfc">
                    {icon || <IconPersonIcon className={classNames(sty.svg__nrtL5)} role="img" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(sty.freeBox__qyMeM)}>
          <div className="__wab_flex-container ρfc">
            {title || (
              <div className={classNames(sty.text__kwcXe)}>
                Natural-Looking Results
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={classNames(sty.freeBox__xtn7K)}>
        <div className="__wab_flex-container ρfc">
          <div className={classNames(sty.freeBox__x3Tjv)}>
            <div className="__wab_flex-container ρfc">
              {slot || (
                <div className={classNames(sty.text___3P8K)}>
                  Botox softens wrinkles and fine lines for a refreshed, youthful appearance that looks completely natural. Our expert team ensures a subtle enhancement tailored to your unique features.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfBotoxCard;
