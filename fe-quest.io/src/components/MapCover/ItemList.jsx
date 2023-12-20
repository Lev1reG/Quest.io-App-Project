import React from "react";
import Item from "./Item";
import Quote from "./Quote";

const ItemList = ({ parentClass, itemProperty, quoteProperty }) => {
  return (
    <div className={parentClass}>
      <Item
        property={{
          onClick: itemProperty?.onClick,
          src: itemProperty?.src,
          alt: itemProperty?.alt,
          parentClass: itemProperty?.parentClass,
          childClass: itemProperty?.childClass,
        }}
      />
      <Quote
        property={{
          parentClass: quoteProperty?.parentClass,
          childClass: quoteProperty?.childClass,
          text: quoteProperty?.text,
        }}
      />
    </div>
  );
};

export default ItemList;
