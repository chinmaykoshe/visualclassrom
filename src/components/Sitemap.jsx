import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Microsoft Office",
    image: "officelogo.png",
    description: "Master the essential Office tools including Word, Excel, and PowerPoint.",
    link: "/office",
  },
  {
    title: "HTML & Web Development",
    image: "html-logo.webp",
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

const Sitemap = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sitemap</h1>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Sections */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Main Pages</h2>
            <ul className="space-y-2 text-blue-600">
              <li><Link to="/" className="hover:underline">🏠 Home</Link></li>
              <li><Link to="/about-us" className="hover:underline">📖 About Us</Link></li>
              <li><Link to="/contact-us" className="hover:underline">📞 Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">❓ FAQ</Link></li>
            </ul>
          </div>

          {/* Course Sections */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Courses</h2>
            <ul className="space-y-2 text-blue-600">
              {courses.map((course) => (
                <li key={course.link}>
                  <Link to={course.link} className="hover:underline">📌 {course.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Resources</h2>
            <ul className="space-y-2 text-blue-600">
              <li><Link to="/" className="hover:underline">📝 Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">🔒 Privacy Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">📜 Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:underline">🚀 Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12 text-gray-600">
          <p>© 2025 ABC Learning Center. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;