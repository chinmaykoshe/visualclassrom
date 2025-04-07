import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Left Column - Marquee Text */}
        <div className="flex items-center justify-center md:justify-start">
          <p className="font-bold text-yellow-400 text-lg">
            © ABC Learning Center - Empowering Students for Success!
          </p>
        </div>

        {/* Center Column - Privacy & Sitemap Links */}
        <div className="flex flex-col items-center md:items-center space-y-3">
          <a href="/privacy-policy" className="hover:underline text-white font-semibold text-lg">
            Privacy Policy
          </a>
          <a href="/sitemap" className="hover:underline text-white font-semibold text-lg">
            Sitemap
          </a>
        </div>

        {/* Right Column - Social Media Links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <a href="#" className="flex items-center space-x-3 hover:text-blue-400 text-lg">
            <img src="facebook.jpg" alt="Facebook" className="h-6" />
            <span>@abc_learning_center</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:text-blue-300 text-lg">
            <img src="twitterimage.png" alt="Twitter" className="h-6" />
            <span>@abc_learning_center</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
