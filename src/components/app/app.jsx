import React from "react";
import Header from "../header/header";
import InfoTabSection from "../info-tab-section/info-tab-section";
import Footer from "../footer/footer";
import ProductSection from "../product-section/product-section";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <ProductSection/>
        <InfoTabSection/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
