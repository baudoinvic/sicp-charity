
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
   
  const navigate = useNavigate();
   const params = useParams();
   let userId = params.id; 

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

    const [users, setUsers] = useState([]);
   

    const fetchUsers = () => {
      let token = localStorage.getItem("token");
      axios({
        url: "https://beathaecommerceback-end.onrender.com/api/v1/users",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const allUsers = response.data;
          setUsers(allUsers);
          toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    useEffect(() => {
      fetchUsers();
    }, []);


    

  const handleSubmit = (e) => {
    e.preventDefault();

      let token = localStorage.getItem("token");
     

    const data = {
      fullName: fullName,
      email: email,
      location: location,
      phoneNo: phoneNo,
    };

    axios({
      method: "PUT",
      url: `'https://beathaecommerceback-end.onrender.com/api/v1/users/${userId}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("user is successfully edited");
        setTimeout(() => {
          navigate("/Admindashboard/Dashboard/Users");
        }, 3000);
      })

      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter your location"
             required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white rounded-md px-4 py-2 hover:bg-gray-900 transition duration-300"
        >
          update user
          {isLoading && <div className="loader-spinner">Loading...</div>}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Edituser;
