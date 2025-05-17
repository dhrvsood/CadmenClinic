import React from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import ContactDataCard from '@/components/ContactDataCard';

;

const ContactSection = ({ data }) => {
  const title = data?.title || {
    textBefore: 'Our',
    highlightedText: 'Location',
    textAfter: ''
  };

  const description =
    data?.description ||
    "Don't put off your changes — come to us now and get FREE first consultation!";

  const cards = data?.cards || [
    {
      title: 'Call Us',
      linkTo: 'tel:+18722072269',
      linkText: '(872) 207-2269',
      icon: '/icons/circle-phone.svg'
    },
    {
      title: 'Contact Us',
      linkTo: 'mailto:info@imagelabmedspa.com',
      linkText: 'info@imagelabmedspa.com',
      icon: '/icons/circle-mail.svg'
    },
    {
      title: 'Visit Us',
      linkTo: 'https://maps.app.goo.gl/RizTXzKMnXVkUewB7',
      linkText: '2033 W Roscoe St, Chicago, IL 60618',
      icon: '/icons/circle-pin.svg',
      newTab: true
    }
  ];

  const workingHours = data?.workingHours || [
    { days: 'Monday & Tuesday', hours: '10AM - 6PM' },
    { days: 'Wednesday', hours: '9AM - 5PM' },
    { days: 'Thursday & Friday', hours: '9AM - 6PM' },
    { days: 'Saturday', hours: '9:30AM - 5:30PM' }
  ];

  return (
    <section className="pb-[80px] max-sm:pb-[40px]" data-section="contact">
      <div className="wrapper">
        <div className="mb-[48px] flex flex-col items-center gap-[12px]">
          <h2 className="d-h2">
            {title.textBefore}{' '}
            <span className="gold-italic">{title.highlightedText}</span>{' '}
            {title.textAfter}
          </h2>
          <p className="text-center">{description}</p>
        </div>

        <div className="grid grid-cols-[1.75fr,2.25fr,3fr] gap-[30px] max-md:grid-cols-1 max-md:gap-[14px]">
          {cards.map((card, idx) => (
            <ContactDataCard
              key={idx}
              linkTo={card.linkTo}
              linkText={card.linkText}
              icon={card.icon}
              title={card.title}
              newTab={card.newTab}
            />
          ))}
        </div>

        <div className="relative mt-[56px] h-[700px] overflow-hidden rounded-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.9273842486487!2d-87.68167956453794!3d41.943098857643925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd26705a454b5%3A0x32f4424a257fd09b!2s2033%20W%20Roscoe%20St%2C%20Chicago%2C%20IL%2060618!5e0!3m2!1sen!2sus!4v1732486224603!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute bottom-[20px] left-[20px] max-sm:right-[20px]">
            <div className="flex">
              <div className="flex items-center rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[28px]">
                <Image
                  src="/icons/circle-clock.svg"
                  width={32}
                  height={32}
                  alt="Phone icon"
                />
              </div>
              <div className="ml-[-1px] flex w-full flex-col justify-center rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[20px]">
                <h4 className="d-h4">Working Hours</h4>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[20px] pr-[100px] max-sm:pr-[20px]">
              {workingHours.map((item, idx) => (
                <p key={idx} className="text-[18px]">
                  <span className="font-medium">{item.days}: </span>
                  {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;