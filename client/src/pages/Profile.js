import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/Profile.css";

export default function Profile() {
  const [profiledata, set_profiledata] = useState([]);
  console.log(profiledata);
  useEffect(() => {
    axios.get("http://localhost:1000/profile").then((Response) => {
      set_profiledata(Response.data.details);
    });
  }, []);

  return (
    <div className="flex">
      {/* Side menu */}
      <div className="profile-section1 w-1/4 bg-gray-200 p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">My Orders</h2>
          {/* Add your My Orders content here */}
        </div>
        {/* Add more side menu items as needed */}
        <div >
          <h2 className="text-lg font-semibold mb-4">Other Sections</h2>
          <ul>
            <li className="text-blue-500 cursor-pointer hover:underline mb-2">Change Password</li>
            <li className="text-blue-500 cursor-pointer hover:underline mb-2">Delete Account</li>
            <li className="text-blue-500 cursor-pointer hover:underline mb-2">Logout</li>
            {/* Add more sections as needed */}
          </ul>
        </div>
      </div>

      {/* Profile details */}
      <div className="w-3/4 p-6 ">
        {profiledata.map((data, key) => (
          <div key={key} className="profile-data bg-white rounded-lg shadow-md p-8 mb-8 ">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Full Name</h2>
              <p className="text-gray-800 text-lg mt-2">{data.FullName}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Edit FullName</button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-800 text-lg mt-2">{data.Email}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Edit Email</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
