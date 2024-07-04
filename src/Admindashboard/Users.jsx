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
      console.log("Token:", token);
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


      <div className="bg-white p-4 rounded-lg overflow-x-auto">
        <div className="min-w-full">
          <div className="flex flex-col md:flex-row shadow-md mt-10">
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Firstname
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Lastname
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Username
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">Email</span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Location
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Action
            </span>
          </div>
          {users.map((user) => (
            <div
              className="flex flex-col md:flex-row mt-4 border-b"
              key={user._id}
            >
              <span className="w-full md:w-1/6 text-sm p-2">
                {user.firstname}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {user.lastname}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {user.usermame}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">{user.email}</span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {user.location}
              </span>
              <div className="w-full md:w-1/6 flex items-center p-2">
                <Link to={`/Admindashboard/Dashboard/Edituser/${user._id}`}>
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
    </div>
  );
}

export default Users


