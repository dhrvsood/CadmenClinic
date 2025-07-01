import React from 'react';
import Image from 'next/image';
import styles from './AlternatingInfoCard.module.css';

const iconsMap = {
  verified: "/icons/alt-icons/checkSvg3.svg",
  syringe: "/icons/alt-icons/injectionSvg2.svg",
  sparkle: "/icons/alt-icons/starsSvg2.svg",
  portrait: "/icons/alt-icons/personSvg2.svg",
  headset: "/icons/alt-icons/SupportSvg2.svg",
  heart: "/icons/alt-icons/heartSvg2.svg",
  moneybag: "/icons/alt-icons/priceSvg2.svg",
};

export default function AlternatingInfoCard({ card }) {
  const isEven = card.id % 2 === 0;

  return (
    <section className={styles.card} data-id={card.id}>
      <div className={`${styles.contentWrapper} ${isEven ? styles.reverseRow : ''}`}>
        {/* TEXT BLOCK = icon + text content */}
        <div className={styles.iconAndText}>
          <div className={styles.iconWrapper}>
            <img
              src={iconsMap[card.icon]}
              alt={`${card.icon} icon`}
              className={styles.icon}
              loading="lazy"
              width={40}
              height={40}
            />
            <div className={styles.verticalLine} />
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>

            <ul className={styles.pointsList}>
              {card.points.map(({ heading, subheading }, idx) => (
                <li key={idx} className={styles.pointItem}>
                  <p className={styles.pointHeading}>&#8226; {heading}</p>
                  {subheading && (
                    <p
                      className={styles.pointSubheading}
                      dangerouslySetInnerHTML={{ __html: subheading }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div className={styles.imageWrapper}>
          <Image
            src={card.img}
            alt={card.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", borderRadius: 16 }}
          />
        </div>
      </div>
    </section>
  );
}