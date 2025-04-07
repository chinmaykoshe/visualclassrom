import React from 'react';

function Java() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Section 1 */}
      <div className="section-1 bg-white p-6 rounded-md shadow-md mb-6">
        <img 
          src="java-logo-wide.jpg" 
          alt="Java Logo" 
          className="w-24 mx-auto mb-4" 
        />
        <h3 className="text-2xl font-semibold text-blue-600 text-center">
          JAVA
        </h3>
        <p className="text-gray-700 text-sm mt-4">
          Java is a class-based, object-oriented programming language that is
          designed to have as few implementation dependencies as possible. It
          is a general-purpose programming language intended to let application
          developers write once, run anywhere (WORA), meaning that compiled
          Java code can run on all platforms that support Java without the need
          for recompilation. Java applications are typically compiled to
          bytecode that can run on any Java virtual machine (JVM) regardless of
          the underlying computer architecture. The syntax of Java is similar
          to C and C++, but has fewer low-level facilities than either of them.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          The Java runtime provides dynamic capabilities (such as reflection
          and runtime code modification) that are typically not available in
          traditional compiled languages. As of 2019, Java was one of the most
          popular programming languages in use according to GitHub, particularly
          for client-server web applications, with a reported 9 million developers.
        </p>
      </div>
      {/* Section 2 */}
      <div className="section-2 bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700 text-sm">
          Java was originally developed by James Gosling at Sun Microsystems
          (which has since been acquired by Oracle) and released in 1995 as a
          core component of Sun Microsystems' Java platform. The original and
          reference implementation Java compilers, virtual machines, and class
          libraries were originally released by Sun under proprietary licenses.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          As of May 2007, in compliance with the specifications of the Java
          Community Process, Sun had relicensed most of its Java technologies
          under the GNU General Public License. Oracle offers its own HotSpot
          Java Virtual Machine; however, the official reference implementation
          is the OpenJDK JVM, which is free open source software and used by
          most developers including the Eclipse IDE. It is the default JVM for
          almost all Linux distributions.
        </p>
      </div>
    </div>
  );
}

export default Java;