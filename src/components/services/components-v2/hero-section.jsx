import React from 'react';
import sty from './hero-section.module.css';
import Button from '@/components/v2-components/Button';
import ReviewsRatingPill from '@/components/v2-components/ReviewsRatingPill';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'



export const HeroSection = ({ data }) => {
  return (
    <section className={sty.topBotoxServicesSection}>
      <div className={sty.freeBox__g9LW}>
        <div className="__wab_flex-container ρfc">
          {/* Prices Block */}
          {data.pricing && (
            <div className={sty.prices}>
              <div className="__wab_flex-container ρfc">
                {data.pricing.originalPrice && (
                  <div className={sty.heading}>
                    ${data.pricing.originalPrice}
                  </div>
                )}
                {(data.pricing.discountedPrice || data.pricing.unit) && (
                  <div className={sty.price}>
                    <div className="__wab_flex-container ρfc">
                      {data.pricing.discountedPrice && (
                        <div className={sty.heading2}>
                          ${data.pricing.discountedPrice}
                        </div>
                      )}
                      {data.pricing.unit && (
                        <div className={sty.heading3}>
                          {data.pricing.unit}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {data.pricing.promoBadge && (
                  <div className={sty.heading4}>
                    {data.pricing.promoBadge}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Text Block */}
          {(data.headline || data.supportingText) && (
            <div className={sty.freeBox__akq4D}>
              <div className="__wab_flex-container ρfc">
                <div className={sty.freeBox__bg6SY}>
                  <div className="__wab_flex-container ρfc">
                    {data.headline && (
                      <div className={sty.heading5}>
                        <h1 className={sty.h1}>
                          <span style={{ color: '#0C7A7B', fontStyle: 'italic' }}>
                            {data.headline}
                          </span>
                        </h1>
                      </div>
                    )}
                    {data.supportingText && (
                      <div className={sty.supportingText}>
                        <span style={{ color: '#535556' }}>
                          {data.supportingText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Hero Image Block */}
          {data.leftImage && data.leftImage.asset && data.leftImage.asset._ref && (
            <div className={sty.freeBox__ioCi}>
              <Image
                src={builder.image(data.leftImage).url()}
                alt={data.leftImage.alt}
                width={349}
                height={250}
                className={sty.img__r4D5}
                loading="lazy"
              />
              {data.captionTags && data.captionTags[0] && (
                <div className={sty.text__i2R3N}>
                  {data.captionTags[0]}
                </div>
              )}
              {data.captionTags && data.captionTags[1] && (
                <div className={sty.text__qVtBe}>
                  {data.captionTags[1]}
                </div>
              )}
            </div>
          )}

          {/* CTA Button */}
          {data.cta && data.cta.text && (
            <Button
              className={sty.heroCta}
              onClick={() => window.location.href = data?.cta?.link || '#'}
            >
              <div className={sty.text__fc7Q}>
                {data.cta.text}
              </div>
            </Button>
          )}


          <ReviewsRatingPill className={sty.reviewsRatingPill} />

          <div className={sty.freeBox___5K8D}>
            {data.leftImage && data.leftImage.asset && data.leftImage.asset._ref && (
              <Image
                src={builder.image(data.leftImage).url()}
                alt={data.leftImage.alt}
                width={349}
                height={250}
                className={sty.img___1T2J6}
                loading="lazy"
              />
            )}
            {data.captionTags && data.captionTags[0] && (
              <div className={sty.text__xwgVt}>
                {data.captionTags[0]}
              </div>
            )}
            {data.captionTags && data.captionTags[1] && (
              <div className={sty.text__rZb7W}>
                {data.captionTags[1]}
              </div>
            )}
          </div>

          <div className={sty.freeBox__zaqLo}>
            {data.rightImage && data.rightImage.asset && data.rightImage.asset._ref && (
              <Image
                src={builder.image(data.rightImage).url()}
                alt={data.rightImage.alt}
                width={349}
                height={250}
                className={sty.img__rn1T}
                loading="lazy"
              />
            )}
            {data.captionTags && data.captionTags[2] && (
              <div className={sty.text__ya9Kw}>
                {data.captionTags[2]}
              </div>
            )}
            {data.captionTags && data.captionTags[3] && (
              <div className={sty.text___9PzvC}>
                {data.captionTags[3]}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;