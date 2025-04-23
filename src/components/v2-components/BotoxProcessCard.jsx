import Image from "next/image";
import * as React from "react";
import classNames from "classnames";
import styles from "./BotoxProcessCard.module.css";

export default function BotoxProcessCard({ icon, title, description, className }) {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames("__wab_flex-container", "ρfc")}>
                <div className={styles.freeBox__fsXjd}>
                    {icon || (
                        <Image
                            alt=""
                            src="/plasmic/image_lab_2024/images/iconSvg7.svg"
                            width={73}
                            height={72}
                            className={styles.img___9LUqC}
                        />
                    )}
                </div>
                <div className={styles.freeBox__mLm5Z}>
                    <div className={classNames("__wab_flex-container", "ρfc", styles.stack)}>
                        <div className={styles.text__zLazc}>
                            {title || "\u00a0Consultation"}
                        </div>
                        <div className={styles.text___9Cryr}>
                            {description || (
                                "Begin with a personalized consultation where our experts assess your skin and discuss your goals. " +
                                "We’ll create a tailored treatment plan to ensure optimal results that align with your needs."
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
