import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function BotoxTestimonialsSlider() {
  return (
    <div className='review-slider'>
      <div className='splide-wrap'>
        <Splide
          aria-label='My Favorite Images'
          options={{
            type: 'loop',
            height: '30rem',
            focus: 'left',
            autoWidth: true,
            autoplay: true,
            interval: 3000,
            arrows: false,
            // gap: window.innerWidth <= 780 ? '0' : '2rem',
            // padding: window.innerWidth <= 780 ? '0' : '2rem',
            perPage: 1,
            pagination: true,
          }}
          className="splide-custom"
        >
          <SplideSlide>
            <div className='review-slider_card'>
              <div className='review-slider_card-top'>
                <img
                  src='https://cdn.prod.website-files.com/66c8a77d44f940b4e409bdc7/66cf3bacf70fc06d7a8defc5_5-stars.svg'
                  loading='lazy'
                  alt=''
                />
                <p>
                  I recently visited ImageLab and was thoroughly impressed. Kristen
                  was incredibly attentive and caring, with exceptional attention to
                  detail throughout my entire visit. Arya and the front desk team
                  always take great care of everyone, ensuring a smooth and pleasant
                  experience from start to finish. Unlike other places, they truly
                  care and will never try to upsell you on services. I highly
                  recommend ImageLab for their dedication to clients and exceptional
                  care.
                </p>
              </div>
              <div className='revoew-slider_card-bottom'>
                <p className='review-slider_author'>Julia N.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='review-slider_card'>
              <div className='review-slider_card-top'>
                <img
                  src='https://cdn.prod.website-files.com/66c8a77d44f940b4e409bdc7/66cf3bacf70fc06d7a8defc5_5-stars.svg'
                  loading='lazy'
                  alt=''
                />
                <p>
                  My experience at ImageLab was nothing short of phenomenal. I was
                  initially hesitant about getting Botox, but the professional and
                  welcoming staff at ImageLab put me completely at ease. They took
                  the time to thoroughly understand my concerns and desired outcome,
                  and I never felt rushed or pressured. I got their Botox treatment
                  for my forehead, and it looks even better than I expected!
                </p>
              </div>
              <div className='revoew-slider_card-bottom'>
                <p className='review-slider_author'>Jenna J.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='review-slider_card'>
              <div className='review-slider_card-top'>
                <img
                  src='https://cdn.prod.website-files.com/66c8a77d44f940b4e409bdc7/66cf3bacf70fc06d7a8defc5_5-stars.svg'
                  loading='lazy'
                  alt=''
                />
                <p>
                  I ended up getting my Botox here and I was super happy with the
                  end result. My skin looks great, and I definitely plan on coming
                  again in the near future. On top of that, they have great customer
                  service, and you can tell that they really go above and beyond to
                  make you happy. Much appreciated. Thank you!
                </p>
              </div>
              <div className='revoew-slider_card-bottom'>
                <p className='review-slider_author'>Denis L.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='review-slider_card'>
              <div className='review-slider_card-top'>
                <img
                  src='https://cdn.prod.website-files.com/66c8a77d44f940b4e409bdc7/66cf3bacf70fc06d7a8defc5_5-stars.svg'
                  loading='lazy'
                  alt=''
                />
                <p>
                  Honestly one of the best experiences I’ve had! Kristen is amazing!
                  I would definitely recommend them for Botox; the attention to
                  detail is impeccable. Thanks for making me a happy client!
                </p>
              </div>
              <div className='revoew-slider_card-bottom'>
                <p className='review-slider_author'>Joyce M.</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}
