'use client';

import React from 'react';
import RatingReviewPill from '../RatingReviewPill';

const VideoSection = ({ bgColor = 'bg-dawnPink' }) => (
    <section className={`${bgColor} py-[80px] max-sm:py-[40px]`}>
        <div className='wrapper'>
            <div className='mb-[48px] flex flex-col items-center gap-[12px]'>
                <RatingReviewPill />
                <h2 className='d-h2 text-center'>
                    Join Our Satisfied <span className='blue-italic text-gold-base'>Clients</span>
                </h2>
                <p className='text-center'>
                    Over thousands of people have transformed their lives with our hair restoration and aesthetic treatments.
                </p>
            </div>
            <div className="aspect-video max-w-[960px] w-full m-auto rounded-[16px] overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qddjnfIKqyI" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover"
                ></iframe>
            </div>
        </div>
    </section>
);

export default VideoSection;