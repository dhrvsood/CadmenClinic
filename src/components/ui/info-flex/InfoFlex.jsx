import Image from "next/image"
import styles from './InfoFlex.module.css'

const InfoFlex = ({children, leftIcon, rightIcon, rightAction, title}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        {
          leftIcon && (
            <div className={styles.topLeft}>
              <Image
                src={leftIcon}
                alt=''
                width={32}
                height={32}
              />
            </div>
          )
        }
        <div className={styles.topRight}>
          <h4>{title}</h4>
          {
            rightIcon && (
              <div className={styles.edit} onClick={rightAction}>
                <Image
                  src={rightIcon}
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.bottom}>
        {children}
      </div>
    </div>
  )
}

export default InfoFlex
