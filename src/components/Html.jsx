import React, { useState } from 'react';

function HTMLCourse() {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      title: 'Chapter 1: Introduction to HTML',
      content: `HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.

- Defines structure of web content
- Uses elements represented by tags
- Developed by Tim Berners-Lee in 1991`,
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
      output: `Hello, World!`
    },
    {
      title: 'Chapter 2: HTML Tags and Elements',
      content: `Tags are the building blocks of HTML.

- Block Elements: <div>, <p>, <h1> to <h6>
- Inline Elements: <span>, <a>, <strong>
- Empty Elements: <br>, <img>, <input>`,
      code: `<p>This is a paragraph.</p>
<a href="#">This is a link</a>`,
      output: `This is a paragraph. This is a link`
    },
    {
      title: 'Chapter 3: Attributes in HTML',
      content: `Attributes provide additional information about elements.

- Common attributes: id, class, src, href, alt, style
- Placed inside the opening tag`,
      code: `<img src="image.jpg" alt="Sample Image" width="300" />`,
      output: `Displays an image 300px wide with alt text 'Sample Image'`
    },
    {
      title: 'Chapter 4: Forms and Inputs',
      content: `HTML forms collect user input.

- <form>, <input>, <textarea>, <select>, <button>
- Use attributes like name, value, type, placeholder` ,
      code: `<form>
  <input type="text" name="username" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>`,
      output: `Text input and submit button`
    },
    {
      title: 'Chapter 5: HTML Lists',
      content: `Lists organize content.

- Ordered List: <ol>
- Unordered List: <ul>
- Description List: <dl>`,
      code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
      output: `• HTML • CSS • JavaScript`
    },
    {
      title: 'Chapter 6: Tables in HTML',
      content: `Tables display data in rows and columns.

- <table>, <tr>, <th>, <td>
- Can use colspan and rowspan`,
      code: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
  </tr>
</table>`,
      output: `Displays a 2-row table with headers Name and Age`
    },
    {
      title: 'Chapter 7: Semantic HTML',
      content: `Semantic tags describe the meaning of content.

- Examples: <header>, <footer>, <article>, <section>, <nav>`,
      code: `<header>
  <h1>My Blog</h1>
</header>
<section>
  <p>Welcome to my blog!</p>
</section>`,
      output: `Displays a semantic layout for a blog`
    },
    {
      title: 'Chapter 8: Introduction to CSS',
      content: `CSS (Cascading Style Sheets) is used for styling HTML elements.

- Inline, Internal, and External CSS
- Syntax: selector { property: value; }` ,
      code: `<style>
p {
  color: blue;
  font-size: 16px;
}
</style>
<p>This is a styled paragraph.</p>`,
      output: `Blue text, 16px font paragraph`
    },
    {
      title: 'Chapter 9: Media and Embedding Content',
      content: `Multimedia elements in HTML:

- <img>, <audio>, <video>, <iframe>
- Use controls, autoplay, loop attributes for audio/video`,
      code: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
      output: `Embeds a video with playback controls`
    },
    {
      title: 'Chapter 10: CSS Box Model and Layouts',
      content: `CSS Box Model: content, padding, border, margin.

- Layout techniques: Flexbox, Grid
- Use display, position, margin, padding` ,
      code: `<style>
.box {
  border: 2px solid black;
  padding: 10px;
  margin: 20px;
  width: 200px;
}
</style>
<div class="box">Box Model Example</div>`,
      output: `Box with padding, border, and margin`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
      <div className="text-center">
        <img src="html logo.webp" alt="HTML Logo" className="w-24 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-orange-600">HTML COURSE</h3>
        <p className="text-gray-700 text-md mt-2">Learn how to build web pages using HTML and CSS from scratch.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveChapter(index + 1)}
            className={`px-4 py-1 rounded-md text-sm font-medium shadow-sm ${
              activeChapter === index + 1 ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 border border-orange-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

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
      <h4 className="text-xl font-semibold text-orange-500 mb-2">{title}</h4>
      <p className="text-gray-800 text-sm mb-2 whitespace-pre-line">{content}</p>
      <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">
{code}
      </pre>
      <h3 className="text-gray-800 text-sm my-2"><strong>Output:</strong></h3>
      <p className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">{output}</p>
    </div>
  );
}

export default HTMLCourse;
