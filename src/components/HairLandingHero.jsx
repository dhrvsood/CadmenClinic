'use client';

import RatingReviewPill from './RatingReviewPill';
import Link from 'next/link';

export default function HairLandingHero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden text-white"
      style={{ backgroundImage: "url('/media/hero-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-0 h-full max-w-6xl mx-auto">
        {/* Deal Pill */}
        <div className="mt-24 mb-8 bg-white/20 border border-white px-8 py-4 rounded-full text-white  text-base md:text-lg flex flex-wrap justify-center items-center gap-3">
          <span className="font-bold text-white text-lg">50% Off</span>First Session
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm md:text-base ">
            New Patients Deal
          </span>
        </div>

        {/* Heading */}
        <h1 className="italic text-4xl md:text-6xl lg:text-7xl  text-white leading-tight mb-6">
          Toronto’s #1 Hair Loss Clinic
        </h1>

        {/* Description */}
        <p className="mt-2 mb-6 text-sm md:text-base max-w-3xl text-white/90">
          Revitalize your hair with our non-surgical, 100% natural, science-backed hair
          restoration services for men and women. Proven results, minimal downtime, and trusted by
          over 2,100 patients since 2019. Book a free consultation with our expert providers to craft a
          treatment plan with premium-quality results tailored just for you.        
        </p>

        {/* Button */}
        {/* <div className="mb-6">
          <Button color={"white"}>Book Now</Button>
        </div> */}

        <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
          <button className='button white w-full md:w-auto'>Book Now</button>
        </Link>

        {/* Reviews */}
        <RatingReviewPill />
      </div>
    </section>
  );
}
