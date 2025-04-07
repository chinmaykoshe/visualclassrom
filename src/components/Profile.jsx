import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Get user ID from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;

  useEffect(() => {
    if (!userId) return; // Stop fetch if userId is missing

    fetch(`http://localhost:5000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [userId]);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    localStorage.removeItem("token"); // Remove token if stored
    navigate("/login"); // Redirect to login page
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Profile</h2>

      {/* Profile Card */}
      <div className="bg-white p-10 rounded-md shadow-md flex flex-col items-center w-full">
        <img
          src={user.avatar || "default-avatar.png"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full shadow-sm border-4 border-blue-600 mb-6"
        />
        <div className="text-left w-3/4">
          <h3 className="text-2xl font-semibold">{user.name}</h3>
          <p className="text-lg text-gray-700">Email: {user.email}</p>
          <p className="text-lg text-gray-700">Role: {user.role || "Student"}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-between">
        <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700">
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
