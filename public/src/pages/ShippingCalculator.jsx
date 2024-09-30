import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShippingCalculator = () => {
  return (
    <>
    <div className="pb-4">
      <Header></Header>
      <div className="container mx-auto md:px-8 px-6 max-w-5xl text-center">
        <h1 className="text-3xl font-bold my-6">Shipping Cost Calculator</h1>
        <img
          src="./project-2.png"
          alt="Shipping Cost Calculator"
          className="mx-auto mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="text-left">
          <h3 className="font-bold">1.Shipping Cost Estimation</h3>
          <p>
            Our tool provides accurate estimates for shipping costs based on
            pickup and drop-off locations.
          </p>

          <h3 className="font-bold mt-4">2.Weight and Dimensions Input</h3>
          <p>
            Users can input the weight and dimensions of their packages to
            receive tailored shipping quotes.
          </p>

          <h3 className="font-bold mt-4">3.Database-Driven Rates</h3>
          <p>
            Fetches real-time rates from the database, ensuring users get the
            most accurate and up-to-date information.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ShippingCalculator;
