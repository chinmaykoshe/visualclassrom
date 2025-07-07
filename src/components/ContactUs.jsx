import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Details</h2>
            <p className="text-gray-600">Feel free to reach out to us through any of the following:</p>
            <div className="mt-4">
              <p className="flex items-center">
                📍 <span className="ml-2">123 Main Street, Mumbai, India</span>
              </p>
              <p className="flex items-center mt-2">
                📞 <span className="ml-2">+91 98765 43210</span>
              </p>
              <p className="flex items-center mt-2">
                📧 <span className="ml-2">contact@VISUALCLASSROOM.com</span>
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe 
                className="w-full h-48 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3954980169987!2d144.96328031548272!3d-37.81410797975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c0f281%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1622515005717!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
