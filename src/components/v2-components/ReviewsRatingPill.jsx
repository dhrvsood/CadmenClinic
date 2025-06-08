import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ReviewsRatingPill.module.css";

export default function ReviewsRatingPill({ className }) {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={classNames(styles.freeBox__bNuax)}>
        <div className="__wab_flex-container ρfc">
          <Image
            alt=""
            className={styles.img__uJnuj}
            height={12}
            width={184}
            src="/plasmic/image_lab_2024/images/image2.svg"
          />

          <p className={classNames(styles.p__z0Ts7)}>
            <span style={{ fontWeight: 600, color: "#0C7A7B" }}>4.9</span>
            <span> /5.0</span>
          </p>
        </div>
      </div>

      <div className={classNames(styles.freeBox__qSoGt)}>
        <div className="__wab_flex-container ρfc">
          <Image
            alt=""
            className={styles.img__t8L9I}
            height={24}
            width={24}
            src="/plasmic/image_lab_2024/images/image3.svg"
          />

          <p className={classNames(styles.p___1EbXf)}>
            <span style={{ color: "#080909" }}>280+ reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
}
