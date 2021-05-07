import React from "react";
import PromoSlider from "../promo-slider/promo-slider";
import ProductCard from "../product-card/product-card";

const ProductSection = () => {
  return (
    <section className="product-section">
      <PromoSlider/>
      <ProductCard/>
    </section>
  );
};

ProductSection.displayName = `ProductSection`;

export default ProductSection;
