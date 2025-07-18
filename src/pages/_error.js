// pages/_error.js
function Error({ statusCode }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{statusCode ? `${statusCode} Error` : "An error occurred"}</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;
  return { statusCode };
};

export default Error;
