import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';


const Users = () => {

  const[users, setUsers] = useState ([]);

   const fetchUsers = () => {
     let token = localStorage.getItem("token");
     console.log("token")
     axios({
       url: "https://auction-website-auji.onrender.com/api/v1/users",
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

      const handleDeleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://auction-website-auji.onrender.com/api/v1/users/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              toast.success("User deleted successfully");
              console.log(response, "Response");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.log(error, "Error");
            });
        }
      };


  return (
    <div data-aos="zoom-in" className="mt-10">
      <span className="text-1xl font-bold">Users</span>
      <div class="bg-white p-4 rounded-lg ">
        <div class="flex shadow-md mt-10">
          <span class="font-bold w-1/4 text-sm">firstname</span>
          <span class="font-bold w-1/4 text-sm">lastName</span>
          <span class="font-bold w-1/4 text-sm">usermame</span>
          <span class="font-bold w-1/4 text-sm">email</span>
          <span class="font-bold w-1/4 text-sm">location</span>
          <span class="font-bold w-1/4 text-sm">Action</span>
        </div>
        {users.map((user) => (
          <div className="flex mt-10" key={user._id}>
            <span className="w-1/4 text-sm">{user.firstname}</span>
            <span className="w-1/4 text-sm">{user.lastname}</span>
            <span className="w-1/4 text-sm">{user.usermame}</span>
            <span className="w-1/4 text-sm">{user.email}</span>
            <span className="w-1/4 text-sm">{user.location}</span>
            <div className="w-1/4 flex items-center">
              <Link to="/Admindashboard/Dashboard/Edituser/${user._id}">
                <FaEdit
                  className="text-2xl text-gray-900 mr-2"
                  style={{ cursor: "pointer" }}
                />
              </Link>

              <MdDeleteOutline
                onClick={() => handleDeleteUser(user._id)}
                className="text-2xl text-red-500"
                style={{ cursor: "pointer" }}
              />
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users


