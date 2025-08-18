// components/AffordableHairRestoration.jsx
"use client"; // This is a Client Component, it can use client-side hooks

import { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const affordables = [
  {
    id: 1,
    name: "Thinning Hair",
    description: "Gradual reduction in the density or volume of hair - unlike sudden hair loss, thinning typically happens over time and may not result in complete baldness.",
    recommended: "PRP Hair Restoration, Exosome Hair Therapy",
    img: "/media/services/prp/Thinning Hair.jpg",
    icon: "/icons/hair.svg"
  },
  {
    id: 2,
    name: "Receding Hair Line",
    description: "Form of hair loss where the hair gradually thins and pulls back from the forehead or temples, creating a more prominent hairline over time. It's most commonly seen in men as a typical sign of male pattern baldness, but women can experience it too.",
    recommended: "PRP Hair Restoration, Exosome Hair Therapy",
    img: "/media/services/prp/Receding Hair Line.jpg",
    icon: "/icons/hair.svg"
  },
  {
    id: 3,
    name: "Stress-Related",
    description: "Temporary form of hair shedding triggered by physical or emotional stress. One of the most common types is <strong>telogen effluvium</strong>, where a significant number of hair follicles prematurely enter the resting phase of the hair growth cycle, leading to increased shedding.",
    recommended: "PRP Hair Restoration, Exosome Hair Therapy, Mesotherapy Vitamins",
    img: "/media/services/prp/Stress Related.jpg",
    icon: "/icons/hair.svg"
  },
  {
    id: 4,
    name: "Male/Female Pattern Baldness",
    description: "Male and female pattern baldness, also known as <strong>androgenetic alopecia</strong>, is a common hereditary form of hair loss that occurs gradually over time. In <strong>men</strong>, it typically starts with a receding hairline and thinning at the crown, often progressing to partial or complete baldness. In <strong>women</strong>, it usually presents as overall thinning across the scalp, particularly at the part line, without a receding hairline.",
    recommended: "PRP Hair Restoration, Exosome Hair Therapy",
    img: "/media/services/prp/Male Female Pattern Baldness.jpg",
    icon: "/icons/hair.svg"
  },
  {
    id: 5,
    name: "Patchy Hair Loss",
    description: "Condition where hair falls out in small, round, or irregular bald spots on the scalp or other areas of the body. One of the most common causes is <strong>alopecia areata</strong>, an autoimmune disorder where the body’s immune system mistakenly attacks hair follicles.",
    recommended: "Exosome Hair Therapy, Mesotherapy Vitamins",
    img: "/media/services/prp/Patchy Hair Loss.jpg",
    icon: "/icons/hair.svg"
  },
  {
    id: 6,
    name: "Scarring",
    description: "Also known as <strong>cicatricial alopecia</strong>, is a type of permanent hair loss caused by inflammation that destroys hair follicles and replaces them with scar tissue. This damage prevents hair from growing back in the affected areas.",
    recommended: "Exosome Hair Therapy, Mesotherapy Vitamins",
    img: "/media/services/prp/Scarring.jpg",
    icon: "/icons/hair.svg"
  }
];

const AffordableHairRestoration = () => {
  const [activeTab, setActiveTab] = useState(affordables[0]); // Initialize with the first item

  useEffect(() => {
    if (typeof window !== "undefined") {
      affordables.forEach(item => {
        const img = new window.Image();
        img.src = item.img;
      });
    }
  }, []);


  return (
    <section className="container max-w-full mx-auto px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-between">
        {/* Left Section: Title, Tagline, Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[550px]">
          <h2 className="plasmic_all__lGI85 plasmic_h2__I6CLv PlasmicAreasInteractive_h2__OYojW">
            <div className="plasmic_all__lGI85">Combat Hair Loss at
                <span className="lasmic_default__all plasmic_default__span" style={{
                        fontStyle: "italic",
                        fontWeight: 500,
                        color: "#D19D51"
                      }}> Affordable Prices
                </span>
            </div>
        </h2>
          <p className="plasmic_all__lGI85 plasmic_p__gkQGD PlasmicAreasInteractive_p__PbC78" style={{marginTop: "30px", marginBottom: "30px"}}>
            We offer competitive pricing for high-quality hair restoration treatments performed by certified professionals with experience in hair rejuvenation.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {affordables.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-200
                  ${activeTab.id === item.id
                    ? 'bg-[#9a7f71] text-white shadow-md text-base md:text-lg' // Selected state
                    : 'border border-[#9a7f71] text-[#9a7f71] hover:bg-[#f5f0ed]' // Not selected state (added a subtle hover)
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Image and Text Below */}
        <div className="w-full lg:w-1/2 lg:justify-between">
          {/* Container for fixed aspect ratio image */}
          <div className="relative w-full max-w-full mx-auto overflow-hidden rounded-lg shadow-lg"
               style={{ paddingTop: 'calc(300 / 700 * 100%)' }}> {/* This sets the aspect ratio (height / width * 100%) */}

            <Image
              key={activeTab.img}
              src={activeTab.img}
              alt={activeTab.name}
              layout="fill" // Makes the image fill its parent container
              objectFit="cover" // Crops the image to fit the container while maintaining aspect ratio
              className="absolute inset-0 w-full h-full"
              loading="eager"
            />

          </div>


          <div className="w-full max-w-full mx-auto p-4 sm:p-6 bg-white rounded-b-lg shadow-lg mt-4 "> {/* Added margin-top for spacing */}
            <div className="flex items-center mb-2">
              <Image src={activeTab.icon} alt="Icon" width={28} height={28} className="mr-3 flex-shrink-0" />
              <div className="plasmic_all__lGI85 PlasmicAreaCard_text__qxbqb__MHJZI">{activeTab.name}</div>
            </div>
            <p
              className="plasmic_all__lGI85 plasmic_p__gkQGD CadmenServicePage_p__yiW7R__5meA0"
              dangerouslySetInnerHTML={{ __html: activeTab.description }}
            ></p>
            <p>  </p>
            <p className="plasmic_all__lGI85 plasmic_p__gkQGD CadmenServicePage_p__yiW7R__5meA0">
              <strong>Recommended Treatment: </strong>{activeTab.recommended}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordableHairRestoration;
