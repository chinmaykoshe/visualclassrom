import React from 'react';

function Office() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Section 1 */}
      <div className="section-1 bg-white p-6 rounded-md shadow-md mb-6">
        <img 
          src="officelogo.png" 
          alt="Microsoft Office Logo" 
          className="w-24 mx-auto mb-4" 
        />
        <h3 className="text-2xl font-semibold text-blue-600 text-center">
          Microsoft Office
        </h3>
        <p className="text-gray-700 text-sm mt-4">
          Microsoft Office is a collection of office-related applications. Each
          application serves a unique purpose and offers a specific service to
          its users. For example, Microsoft Word is used to create documents.
          Microsoft PowerPoint is used to create presentations. Microsoft
          Outlook is used to manage email and calendars. There are others as
          well.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          Because there are so many applications to choose from, and because not
          every user needs all of them, Microsoft groups the applications
          together in collections called suites. There’s a suite of
          applications for students, a suite for home and small business users,
          and a suite for large corporations. There’s even a suite for schools.
          Each of these suites is priced based on what’s included in it.
        </p>
      </div>
      {/* Section 2 */}
      <div className="section-2 bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700 text-sm">
          The latest version of Microsoft Office is called Microsoft Office
          2019, although the web-based Microsoft 365 is the version that
          Microsoft would prefer users to adopt. Various versions of the suite
          have been around since 1988, including but not limited to Microsoft
          Office Professional, Microsoft Office Home and Student, and various
          collections of Microsoft Office 2016. Most people still refer to any
          version of the suite as Microsoft Office though, which makes
          distinguishing among editions difficult.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          What makes Microsoft 365 stand out from older editions of MS Office is
          that it integrates all aspects of the apps with the cloud. It’s a
          subscription service too, which means users pay a monthly or yearly
          fee to use it, and upgrades to newer versions are included in this
          price. Previous versions of Microsoft Office, including Office 2016,
          didn’t offer all the cloud features that Microsoft 365 does and were
          not subscription-based. Office 2016 was a one-time purchase, just as
          other editions were, and as Office 2019 is.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          Microsoft 365 Business and Business Premium include all the Office
          apps including Word, Excel, PowerPoint, OneNote, ​Outlook, and
          Publisher.
        </p>
      </div>
    </div>
  );
}

export default Office;