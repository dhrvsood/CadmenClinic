import Image from 'next/image'
import ReactDOM from 'react-dom'

import styles from './ServiceModal.module.css'

const ServiceModal = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.wrap}>
      <div className={styles.modalFrame}>
        <button className={styles.closer} onClick={onClose}>
          <Image
            src='/icons/close-icon.svg'
            alt='close'
            width={14}
            height={14}
          />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default ServiceModal
