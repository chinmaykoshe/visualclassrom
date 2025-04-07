import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About ABC Learning Center</h1>

        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-lg">
          <img src="H.jpg" alt="History" className="rounded-lg w-full h-64 object-cover" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our History</h3>
            <p className="text-gray-600 leading-relaxed">
              ABC Learning Center started on **1st January 2005**, founded by **Jony Dsoza**. 
              We are passionate about providing high-quality **coding education** and have trained **over 2 lakh students** worldwide. 
              With **172 centers** across India and **internationally in Dubai**, our mission is to shape future developers and IT professionals.
            </p>
          </div>
        </div>

        {/* Job Guarantee Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-lg mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">100% Job Guarantee</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer a **100% job guarantee** upon completion of all our courses. With a **95% placement rate**, 
              our students have secured high-paying jobs worldwide, earning **in lakhs per annum**.
              Join us today to secure your **dream career in tech!**
            </p>
          </div>
          <img src="gurantee.png" alt="Job Guarantee" className="rounded-lg w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
