import React from "react";

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
  return (
    <div className="container mx-auto px-4 py-12 m-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {coursesData.map((course, index) => (
          <a
            key={index}
            href={course.link}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
              <p className="text-gray-700 mt-2">{course.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Courses;
