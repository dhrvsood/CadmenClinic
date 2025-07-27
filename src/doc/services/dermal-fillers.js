const dermal_fillers = {
    slug: "dermal-fillers",
    tabTitle: "Dermal Fillers",
    isMigrated: true,
    category: "skin-treatments",
    general: {
        strikePrice: "$799",
        salePrice: "$599",
        perUnit: " / syringe",
        discount: "25%",
        shortTitle: "Dermal Filler",
        longTitle: "Dermal Filler"
    },
    hero: {
        img: "/seeTheResultsSlider/skin/botox-front.avif",
        tagline: "Enhance Your Confidence",
        description: "reduce the signs of aging with quick, minimally invasive Botox treatments."
    },
    beforeAfters: [
        {
            id: 1,
            title: "Kyra's Results",
            subtitle: "After two weeks with chin fillers",
            img: "/media/testimonials/dermalKyra.avif"
        },
        {
            id: 2,
            title: "Joceyln's Results",
            subtitle: "After three weeks with cheek, lip, and chin fillers",
            img: "/media/testimonials/dermalJocelyn.avif"
        },
        {
            id: 3,
            title: "Amy’s Results",
            subtitle: "After two weeks with cheek, lip, and chin fillers",
            img: "/media/testimonials/dermalAmy.avif"
        }
    ],
    whatAndHowItWorks: {
        titlePrefix: "What is Dermal Filler",
        titleEmphasis: "and How Does It Work?",
        points: [
            {
                heading: "Dermal Fillers are FDA-approved and trusted worldwide",
                description: "From softening deep nasolabial folds to enhancing cheek contours, dermal fillers offer a safe, versatile solution for anyone seeking a refreshed yet natural-looking transformation."
            },
            {
                heading: "Targeted Injections",
                description: "A filler is precisely injected beneath the skin to enhance or restore volume in specific areas.",
            },
            {
                heading: "Hydration & Support",
                description: "Hyaluronic acid components bind with water molecules, plumping the skin and creating a firmer, more youthful look."
            },
            {
                heading: "Collagen Boost",
                description: "Some fillers stimulate the body’s natural collagen production, offering longer-lasting improvements in skin texture and elasticity."                
            }
        ],
        img: "/media/botox-what-and-how.png"
    },
    ourProcess: {
        title: "Dermal Fillers",
        consultation: "Begin with a personalized consultation where our experts assess your facial structure, skin concerns, and aesthetic goals. We’ll create a tailored dermal filler treatment plan designed to deliver optimal results that align perfectly with your needs.",
        treatment: "During your dermal filler session, a skilled practitioner will carefully administer precise injections to targeted areas. The procedure is relatively quick, minimally invasive, and designed for your comfort and safety.",
        results: "Enjoy fuller, smoother, and more youthful-looking features as the filler integrates with your skin. While many notice immediate improvements, final results continue to refine over the next few days. With minimal downtime, you’ll look refreshed and confident in no time."
    },
    treatmentCards: {
        title: {
            prefix: "Affordable Dermal Fillers Treatments",
            emphasis: "Tailored to You"
        },
        description: "Affordable, transparent Dermal Fillers pricing tailored to your goals and budget.",
        regularUnit: "syringe regular price",
        specialUnit: "syringe new patient price",
        cards: [
            {
                name: "Stylage",
                regularPrice: 799,
                specialPrice: 599,
                points: [
                    {
                        title: "Wide Range of Formulas",
                        description: "With multiple Stylage variants, each designed for different areas and concerns, this family of fillers offers tailored solutions for lips, cheeks, under-eye hollows, and more."
                    },
                    {
                        title: "Precise Wrinkle Correction",
                        description: "Smooths lines and folds, such as nasolabial folds, providing a naturally youthful appearance without looking overdone."
                    },
                    {
                        title: "Minimal Downtime",
                        description: "Most patients can resume daily activities almost immediately, making it a convenient option for busy lifestyles."
                    }
                ]
            },
            {
                name: "RHA Filler",
                regularPrice: 799,
                specialPrice: 599,
                points: [
                    {
                        title: "Adaptive Movement Technology",
                        description: "RHA (Resilient Hyaluronic Acid) fillers are designed to move seamlessly with facial expressions, preserving a natural look even in highly dynamic areas of the face."
                    },
                    {
                        title: "Dynamic Wrinkle Reduction",
                        description: "Ideal for moderate to deep dynamic wrinkles, such as around the mouth and eyes, with results that remain soft and flexible."
                    },
                    {
                        title: "Preserves Facial Expressions",
                        description: "RHA’s unique formulation allows you to enjoy a rejuvenated appearance without compromising your authentic range of expression."
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
            emphasis: "Dermal Fillers is right"
        }
    },
    preparingForAppointment: {
        titlePrefix: "Preparing for Your",
        titleEmphasis: "Dermal Filler Appointment",
        subheading: "Here are some tips to help ensure a comfortable, successful experience:",
        points: [
            {
                heading: "Avoid Blood Thinners",
                description: "A few days before your appointment, avoid medications and supplements that can thin your blood, such as aspirin, ibuprofen, and fish oil. This reduces the risk of bruising at the injection site."
            },
            {
                heading: "Skip Alcohol and Tobacco",
                description: "Both can increase bruising and affect your skin’s recovery. Try to avoid alcohol for at least 24 hours before and after treatment.",
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
        sections: [
            {
                title: "During the Procedure",
                points: [
                    "Quick and Minimally Invasive: Dermal filler injections typically take 15–30 minutes. Most clients describe the sensation as a slight pinch or pressure. Your provider may gently massage the area during the procedure to ensure an even distribution."
                ]
            },
            {
                title: "Post-Treatment Care",
                points: [
                    "Avoid Intense Activity: Refrain from vigorous exercise, prolonged sun exposure, or extreme temperatures (hot tubs, saunas) for the first 24–48 hours to minimize swelling and bruising.",
                    "Reduce Swelling & Bruising: Use cold compresses or ice packs if recommended by your injector. Avoid alcohol and blood-thinning medications or supplements (unless medically necessary) for a short period post-treatment to further reduce bruising.",
                    "Stay Hydrated: Drinking plenty of water supports overall skin health and may help the filler integrate more smoothly."
                ]
            },
            {
                title: "When to Expect Results",
                points: [
                    "Immediate Improvement: You’ll see an instant boost in volume and contour, though some swelling or bruising can last for a few days.",
                    "Full, Settled Results: Most people notice their final outcome within 1–2 weeks, once the filler has fully integrated with your skin."
                ]
            }
        ]
    },
    transformations: {
        title: {
            first: "Understanding ",
            emphasis: "the Risks",
            last: " of Dermal Fillers"
        },
        description: "Although dermal fillers are generally considered safe when administered by an experienced professional, it’s important to be aware of the potential risks. Here are some possible side effects and how we manage them at CADMEN Clinic:",
        cards: [
            {
                id: 1,
                title: "Temporary Redness, Swelling, or Bruising",
                subtitle: "These are the most common side effects and typically subside within a few days. Our injectors use advanced techniques to minimize bruising, and we’ll provide detailed aftercare guidance (like cold compresses) to help you recover quickly.",
                img: "/media/services/botox/redness.png"
            },
            {
                id: 2,
                title: "Mild Discomfort or Tenderness",
                subtitle: "Some clients experience minor soreness or pressure at the injection site. This usually fades within a few days and can often be managed with over-the-counter pain relief if needed.",
                img: "/media/services/botox/headaches.png"
            },
            {
                id: 3,
                title: "Lumps or Nodules",
                subtitle: "Fillers can occasionally form small lumps or nodules under the skin. To reduce this risk, our skilled injectors use precise placement techniques and may gently massage the area immediately after injection. In some cases, lumps can be dissolved or adjusted with additional treatment.",
                img: "/media/services/botox/eyelid.png"
            },
            {
                id: 4,
                title: "Asymmetry or Unintended Results",
                subtitle: "If filler is not placed with precision, there’s a chance of unevenness or asymmetry. At CADMEN Clinic, our injectors have extensive training in facial anatomy to help ensure a balanced, natural-looking outcome. We also schedule follow-up appointments to make any necessary refinements.",
                img: "/media/services/botox/allergy.png"
            },
            {
                id: 5,
                title: "Allergic Reactions",
                subtitle: "While rare, allergic reactions to certain filler ingredients can occur. During your consultation, we’ll thoroughly review your medical history, discuss any known allergies, and help determine the safest product for you.",
                img: "/media/services/dermal-fillers/dermalAllergicReactions.avif"
            },
            {
                id: 6,
                title: "Your Safety is Our Priority",
                subtitle: "At CADMEN Clinic, we follow strict safety protocols, use FDA-approved fillers, and stay current with best practices to minimize risks. If you have any questions or concerns, our team is here to guide you through every step of the treatment process, ensuring a safe and positive experience.",
                img: "/media/services/dermal-fillers/dermalYourSafety.avif"
            }
        ]
    },
    faqs: [
        {
            id: 1,
            question: "How Soon Will I See Results?",
            answer: "With most dermal fillers, you’ll notice instant volume and contour improvement right after your treatment. However, you may experience some swelling or mild bruising, which typically subsides within a few days. Final results often become apparent after 1–2 weeks once the filler fully settles."
        },
        {
            id: 2,
            question: "How Often Should I Get Dermal Fillers?",
            answer: "The longevity of dermal fillers depends on the product used, the treatment area, and individual factors like your metabolism. Most fillers last anywhere from 6 to 18 months. Scheduling maintenance touch-ups as recommended by your injector helps you maintain consistent, natural-looking results over time."
        },
        {
            id: 3,
            question: "Can Fillers Help with Medical or Reconstructive Needs?",
            answer: "While not as widely recognized for medical conditions as neuromodulators (like Botox), dermal fillers can sometimes be used for reconstructive purposes—for example, to correct certain facial asymmetries, fill acne scars, or address volume loss due to medical issues. Your provider can evaluate your specific needs and discuss if dermal fillers are an appropriate option."
        },
        {
            id: 4,
            question: "Are Dermal Fillers Only for Women?",
            answer: "Absolutely not! Dermal fillers are a popular option for clients of all genders. At CADMEN Clinic, we tailor each filler treatment to your unique facial structure and desired outcome, regardless of gender. Many men opt for dermal fillers to enhance facial contours, soften lines, or add definition to the jawline—without appearing “overdone.”"
        }
    ]
}

export default dermal_fillers;