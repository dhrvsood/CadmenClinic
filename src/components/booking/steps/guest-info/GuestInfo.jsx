import { useBookingStore } from '@/zustand/useBookingStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import BookingHeader from '../../booking-header/BookingHeader'
import NavButtons from '../../nav-buttons/NavButtons'
import styles from './GuestInfo.module.css'

const phoneRegex =
  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().length(10, 'Invalid phone number')
})

const GuestInfo = () => {
  const { bookingData, setGuestInfo, setNextDisabled } = useBookingStore()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: bookingData.guestInfo?.firstName || '',
      lastName: bookingData.guestInfo?.lastName || '',
      email: bookingData.guestInfo?.email || '',
      phone: bookingData.guestInfo?.phone || ''
    }
  })

  useEffect(() => {
    setNextDisabled(true)
  }, [setNextDisabled])

  useEffect(() => {
    setNextDisabled(!isValid)
  }, [isValid, setNextDisabled])

  const handleNext = (data) => {
    setGuestInfo(data)
  }

  return (
    <div className={styles.wrap}>
      <div>
        <p className={styles.selectionText}>You selected: <span className='bold'>{bookingData.service.title}</span></p>
        {bookingData.service.price.percent.length > 0 && <div className={styles.discountPill}>{bookingData.service.price.percent}</div>}
      </div>
      <BookingHeader
        heading='Tell us more about you'
        subheading='Enter your personal information'
      />
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor='firstName'>First name</label>
          <input
            {...register('firstName')}
            className={styles.textInput}
            placeholder='John'
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='lastName'>Last name</label>
          <input
            {...register('lastName')}
            className={styles.textInput}
            placeholder='Doe'
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email')}
            className={styles.textInput}
            placeholder='johndoe@gmail.com'
          />
        </div>
        <div className={styles.inputGroup}>
          <Controller
            name='phone'
            control={control}
            defaultValue=''
            render={({ field, fieldState: { error } }) => (
              <>
                <label htmlFor='phone'>Phone number</label>
                <input
                  {...field}
                  type='tel'
                  className={styles.textInput}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/[^0-9]/g, '')
                      .slice(0, 10)
                    field.onChange(value)
                  }}
                  placeholder='(123) 456 7890'
                />
              </>
            )}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <p className={styles.consent}>* By clicking next, I agree to receive calls, texts, and emails from CADMEN Clinic and its communications partner for marketing and transactional purposes.</p>
      </form>
      <NavButtons nextFunction={handleSubmit(handleNext)} />
    </div>
  )
}

export default GuestInfo
