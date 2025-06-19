import Image from 'next/image';

const WhyPeopleChooseCard = ({ card }) => {
  return (
    <div className="card">
      {/* icon */}
      <div className="card-icon-container">
        <Image
          src={card.icon}
          alt={`${card.title} icon`}
          width={50}
          height={50}
        />
      </div>

      {/* title */}
      <h3 className="card-title">
        <span dangerouslySetInnerHTML={{ __html: card.title }}></span>
      </h3>

      {/* image */}
      <div className="card-image-container">
        <Image
          src={card.img}
          alt={card.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* description */}
      <p className="card-description">{card.description}</p>

      <style jsx>{`
        .card {
          border-radius: 15px;
          overflow: hidden;
          /* The background-color is effectively overridden by the linear-gradient below */
          background: linear-gradient(45deg, rgba(244, 243, 239, 1) 50%, rgba(235, 219, 214, 1) 100%);
          display: flex;
          flex-direction: column;
          max-width: 350px;
          width: 100%;
          align-items: center;
          text-align: center;
        }

        .card-title {
          font-family: "Cormorant", serif;
          font-size: 1.7em;
          padding: 0px 5px 15px 5px;
          color: #333;
          width: 100%;
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 256px;
          overflow: hidden;
          /* This background-color will be covered by the image and gradient, but good to have a fallback */
          background-color: #fff;
        }

        /* Gradient Overlay for the image */
        .card-image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(244, 243, 239, 0.8) 0%, /* Start with a semi-transparent blend of the top card color */
            rgba(244, 243, 239, 0) 20%,  /* Fully transparent after 20% from top */
            rgba(235, 219, 214, 0) 80%,  /* Fully transparent until 80% from top */
            rgba(235, 219, 214, 0.8) 100% /* End with a semi-transparent blend of the bottom card color */
          );
          pointer-events: none; /* Allows clicks to pass through to the image */
          z-index: 1; /* Ensure the gradient is on top of the image */
        }

        .card-icon-container {
          display: flex;
          justify-content: center;
          padding: 15px 0;
          width: 100%;
        }

        .card-description {
          font-family: "Poppins", sans-serif;
          padding: 15px;
          color: #555;
          font-size: 1em;
          line-height: 1.6;
          flex-grow: 1;
          width: 100%;
        }

        /* Responsive design */
        @media (min-width: 768px) {
          .service-step-card {
            max-width: 450px;
          }
        }

        @media (min-width: 1024px) {
          .service-step-card {
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyPeopleChooseCard;


// import Image from 'next/image';

// const WhyPeopleChooseCard = ({ card }) => {
//   return (

    
//     <div className="card">
//       {/* icon */}
//       <div className="card-icon-container"> {/* New container for centering the icon */}
//         <Image
//           src={card.icon}
//           alt={`${card.title} icon`}
//           width={50}
//           height={50}
//         />
//       </div>
      
//       {/* title */}
//       <h3 className="card-title">
//         <span dangerouslySetInnerHTML={{ __html: card.title }}></span>
//       </h3>

//       {/* image */}
//       <div className="card-image-container">
//         <Image
//           src={card.img}
//           alt={card.title}
//           fill // Use fill to make the image fill its parent container
//           style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
//         />
//       </div>

//       {/* description */}
//       <p className="card-description">{card.description}</p>

//       <style jsx>{`
//         .card {
//           border-radius: 15px; /* Rounded corners */
//           overflow: hidden; /* Ensures image corners are also rounded */
//           background-color: #F4F3EF;
//           background: linear-gradient(45deg,rgba(244, 243, 239, 1) 50%, rgba(235, 219, 214, 1) 100%);
//           display: flex;
//           flex-direction: column; /* Explicitly ensures text always goes below the image */
//           max-width: 350px; /* Adjust as needed for card width */
//           width: 100%;
//           /* margin: 20px; If you removed this previously, keep it removed */
//           align-items: center; /* Center content horizontally */
//           text-align: center; /* Center text within the card */
//         }

//         .card-title {
//           font-family: "Cormorant", serif;
//           font-size: 1.7em;
//           padding: 0px 5px 15px 5px;
//           color: #333; /* Regular font color */
//           width: 100%; /* Ensure title takes full width to center effectively */
//         }

//         .card-image-container {
//           position: relative; /* ESSENTIAL for layout="fill" to work */
//           width: 100%; /* Image container fills the card's width */
//           height: 256px; /* FIXED HEIGHT for the image container as requested */
//           overflow: hidden; /* Hides any part of the image that spills out */
//           /* padding: 0 7.5%; Removed padding to allow image to fill 100% width */
//           box-sizing: border-box; /* Ensures padding is included within the 100% width */
//           background-color: #fff; /* Ensures the padded area is white */
//         }

//         .card-icon-container {
//           display: flex;
//           justify-content: center; /* Center the icon horizontally */
//           padding: 15px 0; /* Add some vertical padding around the icon */
//           width: 100%; /* Ensure container takes full width to center effectively */
//         }

//         .card-description {
//           font-family: "Poppins", sans-serif;
//           padding: 15px;
//           color: #555;
//           font-size: 1em;
//           line-height: 1.6;
//           flex-grow: 1; /* Allows description to take up available space */
//           width: 100%; /* Ensure description takes full width to center effectively */
//         }

//         /* Responsive design */
//         @media (min-width: 768px) { /* Midsize screens */
//           .service-step-card {
//             max-width: 450px;
//           }
//         }

//         @media (min-width: 1024px) { /* Desktop screens */
//           .service-step-card {
//             max-width: 300px; /* Adjusted based on previous discussions */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhyPeopleChooseCard;