import { Carousel, IconButton } from "@material-tailwind/react";
import Image from 'next/image'

export default function ImageViewer({ data }) {
    return (
        <div className='flex m-8 xl:m-0 xl:w-[45%]'>
            {!data.length == 1 && (
                <Carousel className='rounded-2xl relative h-fit'
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-6 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-customBlack py-2 px-3 rounded-full">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute bottom-0 left-4 -translate-y-2/4 bg-customBlack hover:bg-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute bottom-0 !right-4 -translate-y-2/4 bg-customBlack hover:bg-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    {data.map(({ asset, id }) => (
                        <Image key={id} src={asset.url} height={1471} width={982} alt={`SampleImage${id}`} priority={true} />
                    ))}
                </Carousel>
            )}
            {data.length == 1 && (
                <Carousel className='rounded-2xl relative h-fit'
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute hidden bottom-6 left-2/4 z-50 -translate-x-2/4 gap-2 bg-customBlack py-2 px-3 rounded-full">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute hidden bottom-0 left-4 -translate-y-2/4 bg-customBlack hover:bg-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute hidden bottom-0 !right-4 -translate-y-2/4 bg-customBlack hover:bg-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    {data.map(({ asset, id }) => (
                        <Image key={id} src={asset.url} height={1471} width={982} alt={`SampleImage${id}`} priority={true} />
                    ))}
                </Carousel>
            )}
        </div>
    )
}