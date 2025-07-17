"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const InteractiveInfo = ({
  title,
  description,
  data
}) => {
  const [activeTab, setActiveTab] = useState(data[0]); // Initialize with the first item

  useEffect(() => {
    if (typeof window !== "undefined") {
      data.forEach(item => {
        if (item.img) {
          const img = new window.Image();
          img.src = item.img;
        }
      });
    }
  }, [data]);

  return (
    <section className="container max-w-full mx-auto px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-between">
        {/* Left Section: Title, Tagline, Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[550px]">
          <h2 className="plasmic_all__lGI85 plasmic_h2__I6CLv PlasmicAreasInteractive_h2__OYojW">
            <div className="plasmic_all__lGI85">
              {title.prefix}
              <span
                className="plasmic_default__span"
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#D19D51",
                }}
              >
                {" "}{title.emphasis}
              </span>
            </div>
          </h2>

          {description && (
            <p className="plasmic_all__lGI85 plasmic_p__gkQGD PlasmicAreasInteractive_p__PbC78" style={{ marginTop: "30px", marginBottom: "30px" }}>
              {description}
            </p>
          )}

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-200
                  ${activeTab.id === item.id
                    ? 'bg-[#9a7f71] text-white'
                    : 'border border-[#9a7f71] text-[#9a7f71] hover:bg-[#f5f0ed]'}
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Image and Text Below */}
        <div className="w-full lg:w-1/2 lg:justify-between">
          {activeTab.img && (
            <div
              className="relative w-full max-w-full mx-auto overflow-hidden rounded-lg"
              style={{ paddingTop: 'calc(300 / 700 * 100%)' }}
            >
              <Image
                key={activeTab.img}
                src={activeTab.img}
                alt={activeTab.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
                loading="eager"
              />  
            </div>
          )}

{/* #eaecee */}
          <div className="w-full max-w-full mx-auto p-4 sm:p-6 bg-white mt-4">
            <div className="flex items-center">
              <div className="border border-[#eaecee]-300 rounded-2xl px-4 py-4">
                <Image
                  src={"/icons/headArrow.svg"}
                  width={35}
                  height={35}
                />
              </div>
              <h3
                className="w-full border border-[#eaecee]-300 rounded-2xl px-4 py-4 text-2xl text-[#6c6e6f]"
              >
                {activeTab.name}
              </h3>
            </div>

            <p
              className="text-[#6c6e6f] px-4 py-4 plasmic_all__lGI85 plasmic_p__gkQGD CadmenPRPLander_p__yiW7R__5meA0"
              dangerouslySetInnerHTML={{ __html: activeTab.description }}
            />
            {activeTab.recommended && (
              <p className="text-[#6c6e6f] plasmic_all__lGI85 plasmic_p__gkQGD CadmenPRPLander_p__yiW7R__5meA0 mt-2">
                <strong>Recommended Treatment: </strong>{activeTab.recommended}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveInfo;
