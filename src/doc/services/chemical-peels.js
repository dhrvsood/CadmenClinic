const chemical_peels = {
    slug: "chemical-peels",
    // isMigrated: true,
    category: "skin-treatments",
    general: {
        strikePrice: "$499",
        salePrice: "$399",
        perUnit: " / session",
        discount: "20%",
        shortTitle: "Chemical Peels",
        longTitle: "Chemical Peels"
    },
    hero: {
        img: "/media/services/lip-fillers/hero.avif",
        tagline: "Transform Damaged Skin",
        description: "transform damaged skin into radiant perfection."
    },
    beforeAfters: [
        {
            id: 1,
            title: "Laura's Results",
            subtitle: "Results after 3 chemical peels",
            img: "/media/testimonials/chemicalpeel_Laura.webp"
        },
        {
            id: 2,
            title: "Gina's Results",
            subtitle: "After 6 chemical peels",
            img: "/media/testimonials/chemicalpeel_Gina.webp"
        },
        {
            id: 3,
            title: "Maddie's Results",
            subtitle: "After 4 chemical peels",
            img: "/media/testimonials/chemicalpeel_Maddie.webp"
        },
        {
            id: 4,
            title: "Teresa's Results",
            subtitle: "After 5 chemical peels",
            img: "/media/testimonials/chemicalpeel_Teresa.webp"
        }
    ],
    whatAndHowItWorks: {
        titlePrefix: "What are Chemical Peels",
        titleEmphasis: "and How Does It Work?",
        points: [
            {
                heading: "Widely Consumed for Natural Collagen Production",
                description: "Medical-grade acids create controlled injury to stimulate your body's natural healing and collagen production for lasting transformation."
            },
            {
                heading: "Trichloroacetic Acid (TCA) Penetration",
                description: "This powerful acid breaks down damaged skin proteins and keratin, creating controlled peeling that removes years of accumulated damage. Your skin rebuilds itself with fresh, healthy cells for dramatic improvement.",
            },
            {
                heading: "Collagen Regeneration Activation",
                description: "Triggers your body's wound healing response, flooding treated areas with new collagen and elastin. Weeks pass. The improvements keep building. Scars fill in, texture smooths out naturally"
            }
        ],
        img: "/media/botox-what-and-how.png"
    },
    ourProcess: {
        title: "Chemical Peels",
        subheading: "Professional treatments completed in comfortable office setting \nwith immediate return to most daily activities.",
        consultation: "Your skin tells its unique story. We examine texture, pigmentation, and scarring patterns. Discuss your goals and concerns openly. Some faces need gentle resurfacing. Others require deeper intervention. A detailed analysis reveals your optimal treatment plan.",
        treatment: "Precise application using medical-grade acids tailored to your skin type. We carefully control penetration depth and contact time. The process feels like mild sunburn initially. Cool compresses provide immediate relief. Most treatments completed within 30-45 minutes.",
        results: "Gradual improvements appear over 7-14 days as damaged skin peels away. Your transformation builds slowly, revealing smoother texture and brighter tone. Multiple sessions spaced 4-6 weeks apart maximize results without overwhelming your skin."
    },
    treatmentCards: {
        title: {
            prefix: "Personalized Chemical Peeling Treatments",
            emphasis: "Designed for You"
        },
        description: "At CADMEN Clinic, we understand that every skin concern is unique. That's why we customize your chemical peel treatment plan.",
        regularUnit: "Session Regular Price",
        specialUnit: "First Session Special",
        cards: [
            {
                name: "AlumierMD Glow Peel",
                regularPrice: 499,
                specialPrice: 399,
                points: [
                    {
                        title: "A powerful yet gentle medical-grade peel combining AHAs and retinol to deeply exfoliate and rejuvenate dull, tired skin."
                    },
                    {
                        title: "Advanced Brightening Formula",
                        description: "Combines lactic acid, salicylic acid, and resorcinol to target uneven tone, acne, and pigmentation."
                    },
                    {
                        title: "Reduces Fine Lines & Acne Scars",
                        description: "Encourages cellular turnover and collagen production for smoother, clearer skin."
                    },
                    {
                        title: "Minimal Downtime, Maximum Glow",
                        description: "Mild flaking or redness may occur, but most clients return to routine quickly."
                    },
                    {
                        title: "Clinician-Curated, Skin-Safe",
                        description: "Tailored to your skin type and goals with AlumierMD’s proven protocols."
                    }
                ]
            },
            {
                name: "AlumierMD Radiant 30 Peel",
                regularPrice: 799,
                specialPrice: 599,
                points: [
                    {
                        title: "A lactic acid-based resurfacing treatment designed to gently exfoliate, hydrate, and boost radiance."
                    },
                    {
                        title: "Ideal for Sensitive & First-Time Peel Clients",
                        description: "Mild yet effective — perfect for those easing into medical-grade skincare."
                    },
                    {   
                        title: "Boosts Hydration While Exfoliating",
                        description: "Lactic acid smooths and refines without stripping the skin barrier."
                    },
                    {
                        title: "Targets Dullness & Uneven Skin Tone",
                        description: "Leaves skin feeling fresh, supple, and visibly more radiant."
                    },
                    {
                        title: "Quick Treatment, Instant Glow",
                        description: "Done in under 30 minutes — a great lunchtime skin pick-me-up."
                    }
                ]
            }
        ]
    },
    infoInteractive: {
        title: {
            prefix: "Conditions a Medical Grade Chemical Peel",
            emphasis: "Can Help With"
        },
        description: "Chemical peeling tackles tough skin problems that over-the-counter treatments can’t fix, giving patients medical-grade options for long-lasting results and reassurance.",
        data: [
            {
                img: "/media/services/skin_interactive.webp",
                id: 1,
                name: "Acne Scars",
                description: "Transform pitted ice pick scars and raised keloids into a smooth, even texture. Medical-grade acids designed for use in medicine can fix scars and also encourage new collagen growth for lasting results."
            },
            {
                img: "/media/services/skin_interactive.webp",
                id: 2,
                name: "Hyperpigmentation",
                description: "Help get rid of tough dark areas brought on by hormones, sun or inflammation. Professional peels help remove too much melanin and keep new spots from appearing for clearer skin."
            },
            {
                img: "/media/services/skin_interactive.webp",
                id: 3,
                name: "Dark Spots",
                description: "Remove age spots, sun spots, and post-inflammatory marks that make you look older. Controlled exfoliation targets pigmented cells specifically while preserving surrounding healthy tissue for even results."
            },
            {
                img: "/media/services/skin_interactive.webp",
                id: 4,
                name: "Wrinkles",
                description: 'Smooth fine lines around eyes, mouth, and forehead by removing damaged surface layers. Deeper peels stimulate collagen production to fill wrinkles from within for natural anti-aging results.'
            },
            {
                img: "/media/services/skin_interactive.webp",
                id: 5,
                name: "Melasma",
                description: "Break the cycle of hormonal pigmentation with targeted treatments that clear existing patches and prevent recurrence. Professional-strength peels penetrate deeper than topical lighteners for lasting improvement."
            },
            {
                img: "/media/services/skin_interactive.webp",
                id: 6,
                name: "Bad Pores",
                description: "Bring down the size of pores by clearing oil and dead skin that may expand them. By having regular beauty treatments, pores are cleaned and refined and the skin’s texture and appearance improve."
            }
        ]
    },
    wantToLearnMore: {
        title: {
            prefix: "Curious About ",
            emphasis: "Chemical Peels?",
            end: "\nStart here"
        },
        description: "New to professional peels? Already tried spa treatments? Our team can walk you through your options. We've helped hundreds of patients make informed choices, and we start with a free, pressure-free consultation about what might work for your skin."
    },
    preparingForAppointment: {
        titlePrefix: "Getting Ready for Your",
        titleEmphasis: "Chemical Face Peels Appointment",
        subheading: "Getting ready properly for your chemical peel treatment helps you get the best results and prevents most complications.",
        points: [
            {
                heading: "Stop Retinoid Products",
                description: "Discontinue tretinoin, retinol and prescription retinoids 5-7 days prior to your appointment. Applying these with chemicals can raise skin sensitivity and cause more peeling or redness than intended."
            },
            {
                heading: "Avoid Sun Exposure",
                description: "Stay out of direct sunlight for 2 weeks prior to treatment. Tanned or sunburned skin cannot safely receive chemical peels and may develop permanent pigmentation changes.",
            },
            {
                heading: "Hydrate Your Skin",
                description: "Apply gentle moisturizers on your skin every day in the days prior to treatment. If your skin is well hydrated, chemical peels will work better, and you’ll recover faster with no problems."
            }
        ],
        img: "/media/services/chemical-peels/preparingForAppointment.webp"
    },
    expectDuringAfter: {
        title: {
            prefix: "How to Prepare for",
            emphasis: "Your Chemical Peel",
            end: " Treatment"
        },
        img: "/media/services/chemical-peels/expectDuringAfter.webp",
        subheading: "Specialized preparation protocol ensures VI peel safety and maximizes your skin transformation results.",
        sections: [
            {
                title: "Pre-Treatment Preparation and Guidelines",
                points: [
                    "Begin using prescribed pre-treatment products 2 weeks before your appointment to prime skin for optimal peel penetration and results."
                ]
            },
            {
                title: "Post-Treatment Care",
                points: [
                    "Follow specific aftercare instructions including gentle cleansing, prescribed moisturizers, and strict sun protection for 2 weeks following treatment."
                ]
            }
        ]
    },
    transformations: {
        title: {
            first: "Understanding ",
            emphasis: "the Risks",
            last: " of a Facial Chemical Peel"
        },
        description: "When the procedure is done by a skilled professional, chemical peels are very safe, yet some temporary effects can happen as the skin heals.",
        cards: [
            {
                id: 1,
                title: "Temporary Redness and Sensitivity",
                subtitle: "This is typical, lasting 3-7 days and similar to a mild sunburn when you take care of the area and stay out of direct sunlight.",
                img: "/media/services/chemical-peels/redness.webp"
            },
            {
                id: 2,
                title: "Mild Peeling and Flaking",
                subtitle: "Expected skin shedding for 5-10 days as damaged layers naturally slough off to reveal fresh skin underneath.",
                img: "/media/services/chemical-peels/flaking.webp"
            },
            {
                id: 3,
                title: "Temporary Darkening of Treated Areas",
                subtitle: "Possible pigment changes lasting 2-4 weeks, especially with deeper peels, resolving completely with proper aftercare.",
                img: "/media/services/chemical-peels/darkening.webp"
            },
            {
                id: 4,
                title: "Minor Swelling Around Eyes",
                subtitle: "Occasional puffiness for 24-48 hours, particularly with medium-depth peels, managed with cool compresses and elevation.",
                img: "/media/services/chemical-peels/swelling.webp"
            }
        ]
    },
    faqs: [
        {
            id: 1,
            question: "What do results look like?",
            answer: "Expect smoother texture, even skin tone, reduced scarring, and brighter complexion. Results vary by peel depth, with light peels providing subtle glow and deep peels delivering dramatic transformation over several weeks of healing."
        },
        {
            id: 2,
            question: "When will I see results?",
            answer: "Initial improvements appear within 7–10 days as peeling subsides. Full results develop over 4–6 weeks as new collagen forms. Multiple treatments spaced monthly provide cumulative benefits for maximum skin transformation and lasting improvement."
        },
        {
            id: 3,
            question: "Are chemical peels safe?",
            answer: "Yes, when performed by trained professionals using medical-grade products. Temporary redness and peeling are normal. Serious complications are rare with proper patient selection, technique, and aftercare following established medical protocols and safety guidelines."
        },
        {
            id: 4,
            question: "Do chemical peels hurt?",
            answer: "Many patients feel a burning sensation when they apply the product which lasts for 5–10 minutes and then a sunburn-like sensation for 24–48 hours. Stronger peels might mean you need pain medicine, though the discomfort is mild and only lasts for a short while."
        },
        {
            id: 5,
            question: "Are chemical peels worth it?",
            answer: "Absolutely. Professional peels provide lasting results superior to over-the-counter products, improving confidence and skin health. Investment pays long-term dividends in reduced need for makeup and skincare products while delivering dramatic improvements."
        },
        {
            id: 6,
            question: "Chemical peel recovery time?",
            answer: "Light peels require 3–5 days with minimal flaking. Visible peeling occurs after 7–14 days with medium peels. Complete healing from a deep peel takes about 2 to 3 weeks. Planning around social events ensures a comfortable recovery experience."
        },
        
    ]
}

export default chemical_peels;