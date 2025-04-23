import Image from "next/image";
import * as React from "react";
import classNames from "classnames";
import styles from "./BotoxResultCard.module.css";

export default function BotoxResultCard({ data, className }) {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.freeBox__uyE5Y}>
        <Image
          alt=""
          src={data?.image || "/plasmic/image_lab_2024/images/imagePng7.png"}
          width={data?.image?.fullWidth || 1076}
          height={data?.image?.fullHeight || 531}
          className={styles.propsDataImage}
        />
      </div>

      <div className={styles.freeBox___0GwmZ}>
        <div className={styles.freeBox__t3AgQ}>
          <div className="__wab_flex-container ρfc">
            <div className={styles.freeBox__tV2ST}>
              <Image
                alt=""
                src={data?.icon || "/plasmic/image_lab_2024/images/proiconsPersonSvg.svg"}
                width={data?.icon?.fullWidth || 40}
                height={data?.icon?.fullHeight || 41}
                className={styles.propsDataIcon}
              />
            </div>
            <div className={styles.freeBox__kjpQ}>
              <div className={classNames(styles.propsDataTitle)}>
                {data?.title}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.freeBox__xoIfd}>
          <div className="__wab_flex-container ρfc">
            <div className={classNames(styles.propsDataDescription)}>
              {data?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
