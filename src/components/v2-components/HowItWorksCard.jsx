import Image from "next/image";
import * as React from "react";
import classNames from "classnames";
import styles from "./HowItWorksCard.module.css";

export default function HowItWorksCard({ icon, title, image, children, small, className  }) {
    return (
        <div className={classNames(styles.root, "how-it-works-card", className)}>
            <div className={styles.freeBox__lrUbM}>
                <div className={styles.freeBox___2TFVv}>
                    <div className={styles.freeBox__kqxrG}>
                        {icon || (
                            <Image
                                alt=""
                                src="/plasmic/image_lab_2024/images/image11.svg"
                                width={32}
                                height={32}
                                className={styles.img__oIJ}
                            />
                        )}
                    </div>
                    <div className={styles.freeBox__zxcYh}>
                        <div className={styles.freeBox__wp9Az}>
                            {title || (
                                <div className={styles.text__nu0T}>
                                    <span style={{ fontWeight: 700, fontStyle: "italic" }}>FREE</span> Consultation
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.freeBox__aSvm1}>
                    <div className="__wab_flex-container ρfc">
                        <div className={styles.freeBox__mxcyu}>
                            <div className={classNames(styles.freeBox__gr82Z, {
                                [styles.freeBoxsmall__gr82ZUOshG]: small
                            })}>
                                {image || (
                                    <Image
                                        alt=""
                                        src="/plasmic/image_lab_2024/images/image14.heic"
                                        width={511}
                                        height={256}
                                        className={styles.img__fKby9}
                                    />
                                )}
                            </div>
                            <div className={styles.freeBox___03BWx}>
                                {children || (
                                    <>
                                        Unlike invasive procedures, Botox integrates smoothly with your natural expressions,
                                        creating gradual improvements. With time, your skin looks younger, without disrupting
                                        your facial movements.
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
