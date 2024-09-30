import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const CafeManagement = () => {
  return (
    <>
    <div className="pb-4">
      <Header></Header>
      <div className="container mx-auto md:px-8 px-6 max-w-5xl text-center">
        <h1 className="text-3xl font-bold my-6">Cafe Management System</h1>
        <img
          src="./project-1.png" 
          alt="Cafe Management System"
          className="mx-auto mb-6"
        />
        
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="text-left">
          <h3 className="font-bold">1. Authentication through QR Code</h3>
          <p>
            Easily authenticate users with QR codes, providing a quick and secure login method for customers and staff.
          </p>

          <h3 className="font-bold mt-4">2. Ordering Interface</h3>
          <p>
            A user-friendly interface that allows customers to browse and order items seamlessly from the menu.
          </p>

          <h3 className="font-bold mt-4">3. Cart</h3>
          <p>
            Manage selected items effortlessly with a dynamic cart that updates in real-time as users add or remove items.
          </p>

          <h3 className="font-bold mt-4">4. Live Order Status</h3>
          <p>
            Keep customers informed with real-time updates on their order status, ensuring a transparent and engaging experience.
          </p>

          <h3 className="font-bold mt-4">5. Kitchen Interface</h3>
          <p>
            A dedicated interface for kitchen staff to view and manage incoming orders efficiently.
          </p>

          <h3 className="font-bold mt-4">6. Admin Panel</h3>
          <p>
            Comprehensive admin panel for managing users, orders, and menu items with ease.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default CafeManagement;
