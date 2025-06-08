import Image from 'next/image'
import styles from './TextDetail.module.css'

const TextDetail = ({text, icon, iconAction}) => {
  return (
    <div className={styles.wrap}>
      {icon && <Image src={icon} width={20} height={20} alt='' onClick={iconAction} />}
      <p className={styles.body}>{text}</p>
    </div>
  )
}

export default TextDetail
