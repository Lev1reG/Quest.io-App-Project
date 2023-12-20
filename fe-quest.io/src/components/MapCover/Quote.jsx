import React from "react";

const Quote = ({ property = {} }) => {
  return (
    <div
      style={{
        background: "url(/MapCover/quote.png)",
        backgroundSize: "contain",
      }}
      className={`${property?.parentClass}`}
    >
      <h3 className={`${property?.childClass}`}>
        {property?.text || "Still Working on it!"}
      </h3>
    </div>
  );
};

export default Quote;
