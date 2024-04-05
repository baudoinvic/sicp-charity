import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";


const Users = () => {

  const[users, setUsers] = useState ([]);

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

      const handleDeleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://beathaecommerceback-end.onrender.com/api/v1/users/${id}`,
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
   
    <div data-aos="zoom-in" className="">
      <span className="text-3xl font-bold">Users</span>
      <div class="bg-white p-4 rounded-lg  mt-10">
        <div class="flex shadow-md mt-10">
          <span class="font-bold w-1/4">Fullnames</span>
          <span class="font-bold w-1/4">Email</span>
          <span class="font-bold w-1/4">Location</span>
          <span class="font-bold w-1/4">Action</span>
        </div>
        {users.map((user) => (
          <div className="flex mt-10" key={user._id}>
            <span className="w-1/4">{user.fullNames}</span>
            <span className="w-1/4">{user.email}</span>
            <span className="w-1/4">{user.location}</span>
            <div className="w-1/4 flex items-center">
              <FaEdit className="text-2xl text-gray-900 mr-2" style={{cursor: 'pointer'}} />
              <MdDeleteOutline onClick={() => handleDeleteUser(user._id)}
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
