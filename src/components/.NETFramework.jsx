import React, { useState } from 'react';

function DotNet() {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      title: 'Chapter 1: Introduction to .NET Framework',
      content: `The .NET Framework is a software development framework developed by Microsoft. It provides a large class library and supports language interoperability, meaning code written in one language can interact with code written in another language. 

    The framework consists of two main components:
    - **Common Language Runtime (CLR)**: It handles the execution of code, garbage collection, and exception handling.
    - **.NET Class Library**: A collection of reusable classes that provide functionality like file I/O, database access, and XML parsing.
    
    .NET Framework supports multiple programming languages, such as C#, VB.NET, and F#.`,
      code: `// Simple C# Program
      using System;
      class HelloWorld {
          static void Main() {
              Console.WriteLine("Hello, .NET Framework!");
          }
      }`,
      output: `Hello, .NET Framework!`
    },
    {
      title: 'Chapter 2: Setting Up the .NET Framework',
      content: `To start using the .NET Framework, you need to install:
    - **Visual Studio**: An Integrated Development Environment (IDE) from Microsoft that makes it easy to write, debug, and deploy .NET applications.
    - **.NET SDK**: Contains the tools needed to develop and run .NET applications.

    Visual Studio provides all the necessary tools for working with C# and other .NET languages, including the .NET Core SDK for cross-platform development.
    
    Steps to Install:
    1. Download Visual Studio from the official Microsoft website.
    2. Choose the workload for .NET development during the installation.
    3. Install the .NET SDK based on your operating system.`,
      code: `// Checking .NET SDK Version
      dotnet --version`,
      output: `5.0.100`
    },
    {
      title: 'Chapter 3: Understanding CLR (Common Language Runtime)',
      content: `The CLR is the runtime environment of the .NET Framework. It provides important services such as:
    - **Memory Management**: The CLR manages memory allocation and garbage collection automatically.
    - **Exception Handling**: It provides a structured way to handle runtime errors using try-catch-finally blocks.
    - **Security**: Ensures that code is executed in a secure environment, managing permissions and access rights.

    The CLR allows code to be written in multiple languages (e.g., C#, VB.NET) and still interoperate seamlessly, as they all compile to **Intermediate Language (IL)** that the CLR executes.
    `,
      code: `// Example of Exception Handling
      using System;
      class ExceptionExample {
          static void Main() {
              try {
                  int result = 10 / 0;
              } catch (DivideByZeroException e) {
                  Console.WriteLine("Error: " + e.Message);
              } finally {
                  Console.WriteLine("Execution completed.");
              }
          }
      }`,
      output: `Error: Attempted to divide by zero.
      Execution completed.`
    },
    {
      title: 'Chapter 4: Working with Data Types and Variables',
      content: `In .NET, variables must be declared with a specific type. These types can be categorized into:
    - **Value Types**: These hold the actual data, such as integers and booleans.
    - **Reference Types**: These hold a reference to data, like strings and objects.

    Common Data Types:
    - "int": Represents integer values.
    - "double": Represents floating-point numbers.
    - "string": Represents sequences of characters.
    - "bool": Represents true or false values.
    
    Example of variable declaration and usage:
    - In C#, variables are declared by specifying the type followed by the variable name.
    `,
      code: `// Variables in C#
      using System;
      class VariableExample {
          static void Main() {
              int number = 100;
              double price = 199.99;
              bool isAvailable = true;
              string name = "Product A";
              
              Console.WriteLine($"Name: {name}, Price: {price}, Available: {isAvailable}, Quantity: {number}");
          }
      }`,
      output: `Name: Product A, Price: 199.99, Available: True, Quantity: 100`
    },
    {
      title: 'Chapter 5: Conditional Statements',
      content: `Conditional statements allow you to execute code based on certain conditions. The main types are:
    - **if-else**: Executes one block of code if the condition is true, otherwise another block if false.
    - **switch**: Allows selection among multiple conditions.
    
    This is used in decision-making scenarios where different actions are taken based on inputs or conditions.
    
    Example:
    - Check if a number is positive, negative, or zero.
    `,
      code: `// if-else Example in C#
      using System;
      class ConditionExample {
          static void Main() {
              int number = 5;
              if (number > 0) {
                  Console.WriteLine("Positive Number");
              } else if (number < 0) {
                  Console.WriteLine("Negative Number");
              } else {
                  Console.WriteLine("Zero");
              }
          }
      }`,
      output: `Positive Number`
    },
    {
      title: 'Chapter 6: Loops in .NET Framework',
      content: `Loops allow you to execute a block of code multiple times. The common loops in .NET include:
    - **for**: Loops a set number of times.
    - **while**: Loops while a condition is true.
    - **do-while**: Similar to while, but the loop executes at least once before checking the condition.
    
    Example:
    - Print numbers from 1 to 5 using a loop.
    `,
      code: `// Looping in C#
      using System;
      class LoopExample {
          static void Main() {
              for (int i = 1; i <= 5; i++) {
                  Console.WriteLine(i);
              }
          }
      }`,
      output: `1
      2
      3
      4
      5`
    },
    {
      title: 'Chapter 7: Object-Oriented Programming (OOP)',
      content: `The .NET Framework supports Object-Oriented Programming (OOP), which is a programming paradigm that uses objects and classes. Key concepts include:
    - **Encapsulation**: Bundling data and methods that operate on the data.
    - **Inheritance**: Creating a new class that inherits the properties and behaviors of an existing class.
    - **Polymorphism**: The ability to use a derived class object where a base class object is expected.
    - **Abstraction**: Hiding complex implementation details and showing only essential features.

    Example:
    - Defining a class with properties and methods, and creating an object of that class.
    `,
      code: `// Basic OOP Example in C#
      using System;
      class Animal {
          public string Name { get; set; }
          public void Speak() {
              Console.WriteLine($"{Name} makes a sound");
          }
      }
      
      class Program {
          static void Main() {
              Animal dog = new Animal();
              dog.Name = "Dog";
              dog.Speak();
          }
      }`,
      output: `Dog makes a sound`
    },
    {
      title: 'Chapter 8: Working with Collections (Arrays, Lists)',
      content: `Collections are data structures that allow you to store and manipulate groups of data. Common collections include:
    - **Arrays**: Fixed-size collections of elements of the same type.
    - **Lists**: Dynamic-size collections that can grow as needed.

    Example:
    - Declare an array of integers and iterate through it to print each value.
    `,
      code: `// Arrays Example in C#
      using System;
      class ArrayExample {
          static void Main() {
              int[] numbers = {1, 2, 3, 4, 5};
              foreach (int number in numbers) {
                  Console.WriteLine(number);
              }
          }
      }`,
      output: `1
      2
      3
      4
      5`
    },
    {
      title: 'Chapter 9: Exception Handling in .NET',
      content: `In .NET, exceptions are used to handle runtime errors in a controlled way. The most common keywords are:
    - **try**: Code that might throw an exception is placed inside this block.
    - **catch**: Catches and handles the exception.
    - **finally**: Executes regardless of whether an exception was thrown.
    
    Example:
    - Catch a division by zero error.
    `,
      code: `// Exception Handling Example
      using System;
      class ExceptionHandlingExample {
          static void Main() {
              try {
                  int result = 10 / 0;
              } catch (DivideByZeroException e) {
                  Console.WriteLine("Error: " + e.Message);
              } finally {
                  Console.WriteLine("Execution completed.");
              }
          }
      }`,
      output: `Error: Attempted to divide by zero.
      Execution completed.`
    },
    {
      title: 'Chapter 10: Working with Databases (ADO.NET)',
      content: `ADO.NET is a set of classes that enable data access in .NET applications. It allows interaction with databases like SQL Server.
    - **Connection**: Establishes a connection to a database.
    - **Command**: Executes queries against the database.
    - **DataReader**: Reads the data returned from a query.
    
    Example:
    - Connect to a database and retrieve data using ADO.NET.
    `,
      code: `// ADO.NET Example
      using System;
      using System.Data.SqlClient;

      class DatabaseExample {
          static void Main() {
              string connectionString = "Your_Connection_String_Here";
              using (SqlConnection conn = new SqlConnection(connectionString)) {
                  conn.Open();
                  SqlCommand cmd = new SqlCommand("SELECT * FROM Customers", conn);
                  SqlDataReader reader = cmd.ExecuteReader();
                  while (reader.Read()) {
                      Console.WriteLine(reader["Name"]);
                  }
              }
          }
      }`,
      output: `John Doe
      Jane Smith`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
      <div className="text-center">
      <img src="Microsoft_.NET_logo_old.png" alt=".net png" className="w-24 mx-auto mb-4" />

        <h3 className="text-3xl font-bold text-purple-600">.NET FRAMEWORK COURSE</h3>
        <p className="text-gray-700 text-md mt-2">Learn the fundamentals of .NET Framework with practical examples and detailed explanations.</p>
      </div>

      {/* Chapter Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveChapter(index + 1)}
            className={`px-4 py-1 rounded-md text-sm font-medium shadow-sm ${
              activeChapter === index + 1 ? 'bg-purple-500 text-white' : 'bg-white text-purple-500 border border-purple-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Render Active Chapter */}
      <Chapter
        title={chapters[activeChapter - 1].title}
        content={chapters[activeChapter - 1].content}
        code={chapters[activeChapter - 1].code}
        output={chapters[activeChapter - 1].output}
      />
    </div>
  );
}

function Chapter({ title, content, code, output }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h4 className="text-xl font-semibold text-purple-500 mb-2">{title}</h4>
      <p className="text-gray-800 text-sm mb-2 whitespace-pre-line">{content}</p>
      <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">
        {code}
      </pre>
      <h3 className="text-gray-800 text-sm my-2"><strong> Output :</strong></h3>
      <p className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">{output}</p>
    </div>
  );
}

export default DotNet;
