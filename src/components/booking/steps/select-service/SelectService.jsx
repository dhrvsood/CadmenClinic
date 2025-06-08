import services from '@/doc/form_services'
import { useBookingStore } from '@/zustand/useBookingStore'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import sharedStyles from '../../BookingFlowShared.module.css'
import BookingHeader from '../../booking-header/BookingHeader'
import NavButtons from '../../nav-buttons/NavButtons'
import ServiceModal from '../../service-modal/ServiceModal'
import styles from './SelectService.module.css'

const SelectService = () => {
  const { bookingData, setService, setNextDisabled, incrementStep } =
    useBookingStore()
  const openCategories = useBookingStore((state) => state.openCategories)
  const setOpenCategories = useBookingStore((state) => state.setOpenCategories)
  const [openModal, setOpenModal] = useState(null)

  useEffect(() => {
    if (bookingData.service) setNextDisabled(false)
  }, [bookingData.service, setNextDisabled])

  const handleOpenModal = (id) => {
    setOpenModal(id)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const handleSelectServiceFromModal = (service) => {
    setService(service)
    incrementStep()
  }

  return (
    <div className={styles.wrap}>
      <BookingHeader
        heading='Which treatment do you need?'
        subheading='Select a service.'
      />
      <p className={`${sharedStyles.p} ${styles.disclaimer}`}>
        * All discounts apply to new patients only.
      </p>
      <div className={styles.categories}>
        {services.map((category, i) => (
          <div key={i} id={`serviceCategory-${category.category}`} className={styles.category}>
            <div
              className={styles.categoryTop}
              onClick={() => setOpenCategories(category.category)}
            >
              <div className={styles.left}>
                <Image src={category.icon} alt='' width={32} height={32} />
              </div>
              <div className={styles.right}>
                <h4 className={sharedStyles.h4}>{category.category}</h4>
                <Image
                  src='/icons/caret.svg'
                  alt=''
                  width={12}
                  height={6}
                  className={`${styles.carat} ${openCategories.includes(category.category) ? styles.active : ''}`}
                />
              </div>
            </div>
            <div
              className={`${styles.services} ${openCategories.includes(category.category) ? styles.active : ''}`}
            >
              {category.services.map((service, j) => (
                <>
                  <div
                    key={j}
                    className={styles.service}
                    onClick={() => handleOpenModal(service.code)}
                  >
                    <div className={styles.serviceLeft}>
                      <Image
                        src={`${bookingData.service && bookingData.service.code === service.code ? '/icons/info-icon-white.svg' : '/icons/info-icon.svg'}`}
                        className={styles.infoIcon}
                        alt=''
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className={styles.serviceRight}>
                      <p className={`${sharedStyles.p} ${styles.serviceTitle}`}>
                        {service.title}
                      </p>
                      {!service.price.discounted ? (
                        <p className={styles.salePrice}>
                          {service.price.original}
                        </p>
                      ) : (
                        <p className={styles.onSale}>
                          <p className={styles.strikePrice}>
                            {service.price.original}
                          </p>
                          <p className={styles.salePrice}>
                            {service.price.discounted}
                          </p>
                          <div className={styles.percentOff}>
                            {service.price.percent}
                          </div>
                        </p>
                      )}
                    </div>
                  </div>
                  <ServiceModal
                    id={service.code}
                    isOpen={openModal === service.code}
                    onClose={handleCloseModal}
                  >
                    <div className={styles.modalContent}>
                      <div className={styles.imageWrap}>
                        <Image
                          src={service.image}
                          className={styles.modalImage}
                          alt=''
                          width={394}
                          height={380}
                        />
                      </div>
                      <div className={styles.contentWrap}>
                        <div className={styles.modalTop}>
                          <h4 className={styles.modalHead}>{service.title}</h4>
                          <div className={styles.modalPriceWrap}>
                            {!service.price.discounted ? (
                              <p className={styles.salePrice}>
                                {service.price.original}
                              </p>
                            ) : (
                              <p className={styles.onSale}>
                                <p className={styles.strikePrice}>
                                  {service.price.original}
                                </p>
                                <p className={styles.salePrice}>
                                  {service.price.discounted}
                                </p>
                                <div className={styles.percentOff}>
                                  {service.price.percent}
                                </div>
                              </p>
                            )}
                            {service.duration && (
                              <>
                                •
                                <p className={styles.durationText}>
                                  {service.duration}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.modalList}>
                          {service.points.map((point, k) => (
                            <div
                              key={`${service.code}-modalItem-${k}`}
                              className={styles.modalItem}
                            >
                              <Image
                                src='/icons/check-badge-icon.svg'
                                className={styles.checkBadge}
                                alt=''
                                width={16}
                                height={16}
                              />
                              <div className={styles.modalItemContent}>
                                <h5 className={styles.modalPointTitle}>
                                  {point.title}
                                </h5>
                                <p className={styles.modalPointBody}>
                                  {point.body}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={styles.modalButtonWrap}>
                          <button
                            className={styles.gradButton}
                            onClick={() =>
                              handleSelectServiceFromModal(service)
                            }
                          >
                            Choose this service
                          </button>
                        </div>
                      </div>
                    </div>
                  </ServiceModal>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NavButtons />
    </div>
  )
}

export default SelectService
