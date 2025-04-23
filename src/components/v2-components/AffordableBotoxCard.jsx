import React from 'react';
import classNames from 'classnames';
import styles from './AffordableBotoxCard.module.css';
import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point';

export default function AffordableBotoxCard({
  name = "Botox",
  price = "$11.00",
  perUnit = "$14.00",
  unitWording = "/Unit member price",
  pillUnit = "/Per unit",
  items = [],
  best = false,
  size = null,
  className
}) {
  return (
    <div className={classNames(styles.root, className, { [styles.rootbest]: best })}>
      <div className={classNames(styles.freeBox__rJaX, { [styles.freeBoxsize_small__rJaX35NG7]: size === "small" })}>
        <div className="__wab_flex-container ρfc">
          <div className={classNames(styles.freeBox__aQxXh, { [styles.freeBoxbest__aQxXhn4Fys]: best })}>
            <div className="__wab_flex-container ρfc">
              <div className={classNames(styles.freeBox__uesZs, { [styles.freeBoxbest__uesZsn4Fys]: best })}>
                <div className="__wab_flex-container ρfc">
                  <div className={classNames(styles.text__rtF4L, {
                    [styles.textbest__rtF4Ln4Fys]: best,
                    [styles.textsize_small__rtF4L35NG7]: size === "small"
                  })}>{name}</div>
                  <div className={classNames(styles.text__raPro, { [styles.textbest__raPrOn4Fys]: best })}>®</div>
                </div>
              </div>
              {best && (
                <div className="__wab_flex-container ρfc">
                  <div className={classNames(styles.text__huPuq, { [styles.textbest__huPuqn4Fys]: best })}>Most Popular</div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.freeBox___3XeF0}>
            <div className="__wab_flex-container ρfc">
              <div className={classNames(styles.price2, { [styles.price2size_small]: size === "small" })}>
                <div className="__wab_flex-container ρfc">
                  <div className={classNames(styles.text__zq48G, {
                    [styles.textsize_small__zq48G35NG7]: size === "small"
                  })}>{price}</div>
                  <div className={classNames(styles.heading, {
                    [styles.headingsize_small]: size === "small"
                  })}>{unitWording}</div>
                </div>
              </div>
              <div className={styles.frame427321937}>
                <div className="__wab_flex-container ρfc">
                  <div className={classNames(styles.price3, { [styles.price3size_small]: size === "small" })}>
                    <div className="__wab_flex-container ρfc">
                      <div className={styles.heading2}>{perUnit}</div>
                      <div className={styles.heading3}>{pillUnit}</div>
                    </div>
                  </div>
                  <div className={styles.heading4}>regular price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.freeBox__bVgm}>
        <div className="__wab_flex-container ρfc">
          {items.map((item, index) => (
            <div key={index} className={styles.freeBox__szUiG}>
              <div className={styles.title}>
                <div className="__wab_flex-container ρfc">
                  <PointIcon className={styles.svg} />
                  <div className={classNames(styles.text__nYrNm, {
                    [styles.textsize_small__nYrNm35NG7]: size === "small"
                  })}>{item.title}</div>
                </div>
              </div>
              <div className="__wab_flex-container ρfc">
                <div className={classNames(styles.text__hbNd, {
                  [styles.textsize_small__hbNd35NG7]: size === "small"
                })}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
