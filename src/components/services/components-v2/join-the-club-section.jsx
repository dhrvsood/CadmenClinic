import Image from 'next/image';
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Button from '@/components/v2-components/Button';
import sty from './join-the-club-section.module.css';

;

const JoinClubSection = ({ data }) => {
  const {
    title,
    subTitle,
    description,
    image,
    badgeOneText,
    badgeTwoText,
    cta
  } = data || {};

  const imageSrc = data?.image ? builder.image(data.image).url() : null;

  const handleClick = () => {
    if (cta?.link) {
      window.location.href = cta.link;
    }
  };

  return (
    <section className="relative bg-[#074444] py-16 px-4 overflow-hidden flex flex-col items-center text-center">
      <div
        className="absolute bottom-0 left-0 w-72 h-72 border-2 border-white opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 border-2 border-white opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl w-full flex flex-col items-center text-center space-y-6">
        <div className="relative w-full overflow-hidden rounded-xl flex justify-center">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={image.alt || ''}
              width={455}
              height={255}
              className="rounded-[20px] mt-12"
            />
          )}
          <span className={`absolute top-4 left-4 bg-white bg-opacity-90 text-[#0B3F33] text-sm font-medium px-3 py-1 rounded-full ${sty.badgeOne}`}>
            {badgeOneText}
          </span>
          <span className={`absolute top-4 right-4 bg-white bg-opacity-90 text-[#0B3F33] text-sm font-medium px-3 py-1 rounded-full ${sty.badgeTwo}`}>
            {badgeTwoText}
          </span>
        </div>

        <h2 className="text-white font-serif text-4xl md:text-5xl">{title}</h2>
        <p className="text-white text-sm md:text-2xl">{subTitle}</p>
        <p className="text-white text-sm md:text-base leading-relaxed px-4">{description}</p>

        <Button
          className='mt-4'
          onClick={handleClick}
          color="white"
        >
          {cta?.text}
        </Button>
      </div>
    </section>
  );
};

export default JoinClubSection;
