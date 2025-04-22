import React, { useState } from 'react';

function Java() {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      title: 'Chapter 1: Introduction to Java',
      content: `Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
  
  - Platform independent (WORA: Write Once, Run Anywhere)
  - Object-oriented
  - Robust and Secure
  - Multithreaded
  - Distributed
  
  Java was developed by James Gosling and released by Sun Microsystems in 1995. It uses the Java Virtual Machine (JVM) to execute code.`,
      code: `// First Java Program
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`,
      output: `Hello, World!`
    },
    {
      title: 'Chapter 2: Setting up Java',
      content: `To start programming in Java, you need:
  
  - JDK (Java Development Kit): Contains tools needed to write and run Java programs.
  - IDE: IntelliJ IDEA, Eclipse, or NetBeans for writing code efficiently.`,
      code: `// Checking Java Version
  $ java -version
  $ javac -version
  
  // Setting environment variable (Windows example)
  setx JAVA_HOME "C:\\Program Files\\Java\\jdk-17.0.1"`,
      output: `java version "17.0.1" 2021-10-19
  javac 17.0.1`
    },
    {
      title: 'Chapter 3: Variables and Data Types',
      content: `Java is a statically typed language, meaning each variable must be declared with a data type.
  
  Primitive Data Types:
  - int, byte, short, long
  - float, double
  - char
  - boolean
  
  Example:
  int age = 25;
  double price = 199.99;
  boolean isOpen = true;
  char grade = 'A';`,
      code: `public class VariablesExample {
    public static void main(String[] args) {
      int age = 25;
      double price = 199.99;
      boolean isOpen = true;
      char grade = 'A';
      System.out.println("Age: " + age);
      System.out.println("Price: " + price);
      System.out.println("Open: " + isOpen);
      System.out.println("Grade: " + grade);
    }
  }`,
      output: `Age: 25
  Price: 199.99
  Open: true
  Grade: A`
    },
    {
      title: 'Chapter 4: Operators in Java',
      content: `Operators allow you to perform operations on variables and values.
  - Arithmetic (+, -, *, /, %)
  - Relational (==, !=, >, <, >=, <=)
  - Logical (&&, ||, !)
  - Assignment (=, +=, -=, etc)`,
      code: `public class OperatorsDemo {
    public static void main(String[] args) {
      int a = 10, b = 20;
      System.out.println("Sum: " + (a + b));
      System.out.println("Equal: " + (a == b));
      System.out.println("Logical AND: " + (a > 5 && b > 15));
    }
  }`,
      output: `Sum: 30
  Equal: false
  Logical AND: true`
    },
    {
      title: 'Chapter 5: Conditional Statements',
      content: `Conditional statements allow branching logic based on conditions.
  - if, if-else, else-if, switch`,
      code: `public class Conditionals {
    public static void main(String[] args) {
      int number = 10;
      if (number > 0) {
        System.out.println("Positive Number");
      } else {
        System.out.println("Non-Positive Number");
      }
    }
  }`,
      output: `Positive Number`
    },
    {
      title: 'Chapter 6: Loops in Java',
      content: `Java supports the following loops:
  - for
  - while
  - do-while
  Used to repeat blocks of code.`,
      code: `public class LoopExample {
    public static void main(String[] args) {
      for (int i = 0; i < 5; i++) {
        System.out.println("i = " + i);
      }
    }
  }`,
      output: `i = 0
  i = 1
  i = 2
  i = 3
  i = 4`
    },
    {
      title: 'Chapter 7: Arrays',
      content: `Arrays store multiple values in a single variable.`,
      code: `public class ArrayExample {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      for (int i = 0; i < numbers.length; i++) {
        System.out.println(numbers[i]);
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
      title: 'Chapter 8: Methods',
      content: `Methods are blocks of code that perform a task and can be reused.`,
      code: `public class MethodDemo {
    public static void sayHello() {
      System.out.println("Hello Java!");
    }
    public static void main(String[] args) {
      sayHello();
    }
  }`,
      output: `Hello Java!`
    },
    {
      title: 'Chapter 9: Object-Oriented Programming',
      content: `OOP in Java uses classes and objects.
  Principles: Encapsulation, Inheritance, Polymorphism, Abstraction`,
      code: `class Person {
    String name;
    int age;
    void speak() {
      System.out.println("My name is " + name);
    }
  }
  public class OOPDemo {
    public static void main(String[] args) {
      Person p = new Person();
      p.name = "John";
      p.age = 30;
      p.speak();
    }
  }`,
      output: `My name is John`
    },
    {
      title: 'Chapter 10: Exception Handling',
      content: `Handle runtime errors using try, catch, finally, and throw.
    
    Keywords:
    - try: Code that might throw an exception.
    - catch: Handles the exception.
    - finally: Code that always executes (optional).
    - throw: Used to explicitly throw an exception.`,
      code: `public class ExceptionDemo {
      public static void main(String[] args) {
        try {
          int result = 10 / 0;
        } catch (ArithmeticException e) {
          System.out.println("Cannot divide by zero!");
        } finally {
          System.out.println("Execution completed.");
        }
      }
    }`,
      output: `Cannot divide by zero!
    Execution completed.`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
      <div className="text-center">
        <img src="java-logo-wide.jpg" alt="Java Logo" className="w-24 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-blue-600">JAVA COURSE</h3>
        <p className="text-gray-700 text-md mt-2">Master the fundamentals of Java in this comprehensive beginner’s course.</p>
      </div>

      {/* Chapter Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveChapter(index + 1)}
            className={`px-4 py-1 rounded-md text-sm font-medium shadow-sm ${
              activeChapter === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
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
      <h4 className="text-xl font-semibold text-blue-500 mb-2">{title}</h4>
      <p className="text-gray-800 text-sm mb-2 whitespace-pre-line">{content}</p>
      <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">
{code}
      </pre>
      <h3 className="text-gray-800 text-sm my-2"><strong> Output :</strong></h3>
      <p className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">{output}</p>
    </div>
  );
}

export default Java;