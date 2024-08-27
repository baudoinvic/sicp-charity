import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Video from "./components/Video/Video";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import Popup from "./components/Popup/Popup";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Allproducts from "./components/Products/Allproducts";
import Checkout from "./components/Checkout/Checkout";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Dashboard from "./Admindashboard/Dashboard";
import Dash from "./Admindashboard/Dash";
import Chart from "./Admindashboard/Chart";
import Users from "./Admindashboard/Users";
import Customer from "./Admindashboard/Donors";
import Order from "./Admindashboard/Volunteer";
import Product from "./Admindashboard/Donations";
import Setting from "./Admindashboard/Setting";
import Edituser from "./Admindashboard/Edituser";
import Editproduct from "./Admindashboard/Editproduct";
// import Bidding from "./components/Bidding/Bidding";
import Donation from "./Donation/Donation";
import Service from "./Service/Service";
import Compaign from "./Compaign/Compaign";
import Funraise from "./Funraise/Funraise";
import Gallery from "./Gallery/Gallery";
import Donate from "./Donate/Donate";
import Historic from "./Historic/Historic";
import Event from "./Event/Event";
import Month from "./Month/Month";
import Past from "./Past/Past";
import Social from "./Social/Social";
import New from "./New/New";
import Second from "./Second/Second";
import Leadership from "./Leadership/Leadership";
import Youth from "./Youth/Youth";
import Fun from "./Fun/Fun";
import Women from "./Women/Women";


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
                <Video />
                <Subscribe />
                <Testimonials />
              </CommonLayout>
            }
          />
          {/* <Route path="/Allproducts" element={<Allproducts />} /> */}
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Funraise" element={<Funraise />} />
          <Route path="/Popup" element={<Popup />} />
          <Route path="/Compaign" element={<Compaign />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Historic" element={<Historic />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Month" element={<Month />} />
          <Route path="/Past" element={<Past />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/New" element={<New />} />
          <Route path="/Second" element={<Second />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Youth" element={<Youth />} />
          <Route path="/Fun" element={<Fun />} />
          <Route path="/Women" element={<Women />} />

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
