import { ctaToBooking } from '@/helpers/cta_to_booking'

const BookNowButton = ({
        text="Book Now",
        ctaId,
        color="",
        mt="10"
    }) => {
        return (
            <div className={`mt-[${mt}px] w-full md:w-auto`}>
                <button 
                    className={`button ${color} w-full md:w-auto`}
                    onClick={() => ctaToBooking(ctaId)}
                >
                    {text}
                </button>
            </div>
        )
    }

export default BookNowButton
