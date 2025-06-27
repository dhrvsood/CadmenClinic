import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import AffordableBotoxCard from "../AffordableBotoxCard";
import styles from "../plasmic/cadmenclinic_migration/PlasmicBotoxSeo.module.css";
import Link from "next/link";
import Image from "next/image";

const TreatmentPackagesSlider = ({ treatmentPackages }) => {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3.1);

  // Handle responsiveness
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3.5);
      }
      setCurrentIndex(0);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(treatmentPackages.length - cardsPerView + 1);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <div className="relative w-full px-4">
      {/* Slider track */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`,
          }}
        >
          {treatmentPackages.map((pkg, idx) => (
            <div
              key={pkg.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="flex-shrink-0 px-2"
              style={{
                width: `${cardWidth}%`,
                height: "auto",
              }}
            >
              <AffordableBotoxCard
                name={
                  typeof pkg.title === "string"
                    ? pkg.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : pkg.title
                }
                perUnit={pkg.regularPrice}
                unitWording="/ New Patient Special"
                price={pkg.specialPrice}
                pillUnit="/ Regular price"
                className={classNames(
                  "__wab_instance",
                  styles.affordableBotoxCard__package,
                  "h-full"
                )}
                items={pkg.items}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <div className="flex gap-2 justify-center mt-6 md:absolute md:bottom-4 md:right-4 md:mt-0 z-10">
        <button
          onClick={goToPrevious}
          className="bg-[#9a7f71] text-white w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <Image
            alt="Previous"
            src="/icons/prev-arrow-white.svg"
            width={14}
            height={14}
          />
        </button>
        <button
          onClick={goToNext}
          className="bg-[#9a7f71] text-white w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center disabled:opacity-50"
          disabled={currentIndex >= totalSlides - 1}
        >
          <Image
            alt="Next"
            src="/icons/next-arrow-white.svg"
            width={14}
            height={14}
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={classNames(
              "w-3 h-3 rounded-full cursor-pointer",
              index === currentIndex ? "bg-[#9a7f71]" : "bg-[#fbfcfe]"
            )}
          />
        ))}
      </div>

      {/* Book Now Button */}
      <Link href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services' className='mt-[40px]'>
        <button className='button max-sm:w-full'>Book Now</button>
      </Link>
    </div>
  );
};

export default TreatmentPackagesSlider;