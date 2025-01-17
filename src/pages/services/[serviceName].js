import Container from '@/components/container';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PuzzlePieceIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/doc/services';
import Faqs from '@/components/faqs';
import ImageViewer from '@/components/sliders/imageViewer';
import { NextSeo } from 'next-seo';

const ServicePage = () => {
    const { query } = useRouter();
    const { serviceName } = query;
    const [service, setService] = useState(null);

    useEffect(() => {
        if (serviceName) {
            const fetchedServiceData = servicesData[serviceName];
            console.log(fetchedServiceData);

            if (fetchedServiceData) {
                setService(fetchedServiceData);
            } else {
                console.error(`Service "${serviceName}" not found in servicesData.`);
            }
        }
    }, [serviceName]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NextSeo
                title = {`${service.title} | CADMEN Clinic`}
                description='Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.'
                openGraph={{
                    url: 'https://www.cadmenclinic.ca/services',
                    title: 'Our Services | See All Premium Treatments | CADMEN Clinic',
                    description:
                        'Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.',
                    images: [
                        {
                            url: 'https://www.cadmenclinic.ca/media/clinic_interior.jpg',
                            width: 800,
                            height: 800,
                            alt: 'Interior of CADMEN Clinic',
                            type: 'image/jpeg'
                        }
                    ],
                    siteName: 'CADMEN Clinic'
                }}
            />
            <section className='mt-10 overflow-hidden'>
                <Container classList='md:px-5'>
                    <div className='grid border border-gray-100 bg-gray-100 md:grid-cols-2'>
                        <div className='order-2 flex h-full flex-col justify-center space-y-5 px-10 py-10 xl:py-20'>
                            <div className='-mt-16 pb-2 md:mt-0'>
                                {service.promo && (
                                    <div className='border border-customBlack bg-customBlack p-3 text-center text-xs font-medium uppercase tracking-wider text-white'>
                                        {service.promo}
                                    </div>
                                )}
                            </div>
                            <h1
                                className={`font-display font-light tracking-wide ${service.title.length > 28
                                    ? 'text-4xl xl:text-5xl'
                                    : 'text-4xl xl:text-6xl'
                                    }`}
                            >
                                {service.title}
                            </h1>
                            <p className='leading-relaxed'>{service.subTitle}</p>
                            <div>
                                <p className='flex flex-row items-center space-x-3'>
                                    <span>
                                        <ClockIcon className='h-4 w-4' />
                                    </span>
                                    <span>{service.duration} minute duration</span>
                                </p>
                                <p className='flex flex-row items-center space-x-3'>
                                    <span>
                                        <BanknotesIcon className='h-4 w-4' />
                                    </span>
                                    <span>starting at ${service.cost}</span>
                                </p>
                            </div>
                            <div className='flex w-full'>
                                {!service.comingSoon && (
                                    <Link
                                        style={{
                                            boxShadow: 'rgb(198,156,147) -9px 9px 0px 0px'
                                        }}
                                        href='/book-now'
                                        className='w-full rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center font-light text-white hover:bg-beaver'
                                    >
                                        Book Now
                                    </Link>
                                )}
                                {service.comingSoon && (
                                    <div
                                        style={{
                                            boxShadow: 'rgb(198,156,147) -9px 9px 0px 0px'
                                        }}
                                        className='w-full rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center font-light text-white hover:bg-beaver'
                                    >
                                        COMING SOON
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='order-1 h-full'>
                            <Image
                                draggable='false'
                                src={service.heroImage.asset.url}
                                alt={service?.heroImage?.alt}
                                className='h-[30vh] w-full object-cover md:h-full'
                                height={900}
                                width={900}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {service.showResults && (
                <section className='-mb-5 pt-10'>
                    <Container classList='px-5'>
                        <div className='rounded border border-teal-700 py-5 md:px-10 flex flex-col items-center'>
                            <h2 className='pb-5 text-center font-display text-4xl md:text-6xl'>
                                Results
                            </h2>
                            <ImageViewer data={service.beforeAfterImages.images} />
                        </div>
                    </Container>
                </section>
            )}

            <section className='py-20'>
                <Container classList='px-5'>
                    <div className='grid gap-10 lg:grid-cols-12'>
                        <div className='order-2 flex flex-col space-y-10 lg:order-1 lg:col-span-4'>
                            <div className='h-full rounded border border-teal-900'>
                                <h2 className='px-5 py-2 font-display text-2xl'>Benefits</h2>
                                <ul
                                    role='list'
                                    className='flex flex-col justify-center space-y-2 border-t border-teal-900 p-5'
                                >
                                    {service.benefits &&
                                        service.benefits.map((b, i) => (
                                            <li key={i} className='flex h-full flex-row space-x-2'>
                                                <div>
                                                    <CheckCircleIcon className='h-5 w-5 text-customBlack' />
                                                </div>
                                                <p>{b}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className='h-full rounded border border-teal-900 bg-dawnPink'>
                                <h2 className='px-5 py-2 font-display text-2xl'>
                                    Treatable Conditions
                                </h2>
                                <ul
                                    role='list'
                                    className='flex flex-col space-y-2 border-t border-teal-900 p-5'
                                >
                                    {service.conditions &&
                                        service.conditions.map((c, i) => (
                                            <li
                                                key={i}
                                                className='flex flex-row items-center space-x-2'
                                            >
                                                <div>
                                                    <Image
                                                        src={c?.icon?.asset?.url}
                                                        alt={c.title}
                                                        height='23'
                                                        width='23'
                                                    />
                                                </div>
                                                <div>{c.title}</div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className='order-1 flex w-full flex-col rounded border border-teal-900 p-10 lg:order-2 lg:col-span-8'>
                            <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
                                <div className='flex h-20 w-20 px-4 items-center justify-center rounded bg-dawnPink'>
                                    <PuzzlePieceIcon className='h-10 w-10 text-quicksand-dark' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='prose text-black flex gap-4 flex-col'>
                                        <h2 className='font-display text-2xl'>How It Works</h2>
                                        {service.howItWorks && service.howItWorks.map((c, i) => (
                                            <p
                                                key={i}
                                                dangerouslySetInnerHTML={{
                                                    __html: c.replace(/([^:]+):/g, '<strong>$1</strong>:')
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='pb-20'>
                <Container classList='px-5'>
                    <h2 className='pb-5 font-display text-4xl md:text-6xl'>Pricing</h2>
                    <div className='grid gap-10 lg:grid-cols-12'>
                        <ul role='list' className='lg:col-span-8'>
                            {service.packages.map(($package) => (
                                <li
                                    key={$package.title}
                                    className='mb-10 rounded border border-teal-700'
                                >
                                    <div className='flex flex-row border-b border-teal-700'>
                                        <p className='grow p-3 text-xl font-bold xs:bg-transparent'>
                                            {$package.title}
                                        </p>
                                        <p className='border-l-none p-3 text-center font-medium xs:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
                                            Standard
                                        </p>
                                        <p className='border-l border-black bg-dawnPink p-3 text-center font-medium xs:block xs:w-24 xs:border-l xs:border-black sm:w-32'>
                                            Exclusive
                                        </p>
                                    </div>
                                    <ul role='list' className='flex flex-col'>
                                        {Array.isArray($package?.packageItems) &&
                                            $package.packageItems.map((item, i) => (
                                                <div key={i} className='flex flex-row'>
                                                    <li className='w-full flex flex-row justify-between xs:flex-col'>
                                                        <div className='grow p-3'>
                                                            <span className='text-lg font-medium'>
                                                                {item.name}
                                                            </span>
                                                            <span className='block pb-2 text-sm text-gray-400 md:pb-0 md:pl-0'>
                                                                {$package.measurementUnit}
                                                            </span>
                                                        </div>
                                                        <div className='flex flex-row text-center'>
                                                            <div className='xs:hidden sm:w-32 xs:w-24 p-3'>
                                                                ${new Intl.NumberFormat('en-US', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                }).format(Number(item.standardPrice))}
                                                            </div>
                                                            {Number.isFinite(item.exclusivePrice) && (
                                                                <div className='xs:hidden sm:w-32 xs:w-24 p-3 bg-dawnPink border-l border-black'>
                                                                    ${new Intl.NumberFormat('en-US', {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    }).format(Number(item.exclusivePrice))}
                                                                </div>
                                                            )}
                                                            {!Number.isFinite(item.exclusivePrice) && (
                                                                <div className='xs:hidden sm:w-32 xs:w-24 p-3 bg-dawnPink border-l border-black'>
                                                                    {item.exclusivePrice}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </li>
                                                    <li className='hidden p-5 text-center xs:block sm:w-32'>
                                                        $
                                                        {new Intl.NumberFormat('en-US', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        }).format(Number(item.standardPrice))}
                                                    </li>
                                                    {Number.isFinite(item.exclusivePrice) && (
                                                        <li className='border-l-none hidden bg-dawnPink p-5 text-center xs:block xs:w-24 xs:border-l xs:border-dawnPink sm:w-32'>
                                                            $
                                                            {new Intl.NumberFormat('en-US', {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            }).format(Number(item.exclusivePrice))}
                                                        </li>
                                                    )}
                                                    {!Number.isFinite(item.exclusivePrice) && (
                                                        <li className='border-l-none hidden bg-dawnPink p-5 text-center xs:block xs:w-24 xs:border-l xs:border-dawnPink sm:w-32'>
                                                            ${item.exclusivePrice}
                                                        </li>
                                                    )}
                                                </div>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <div className='hidden lg:col-span-4 lg:block'>
                            <Image
                                src={service.packagesImage.asset.url}
                                alt={service.packagesImage.alt}
                                draggable='false'
                                sizes='100vw'
                                className='h-[95%] rounded object-cover object-center'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <Faqs data={service.faqs} />
        </>
    );
};

export default ServicePage;
