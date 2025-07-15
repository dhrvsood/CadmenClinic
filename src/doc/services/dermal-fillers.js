const dermal_fillers = {
    category: "skin-treatments",
    general: {
        strikePrice: "$14.00",
        salePrice: "$9.99",
        perUnit: " / unit",
        discount: "30%",
        shortTitle: "Botox",
        longTitle: "Botox®"
    },
    hero: {
        img: "/media/services/botox-and-wrinkle-relaxers.jpg",
        tagline: "Soften Fine Lines & Wrinkles",
        description: "reduce the signs of aging with quick, minimally invasive Botox treatments."
    },
    beforeAfters: [
        {
            id: 1,
            title: "Julia's Results",
            subtitle: "Results after one month with Botox",
            img: "/media/testimonials/botox_Julia.avif"
        },
        {
            id: 2,
            title: "Daria's Results",
            subtitle: "Results after three weeks with Botox",
            img: "/media/testimonials/botox_Daria.avif"
        },
        {
            id: 3,
            title: "Anna’s Results",
            subtitle: "Results after 3 PRP Sessions",
            img: "/media/testimonials/botox_Anna.avif"
        }
    ],
    whatAndHowItWorks: {
        titlePrefix: "What is Botox",
        titleEmphasis: "and How Does It Work?",
        points: [
            {
                heading: "Botox is FDA-approved and trusted worldwide",
                description: "This remarkable treatment works by temporarily relaxing targeted muscles, helping to reduce the appearance of fine lines and wrinkles caused by repeated facial expressions."
            },
            {
                heading: "Cater to Many Use Cases",
                description: "Whether you’re looking to soften crow’s feet, forehead lines, or frown lines, Botox offers a safe and effective solution for achieving a rejuvenated appearance.",

            },
            {
                heading: "How it Works",
                description: "Botox blocks nerve signals to specific muscles, preventing them from contracting. By targeting the neuromuscular junction, it inhibits the release of acetylcholine—a neurotransmitter that triggers muscle movement. This temporary “freeze” allows the skin above these muscles to appear smoother and more refreshed."
            }
        ],
        img: "/media/botox-what-and-how.png"
    },
    ourProcess: {
        title: "Botox",
        consultation: "Begin with a personalized consultation where our experts assess your skin and discuss your goals. We’ll create a tailored treatment plan to ensure optimal results that align with your needs.",
        treatment: "During your Botox session, a skilled practitioner will administer precise injections to targeted areas.The procedure is quick, minimally invasive, and designed for your comfort.",
        results: "Enjoy smoother, younger-looking skin as the Botox begins to work over the next few days. With minimal downtime, you’ll look refreshed and confident in no time."
    },
    treatmentCards: {
        title: {
            prefix: "Affordable Botox Treatments",
            emphasis: "Tailored to You"
        },
        description: "Affordable, transparent Botox pricing tailored to your goals and budget.",
        regularUnit: "unit regular",
        specialUnit: "unit",
        cards: [
            {
                name: "Dysport",
                regularPrice: 14,
                specialPrice: 9.99,
                points: [
                    {
                        title: "Targeted for Larger Areas",
                        description: "Dysport’s unique diffusion pattern effectively addresses broader treatment zones."
                    },
                    {
                        title: "Dynamic Wrinkle Reduction",
                        description: "Designed to minimize the appearance of dynamic wrinkles across the face."
                    },
                    {
                        title: "Rapid Action",
                        description: "Spreads quickly to cover a wider surface for efficient, natural-looking results."
                    }
                ]
            },
            {
                name: "Botox",
                regularPrice: 15,
                specialPrice: 12.99,
                points: [
                    {
                        title: "Versatile Treatment",
                        description: "Botox targets facial muscles to address a variety of cosmetic concerns."
                    },
                    {
                        title: "Wrinkle Reduction",
                        description: "Effectively minimizes fine lines and wrinkles for a smoother appearance."
                    },
                    {
                        title: "Natural Results",
                        description: "Delivers a refreshed, rejuvenated look while preserving natural expressions."
                    }
                ]
            }
        ]
    },
    faceInteractive: [
          {
            name: "Undereye Wrinkles",
            range: "1",
            units: "syringe per side",
            face_dot: { top: "42%", left: "63%" }
          },
          {
            name: "Jawline",
            range: "1 - 4",
            units: "syringes total",
            face_dot: { top: "85%", left: "64%" }
          },
          {
            name: "Jowls",
            range: "1 - 3",
            units: "syringes total",
            face_dot: { top: "78%", left: "70%" }
          },
          {
            name: "Smile Lines",
            range: "1 - 2",
            units: "syringes total",
            face_dot: { top: "58%", left: "38%" }
          },
          {
            name: "Cheeks",
            range: "1 - 2",
            units: "syringes",
            face_dot: { top: "55%", left: "65%" }
          },
          {
            name: "Chin",
            range: "1 - 2",
            units: "syringes",
            face_dot: { top: "91%", left: "51%" }
          },
          {
            name: "Under Eye Bags",
            range: "1",
            units: "syringe per side",
            face_dot: { top: "42%", left: "38%" }
          }
        ],
    wantToLearnMore: {
        title: {
            emphasis: "Botox is right"
        }
    },
    preparingForAppointment: {
        titlePrefix: "Preparing for Your",
        titleEmphasis: "Botox Appointment",
        subheading: "Here are some tips to ensure a smooth Botox experience:",
        points: [
            {
                heading: "Avoid Blood Thinners",
                description: "A few days before your appointment, avoid medications and supplements that can thin your blood, such as aspirin, ibuprofen, and fish oil. This reduces the risk of bruising at the injection site."
            },
            {
                heading: "Skip Alcohol and Tobacco",
                description: "WBoth can increase bruising and affect your skin’s recovery. Try to avoid alcohol for at least 24 hours before and after treatment.",
            },
            {
                heading: "Inform Your Provider of Medical History",
                description: "Be transparent about any medical conditions, allergies, or medications you’re taking. This information helps us customize your treatment and prevent potential complications."
            }
        ],
        img: "/media/services/botox/preparingForAppointment.png"
    },
    expectDuringAfter: {
        img: "/media/services/botox/expectDuringAfter.png",
        subheading: "Botox injections are minimally invasive and generally quick, typically taking about 15 to 30 minutes. Most clients describe the feeling as a slight pinch, similar to a mosquito bite.",
        points: [
            "Avoid lying down or bending over for 4 hours after the treatment to prevent the Botox from migrating.",
            "Refrain from intense physical activities for 24 hours.",
            "Avoid rubbing or massaging the treated area, as this may cause the Botox to spread to unintended muscles."
        ],
        footer: "Results will typically begin to appear within 3-5 days, with full effects visible at around two weeks. We invite you to schedule a Follow-Up Appointment to assess your results and make"
    },
    transformations: {
        title: {
            first: "Understanding ",
            emphasis: "the Risks",
            last: " of Botox"
        },
        description: "Although Botox is considered safe when administered by a qualified provider, it’s important to be aware of the potential risks. Here are some possible side effects and how we manage them at Cadmen Clinic.",
        cards: [
            {
                id: 1,
                title: "Temporary Redness, Swelling, or Bruising",
                subtitle: "These are the most common side effects and typically resolve within a day or two. Our injectors use advanced techniques to minimize bruising, and we provide aftercare guidance to help you recover quickly.",
                img: "/media/services/botox/redness.png"
            },
            {
                id: 2,
                title: "Headaches or Minor Discomfort",
                subtitle: "Some clients experience mild headaches or discomfort after Botox. These effects are usually short-lived and can be managed with over-the-counter pain relief if needed.",
                img: "/media/services/botox/headaches.png"
            },
            {
                id: 3,
                title: "Drooping Eyelid or Asymmetry",
                subtitle: "Rarely, Botox can migrate to unintended muscles, potentially causing eyelid drooping or asymmetry. To minimize this risk, our injectors use precise techniques and provide post-treatment guidelines to prevent migration.",
                img: "/media/services/botox/eyelid.png"
            },
            {
                id: 4,
                title: "Allergic Reactions",
                subtitle: "While very rare, allergic reactions to Botox can occur. During your consultation, we’ll review your medical history to ensure you’re a good candidate and discuss any potential allergies.",
                img: "/media/services/botox/allergy.png"
            }
        ]
    },
    faqs: [
        {
            id: 1,
            question: "How do I know if I’m a candidate?",
            answer: "Come in for a complimentary consultation with our expert providers, who will assess your hair and scalp to recommend a customized treatment plan unique for you."
        },
        {
            id: 2,
            question: "When will I see results?",
            answer: "From our experience with over 2,000 clients, results start to show within 3-4 sessions. It is critical to take good care of your scalp and hair outside of the clinic such as using safe shampoos and lotions."
        },
        {
            id: 3,
            question: "Are there side effects or any recovery time needed?",
            answer: "The great thing about PRP is that there is no recovery time needed - most patients feel good enough to immediately go back about their day."
        },
        {
            id: 4,
            question: "Can I do PRP the same day of my consultation?",
            answer: "Yes you can!"
        }
    ]
}

export default dermal_fillers;