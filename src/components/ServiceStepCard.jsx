// src/components/ServiceStepCard.jsx
import Image from 'next/image';

const ServiceStepCard = ({ img, id, title, description }) => {
  return (
    <div className="service-step-card">
      <h3 className="card-title">
        <span className="underlined-id"><strong>Step {id}</strong></span>{'\n'}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
      <div className="card-image-container">
        <Image
          src={img}
          alt={`Step ${id} - ${title.replace(/<[^>]*>?/gm, '')}`}
          // REMOVED: width={511}
          // REMOVED: height={256}
          layout="fill" // Ensures the image fills the parent container's dimensions
          objectFit="cover" // Crops the image to fit the container while maintaining aspect ratio
          className="card-image"
        />
      </div>
      <p className="card-description">{description}</p>

      <style jsx>{`
        .service-step-card {
          border-radius: 15px; /* Rounded corners */
          overflow: hidden; /* Ensures image corners are also rounded */
          background-color: #fff;
          display: flex;
          flex-direction: column; /* Explicitly ensures text always goes below the image */
          max-width: 350px; /* Adjust as needed for card width */
          width: 100%;
          /* margin: 20px; If you removed this previously, keep it removed */
        }

        .card-title {
          font-family: "Cormorant", serif;
          font-size: 1.7em;
          padding: 10px 5px 15px 5px;
          color: #333; /* Regular font color */
          text-align: center;
        }

        .underlined-id {
          text-decoration: underline;
          text-decoration-color: #9a7f71;
          color: #9a7f71;
        }

        .card-image-container {
          position: relative; /* ESSENTIAL for layout="fill" to work */
          width: %; /* Image container fills the card's width */
          height: 256px; /* FIXED HEIGHT for the image container as requested */
          overflow: hidden; /* Hides any part of the image that spills out */
          padding: 0 7.5%; /* This creates 7.5% space on left/right, making image 85% width */
          box-sizing: border-box; /* Ensures padding is included within the 100% width */
          background-color: #fff; /* Ensures the padded area is white */
        }

        .card-description {
          font-family: "Poppins", sans-serif;
          padding: 15px;
          color: #555;
          font-size: 1em;
          line-height: 1.6;
          flex-grow: 1; /* Allows description to take up available space */
          text-align: center;
        }

        /* Responsive design */
        @media (min-width: 768px) { /* Midsize screens */
          .service-step-card {
            max-width: 450px;
          }
        }

        @media (min-width: 1024px) { /* Desktop screens */
          .service-step-card {
            max-width: 300px; /* Adjusted based on previous discussions */
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceStepCard;