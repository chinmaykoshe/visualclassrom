import React from 'react';

function NETFramework() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 bg-gray-100 rounded-lg shadow-md">
      {/* Section 1 */}
      <div className="section-1 flex flex-col items-center bg-white p-6 rounded-md shadow-sm mb-6">
        <img
          src="Microsoft_.NET_logo_old.png"
          alt=".NET Logo"
          className="w-24 mb-4"
        />
        <h3 className="text-2xl font-semibold text-blue-600">.NET Framework</h3>
        <p className="mt-4 text-gray-700 text-sm">
          .NET Framework (pronounced as "dot net") is a software framework developed by Microsoft that
          runs primarily on Microsoft Windows. It includes a large class library called Framework
          Class Library (FCL) and provides language interoperability (each language can use code
          written in other languages) across several programming languages. Programs written for
          .NET Framework execute in a software environment (in contrast to a hardware environment)
          named the Common Language Runtime (CLR). The CLR is an application virtual machine that
          provides services such as security, memory management, and exception handling. As such,
          computer code written using .NET Framework is called "managed code". FCL and CLR together
          constitute the .NET Framework.
        </p>
      </div>
      {/* Section 2 */}
      <div className="2-sections bg-white p-6 rounded-md shadow-sm">
        <p className="text-gray-700 text-sm">
          FCL provides the user interface, data access, database connectivity, cryptography, web
          application development, numeric algorithms, and network communications. Programmers produce
          software by combining their source code with .NET Framework and other libraries. The framework
          is intended to be used by most new applications created for the Windows platform. Microsoft
          also produces an integrated development environment for .NET software called Visual Studio.
        </p>
      </div>
    </div>
  );
}

export default NETFramework;