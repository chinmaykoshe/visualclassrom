import React from "react";

function Home() {
    return (
        <main className="flex-grow container mx-auto pt-20 px-4 text-center">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 md:py-16 px-4 rounded-lg shadow-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Welcome to VISUAL CLASSROOM</h1>
                <p className="text-lg sm:text-xl font-light">Empowering your future with top-quality courses!</p>
            </section>

            <hr className="my-10 border-t-4 border-gray-300" />

            {/* Courses Section */}
            <section>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { path: "/office", image: "officelogo.png", alt: "Office" },
                        { path: "/html", image: "html logo.webp", alt: "HTML" },
                        { path: "/java", image: "java-logo-wide.jpg", alt: "Java" },
                        { path: "/net-framework", image: "Microsoft_.NET_logo_old.png", alt: ".NET" },
                    ].map(({ path, image, alt }) => (
                        <a key={path} href={path} className="group block w-full h-40 sm:h-48 md:h-52">
                            <img
                                src={image}
                                alt={alt}
                                className="w-full h-full object-cover rounded-lg shadow-lg transform transition group-hover:scale-105"
                            />
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-base sm:text-lg font-semibold text-gray-700">
                    These are the courses that students will be working on.
                </p>
            </section>

            <hr className="my-10 border-t-4 border-gray-300" />

            {/* About Us */}
            <section className="bg-gray-900 text-white py-10 px-4 sm:px-6 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                <p className="text-base sm:text-lg font-light">
                    VISUAL CLASSROOM is dedicated to providing high-quality education in various IT fields.
                    Our mission is to empower students with practical knowledge and skills.
                </p>
            </section>

            <hr className="my-10 border-t-4 border-gray-300" />

            {/* Why Choose Us */}
            <section className="bg-blue-600 text-white py-10 px-4 sm:px-6 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-base sm:text-lg space-y-3 text-left max-w-xl mx-auto">
                    <li>👨‍🏫 Expert instructors with real-world experience.</li>
                    <li>💻 Hands-on projects and interactive learning.</li>
                    <li>⏳ Flexible learning schedules.</li>
                    <li>🚀 Career support and guidance.</li>
                </ul>
            </section>

            <hr className="my-10 border-t-4 border-gray-300" />

            {/* Student Testimonials */}
            <section className="bg-gray-800 text-white py-10 px-4 sm:px-6 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
                <div className="space-y-6 max-w-2xl mx-auto text-left">
                    <blockquote className="text-base sm:text-lg italic border-l-4 border-yellow-400 pl-4">
                        "VISUAL CLASSROOM helped me build a strong foundation in programming. The instructors are amazing!"
                        <br /> – <b>John Doe</b>
                    </blockquote>
                    <blockquote className="text-base sm:text-lg italic border-l-4 border-yellow-400 pl-4">
                        "The courses are very practical and useful. I landed my first job thanks to them!"
                        <br /> – <b>Jane Smith</b>
                    </blockquote>
                </div>
            </section>

            <hr className="my-10 border-t-4 border-gray-300" />

            {/* Contact Us */}
            <section className="bg-purple-700 text-white py-10 px-4 sm:px-6 rounded-lg shadow-lg mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-2 text-base sm:text-lg">
                    <p>📍 <b>Location:</b> 123 Learning St, Tech City</p>
                    <p>📞 <b>Phone:</b> (123) 456-7890</p>
                    <p>📧 <b>Email:</b> info@visualclassroom.com</p>
                </div>
            </section>
        </main>
    );
}

export default Home;
