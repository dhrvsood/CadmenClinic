import ContactBanner from '@/components/contact_banner'
import { NextSeo } from 'next-seo'
import ServiceTable from '@/components/service_table'
import { servicesData } from '@/doc/services'
import { useEffect } from 'react'

const Services = () => {
    return (
        <>
            <NextSeo
                title='Our Services | See All Premium Treatments | CADMEN Clinic'
                description='Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Chicago medspa, tailored to enhance your beauty & wellness. See more.'
                canonical='https://www.imagelabmedspa.com/about'
                openGraph={{
                    url: 'https://www.imagelabmedspa.com/about',
                    title: 'Our Services | See All Premium Treatments | CADMEN Clinic',
                    description:
                        'Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Chicago medspa, tailored to enhance your beauty & wellness. See more.',
                    images: [
                        {
                            url: 'https://www.imagelabmedspa.com/og_image.jpg',
                            width: 800,
                            height: 800,
                            alt: 'Interior of CADMEN Clinic',
                            type: 'image/jpeg'
                        }
                    ],
                    siteName: 'CADMEN Clinic'
                }}
            />
            <div className=''>
                <ServiceTable title="Our Clinic's Services & Treatments" services={servicesData} />
            </div>
            <ContactBanner />
        </>
    )
}

export default Services
