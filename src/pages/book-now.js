import BookingFlow from "@/components/booking/booking-flow/BookingFlow"
import { NextSeo } from 'next-seo'

const BookingsNew = () => {
  return (
    <>
      <NextSeo
        title='Book Your Appointment Now | ImageLab Med Spa'
        description='Schedule your appointment online at our Chicago medspa for treatments like Botox, fillers, laser therapy & more. Convenient & easy booking process. Book Now.'
        canonical='https://www.imagelabmedspa.com/book-now'
        openGraph={{
          url: 'https://www.imagelabmedspa.com/book-now',
          title: 'Book Your Appointment Now | ImageLab Med Spa',
          description:
            'Schedule your appointment online at our Chicago medspa for treatments like Botox, fillers, laser therapy & more. Convenient & easy booking process. Book Now.',
          images: [
            {
              url: 'https://www.imagelabmedspa.com/og_image.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of ImageLab Med Spa',
              type: 'image/jpeg'
            }
          ],
          siteName: 'ImageLab Med Spa'
        }}
      />
      <BookingFlow />
    </>
  )
}

export default BookingsNew
