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
          layout="fill"
          objectFit="cover"
          className="card-image"
        />
      </div>
      <p className="card-description">{description}</p>

      <style jsx>{`
        .service-step-card {
          flex: 1 1 300px; /* Grow and shrink, but maintain minimum width */
          border-radius: 15px;
          overflow: hidden;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .card-title {
          font-family: "Cormorant", serif;
          font-size: 1.7em;
          padding: 10px 5px 15px 5px;
          color: #333;
          text-align: center;
        }

        .underlined-id {
          text-decoration: underline;
          text-decoration-color: #9a7f71;
          color: #9a7f71;
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 256px;
          overflow: hidden;
          padding: 0 7.5%;
          box-sizing: border-box;
          background-color: #fff;
        }

        .card-description {
          font-family: "Poppins", sans-serif;
          padding: 15px;
          color: #555;
          font-size: 1em;
          line-height: 1.6;
          flex-grow: 1;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ServiceStepCard;