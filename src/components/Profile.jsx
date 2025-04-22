import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({});
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;

  const courseLinks = {
    "Microsoft Office": "/office",
    "HTML & Web Development": "/html",
    "Java Programming": "/java",
    ".NET Framework": "/.net-framework",
  };

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUpdatedInfo({ name: data.name, email: data.email });
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [userId]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`HTTP ${res.status}: ${errorText}`);
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.user);
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        console.log(`Failed to save changes: ${err.message}`);
      });
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
    <div className="max-w-4xl mx-auto px-4 py-8 md:p-10 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">Profile</h2>

      {!isEditing ? (
        <div className="bg-white p-6 md:p-10 rounded-md shadow-md flex flex-col items-center w-full">
          <div className="text-left w-full">
            <h3 className="text-2xl font-semibold text-center">{user.name}</h3>
            <p className="text-lg text-gray-700 text-center">Email: {user.email}</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 w-full">
            <button
              onClick={handleEditToggle}
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          {user.courses && user.courses.length > 0 && (
            <div className="mt-10 w-full">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-left">Enrolled Courses:</h4>
              <ul className="space-y-4 w-full overflow-x-auto">
                {user?.courses?.map((course, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-800">{course}</span>
                    <button
                      onClick={() => navigate(courseLinks[course] || "/")}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Continue Learning
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 md:p-10 rounded-md shadow-md flex flex-col items-center w-full">
          <form className="text-left w-full max-w-md">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={updatedInfo.name || ""}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={updatedInfo.email || ""}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </form>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 w-full">
            <button
              onClick={handleSaveChanges}
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              Save Changes
            </button>
            <button
              onClick={handleEditToggle}
              className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
