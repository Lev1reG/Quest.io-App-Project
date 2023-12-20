import React from "react";
import Image from "next/image";

const Item = ({ property }) => {
  return (
    <div className={`${property?.parentClass}`}>
      <Image
        onClick={property?.onClick}
        src={property?.src}
        draggable="false"
        fill
        alt={property?.alt}
        className={`${property?.childClass}`}
      />
    </div>
  );
};

export default Item;
