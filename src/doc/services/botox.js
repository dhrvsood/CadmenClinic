const botox = {
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
        img: "/media/services/prp-hair-restoration.webp",
        tagline: "Soften Fine Lines & Wrinkles",
        description: "reduce the signs of aging with quick, minimally invasive Botox treatments."
    },
    beforeAfters: [
        {
            id: 1,
            title: "Julia's Results",
            subtitle: "Results after one month with Botox",
            img: "/media/testimonials/Marcus.jpg"
        },
        {
            id: 2,
            title: "Daria's Results",
            subtitle: "Results after three weeks with Botox",
            img: "/media/testimonials/Jacob.jpg"
        },
        {
            id: 3,
            title: "Anna’s Results",
            subtitle: "Results after 3 PRP Sessions",
            img: "/media/testimonials/Anna.jpg"
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
                regularPrice: "14",
                specialPrice: "9.99",
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
                regularPrice: "15",
                specialPrice: "12.99",
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
    wantToLearnMore: {
        title: {
            emphasis: "Botox is right"
        }
    },
    transformations: {
        title: {
            first: "PRP Hair Restoration Has Already ",
            emphasis: "Transformed",
            last: " 100,000+ Lives"
        },
        cards: [
            {
                id: 1,
                title: "Thinning Hair and Receding Hairline",
                subtitle: "Restore volume and strengthen thinning hair along the hairline for a fuller, thicker appearance.",
                img: "/media/services/prp/7.1.jpg"
            },
            {
                id: 2,
                title: "Bald Spots",
                subtitle: "Stimulate growth in bald areas to encourage new hair follicles and promote even regrowth across the scalp.",
                img: "/media/services/prp/7.2.jpg"
            },
            {
                id: 3,
                title: "Hair Thinning on Crown and Temples",
                subtitle: "Target areas of thinning around the crown and temples for more density and healthier-looking hair",
                img: "/media/services/prp/7.3.jpg"
            },
            {
                id: 4,
                title: "Overall Hair Density",
                subtitle: "Increase the thickness and fullness of your hair, enhancing its natural volume for a refreshed and revitalized appearance.",
                img: "/media/services/prp/7.4.jpg"
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

export default botox;