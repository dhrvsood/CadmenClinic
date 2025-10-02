import Image from 'next/image';

const WhyPeopleChooseCard = ({ icon, title, img, description }) => {
  return (
    <div className="card">
      {/* icon */}
      <div className="card-icon-container">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
        />
      </div>

      {/* title */}
      <h3 className="card-title">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>

      {/* image */}
      <div className="card-image-container">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* description */}
      <p className="card-description">{description}</p>

      <style jsx>{`
        .card {
          border-radius: 15px;
          overflow: hidden;
          background: radial-gradient(circle, rgba(244, 243, 239, 1) 50%, rgba(235, 219, 214, 1) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          /* Responsive sizing */
          width: 100%;
          max-width: 100%;
        }

        @media (min-width: 1200px) {
          .card {
            width: 32%;
            max-width: 32%;
          }
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
          background-color: #fff;
        }

        .card-image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(244, 243, 239, 0.8) 0%,
            rgba(244, 243, 239, 0) 20%,
            rgba(235, 219, 214, 0) 80%,
            rgba(235, 219, 214, 0.8) 100%
          );
          pointer-events: none;
          z-index: 1;
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
      `}</style>
    </div>
  );
};

export default WhyPeopleChooseCard;
