import Image from "next/image";
import * as React from "react";
import classNames from "classnames";
import styles from "./BotoxProcessCard.module.css";

export default function BotoxProcessCard({ icon, title, description, className }) {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames("__wab_flex-container", "ρfc")}>
                <div className={styles.freeBox__fsXjd}>
                    <Image
                        alt=""
                        src={icon}
                        width={73}
                        height={73}
                        className={styles.img___9LUqC}
                    />
                </div>
                <div className={styles.freeBox__mLm5Z}>
                    <div className={classNames("__wab_flex-container", "ρfc", styles.stack)}>
                        <div className={styles.text__zLazc}>
                            {title }
                        </div>
                        <div className={styles.text___9Cryr}>
                            {description }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
