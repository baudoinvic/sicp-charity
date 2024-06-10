import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Allproducts from "./components/Products/Allproducts";
import Checkout from "./components/Checkout/Checkout";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Payment from "./Payment/Payment";
import Dashboard from "./Admindashboard/Dashboard";
import Dash from "./Admindashboard/Dash";
import Chart from "./Admindashboard/Chart";
import Users from "./Admindashboard/Users";
import Customer from "./Admindashboard/Customer";
import Order from "./Admindashboard/Order";
import Product from "./Admindashboard/Product";
import Setting from "./Admindashboard/Setting";
import Edituser from "./Admindashboard/Edituser";
import Editproduct from "./Admindashboard/Editproduct";
import Bidding from "./components/Bidding/Bidding";
import Donation from "./Donation/Donation";
import Service from "./Service/Service";


 const CommonLayout = ({ children }) => {
   return (
     <>
       <Navbar />
       <Outlet />
       {children}
       <Footer />
     </>
   );
 };

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CommonLayout>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
              </CommonLayout>
            }
          />
          <Route path="/Allproducts" element={<Allproducts />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/bidding/:id" element={<Bidding />} />

          <Route path="/About" element={<About />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Payment" element={<Payment />} />

          {/* Dashboard routes */}
          <Route path="/Admindashboard/Dashboard" element={<Dashboard />}>
            <Route path="" element={<Dash />} />
            <Route path="Chart" element={<Chart />} />
            <Route path="Users" element={<Users />} />
            <Route path="Customer" element={<Customer />} />
            <Route path="Order" element={<Order />} />
            <Route path="Product" element={<Product />} />
            <Route path="Setting" element={<Setting />} />
            <Route
              path="/Admindashboard/Dashboard/Edituser/:id"
              element={<Edituser />}
            />
          </Route>
          <Route
            path="/Admindashboard/Dashboard/Editproduct/:id"
            element={<Editproduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
