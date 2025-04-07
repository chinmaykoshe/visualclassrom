import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>

        {/* Last Updated */}
        <p className="text-gray-500 text-center mb-6">Last Updated: April 2025</p>

        {/* Sections */}
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to ABC Learning Center. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, etc.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and session details.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance user experience.</li>
            </ul>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To personalize user experience.</li>
              <li>To send updates, newsletters, or promotional offers.</li>
              <li>To ensure website security and prevent fraud.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
            <p>
              We take appropriate security measures to protect your personal data. However, no online transmission is 100% secure. Please use caution while sharing information online.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Sharing</h2>
            <p>
              We do not sell or rent your personal information. However, we may share data with trusted third-party service providers to enhance our services.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request corrections or deletion of your data.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:  
              <strong> support@abclearning.com</strong>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>© 2025 ABC Learning Center. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
