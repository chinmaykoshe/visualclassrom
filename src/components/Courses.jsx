import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    title: "Microsoft Office",
    image: "officelogo.png",
    description: "Master the essential Office tools including Word, Excel, and PowerPoint.",
    link: "/office",
  },
  {
    title: "HTML & Web Development",
    image: "html logo.webp",
    description: "Learn the basics of HTML, CSS, and responsive web design.",
    link: "/html",
  },
  {
    title: "Java Programming",
    image: "java-logo-wide.jpg",
    description: "Understand the fundamentals of Java for software development.",
    link: "/java",
  },
  {
    title: ".NET Framework",
    image: "Microsoft_.NET_logo_old.png",
    description: "Develop scalable applications using the Microsoft .NET framework.",
    link: "/.net-framework",
  },
];

function Courses() {
  const [userId, setUserId] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserId(parsedUser.id);

      // Get user's enrolled courses
      axios.get(`http://localhost:5000/users/${parsedUser.id}`)
        .then(res => {
          if (res.data.courses) {
            setEnrolledCourses(res.data.courses);
          }
        })
        .catch(err => console.error("Error fetching user courses", err));
    }
  }, []);

  const handleEnroll = async (courseTitle) => {
    if (!userId) {
      alert("Please log in to enroll.");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/users/${userId}`, {
        courses: courseTitle,
      });

      // Update local state after enrollment
      setEnrolledCourses(prev => [...prev, courseTitle]);
      alert(`Successfully enrolled in ${courseTitle}`);
    } catch (error) {
      console.error("Error enrolling in course", error);
      alert("Failed to enroll in the course.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 m-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {coursesData.map((course, index) => {
          const isEnrolled = enrolledCourses.includes(course.title);
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                <p className="text-gray-700 mt-2">{course.description}</p>

                {isEnrolled ? (
                  <button
                    onClick={() => navigate(course.link)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Open Course
                  </button>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.title)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Enroll Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
