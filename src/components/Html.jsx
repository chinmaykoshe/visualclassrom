import React from 'react';

function Html() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Section 1 */}
      <div className="section-1 bg-white p-6 rounded-md shadow-md mb-6">
        <img 
          src="html logo.webp" 
          alt="HTML Logo" 
          className="w-24 mx-auto mb-4" 
        />
        <h3 className="text-2xl font-semibold text-blue-600 text-center">
          HTML
        </h3>
        <p className="text-gray-700 text-sm mt-4">
          Hypertext Markup Language (HTML) is the standard markup language for
          documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets (CSS) and
          scripting languages such as JavaScript. Web browsers receive HTML
          documents from a web server or from local storage and render the
          documents into multimedia web pages. HTML describes the structure of
          a web page semantically and originally included cues for the
          appearance of the document.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          HTML elements are the building blocks of HTML pages. With HTML
          constructs, images and other objects such as interactive forms may be
          embedded into the rendered page. HTML provides a means to create
          structured documents by denoting structural semantics for text such
          as headings, paragraphs, lists, links, quotes, and other items. HTML
          elements are delineated by tags, written using angle brackets. Tags
          such as &lt;div&gt; directly introduce content into the page. Other
          tags such as &lt;p&gt; surround and provide information about document
          text and may include other tags as sub-elements. Browsers do not
          display the HTML tags, but use them to interpret the content of the
          page.
        </p>
      </div>
      {/* Section 2 */}
      <div className="section-2 bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700 text-sm">
          HTML can embed programs written in a scripting language such as
          JavaScript, which affects the behavior and content of web pages.
          Inclusion of CSS defines the look and layout of content. The World
          Wide Web Consortium (W3C), former maintainer of the HTML and current
          maintainer of the CSS standards, has encouraged the use of CSS over
          explicit presentational HTML since 1997.
        </p>
      </div>
    </div>
  );
}

export default Html;