import React from "react";

export default function PriceLabel(props) {
  return (
    <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
      <span className="disChip-label">{props.sellPrice} DUX</span>
    </div>
  );
}
