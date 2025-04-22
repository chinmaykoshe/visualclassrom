import React, { useState } from 'react';

function MSOfficeCourse() {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      title: 'Chapter 1: Introduction to Microsoft Office Suite',
      content: `Microsoft Office is a suite of productivity applications developed by Microsoft. It includes Word for document creation, Excel for spreadsheets, PowerPoint for presentations, and more.

Why learn MS Office?
- It’s widely used in workplaces, schools, and businesses.
- Increases productivity and helps you work efficiently.
- Knowing the basics of Word, Excel, and PowerPoint is essential for most jobs.

In this course, we’ll cover the core functions and features of:
1. Microsoft Word – document editing and formatting
2. Microsoft Excel – spreadsheets, formulas, and charts
3. Microsoft PowerPoint – creating impactful presentations`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 2: Getting Started with Microsoft Word',
      content: `Microsoft Word is a word processing application used to create, edit, and format documents such as letters, resumes, and reports.

Getting Started:
- Launch Word from the Start menu or desktop icon.
- You can start with a blank document or choose from a template.

Basic Features:
- Ribbon Toolbar: Contains tabs like Home, Insert, Layout, etc.
- Typing and Editing: Just click and start typing.
- Save Document: Ctrl + S or File > Save As to save your work.

Common Tasks:
- Change font style and size.
- Align text (left, center, right).
- Use bullet points and numbered lists.
- Adjust line spacing and paragraph settings.

Practice:
- Type a short paragraph.
- Try formatting the text using bold, italics, and underline.
- Save your file with a name like "MyFirstWordDoc.docx"`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 3: Formatting Documents in Word',
      content: `Formatting makes your document look professional and readable.

Text Formatting:
- Bold: Ctrl + B
- Italic: Ctrl + I
- Underline: Ctrl + U
- Highlight text with colors.

Paragraph Formatting:
- Line spacing: Choose single, 1.5, or double.
- Alignment: Left, Center, Right, Justify.
- Indents and spacing: Adjust from Layout tab.

Page Layout:
- Margins: Default is 1 inch; change from Layout > Margins.
- Orientation: Portrait or Landscape.
- Page Size: A4, Letter, etc.

Header and Footer:
- Go to Insert > Header/Footer to add document titles, dates, page numbers.

Practice:
- Format a title using bold and large font.
- Add a page number to the footer.
- Change the page orientation to landscape.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 4: Getting Started with Microsoft Excel',
      content: `Microsoft Excel is used for data entry, calculations, and analysis. It is made up of cells arranged in rows and columns.

Getting Started:
- Launch Excel and open a blank workbook.
- A workbook contains multiple sheets. Each sheet is made up of cells (like A1, B2).

Basic Tasks:
- Enter text and numbers into cells.
- Use formulas like =A1+A2 for calculations.
- Save your work frequently.

Common Features:
- AutoSum: Automatically add a range of cells.
- Fill Handle: Drag to copy values or formulas.
- Sort and Filter: Organize data quickly.

Practice:
- Enter a list of numbers in Column A.
- Use =SUM(A1:A5) in cell A6 to get the total.
- Format the numbers to two decimal places.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 5: Basic Formulas and Functions in Excel',
      content: `Formulas are used to perform calculations. Functions are predefined formulas in Excel.

Basic Formulas:
- Add: =A1 + A2
- Subtract: =A1 - A2
- Multiply: =A1 * A2
- Divide: =A1 / A2

Common Functions:
- SUM: =SUM(A1:A5)
- AVERAGE: =AVERAGE(A1:A5)
- MAX: =MAX(A1:A5)
- MIN: =MIN(A1:A5)

Tips:
- Always start a formula with =
- Use parentheses for order of operations

Practice:
- Create a list of numbers.
- Calculate total, average, max, and min.
- Try changing values to see formulas update.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 6: Getting Started with Microsoft PowerPoint',
      content: `PowerPoint is used to create visual presentations.

Getting Started:
- Open PowerPoint and select a blank presentation.
- A presentation is made up of slides.

Slide Basics:
- Each slide contains placeholders for title and content.
- Add new slides from the Home tab > New Slide.

Adding Content:
- Insert text boxes, images, shapes, charts, and SmartArt.
- Change layout from Home > Layout.

Design Tips:
- Use consistent fonts and colors.
- Avoid cluttered slides.
- Use bullet points instead of paragraphs.

Practice:
- Create 3 slides: title, content, and image.
- Apply a theme from the Design tab.
- Save as "MyFirstPresentation.pptx"`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 7: Applying Transitions and Animations in PowerPoint',
      content: `Transitions control how one slide moves to another. Animations add effects to text and objects.

Slide Transitions:
- Go to Transitions tab.
- Choose an effect like Fade, Push, or Wipe.
- Apply to all slides if needed.

Animations:
- Select an object and go to Animations tab.
- Choose effects like Appear, Fly In, or Zoom.
- Use Animation Pane to organize multiple effects.

Tips:
- Don’t overuse animations.
- Use them to highlight important points.

Practice:
- Add a transition to each slide.
- Animate bullet points to appear one by one.
- Preview your slide show using F5.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 8: Saving and Sharing Your Work',
      content: `It’s important to save your work properly and know how to share it.

Saving:
- Word/Excel/PowerPoint: File > Save As
- Choose location: OneDrive, This PC, USB drive, etc.
- Use descriptive file names.

Sharing:
- Email as attachment.
- Share link via OneDrive.
- Export as PDF for easy viewing.

Print Settings:
- Preview document or slides before printing.
- Choose correct paper size and layout.

Practice:
- Save each project (Word, Excel, PowerPoint).
- Export each as PDF.
- Try sharing using a cloud service.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 9: Shortcuts and Productivity Tips',
      content: `Learning shortcuts can improve speed and efficiency.

Common Shortcuts:
- Ctrl + C: Copy
- Ctrl + V: Paste
- Ctrl + Z: Undo
- Ctrl + S: Save
- Ctrl + P: Print
- Ctrl + B/I/U: Bold, Italic, Underline

Excel-Specific:
- Ctrl + Shift + L: Add filter
- F2: Edit cell

PowerPoint-Specific:
- F5: Start slideshow
- Ctrl + M: New slide

Word-Specific:
- Ctrl + Enter: New page
- Ctrl + K: Insert hyperlink

Practice:
- Use shortcuts instead of clicking buttons.
- Note which ones help you most.`,
      code: '',
      output: ''
    },
    {
      title: 'Chapter 10: Course Summary and Next Steps',
      content: `You’ve now covered the basics of:
- Microsoft Word: For creating and formatting documents.
- Microsoft Excel: For organizing and analyzing data.
- Microsoft PowerPoint: For designing presentations.

What’s Next?
- Explore intermediate and advanced features (like mail merge, pivot tables, or presentation themes).
- Try real-world projects like making a resume, budgeting sheet, or product pitch deck.

Resources:
- Microsoft Office Help Center
- YouTube tutorials
- Practice files and templates from Microsoft website

Congratulations on completing the course!`,
      code: '',
      output: ''
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
      <div className="text-center">
        <img src="officelogo.png" alt="MS Office Logo" className="w-24 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-blue-600">MICROSOFT OFFICE COURSE</h3>
        <p className="text-gray-700 text-md mt-2">A beginner-friendly guide to mastering Word, Excel, and PowerPoint.</p>
      </div>

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
      <p className="text-gray-800 text-sm mb-4 whitespace-pre-line">{content}</p>
      {code && (
        <>
          <h3 className="text-gray-800 text-sm font-bold">Code Example:</h3>
          <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">{code}</pre>
        </>
      )}
      {output && (
        <>
          <h3 className="text-gray-800 text-sm font-bold mt-2">Output:</h3>
          <p className="bg-gray-100 text-sm p-4 rounded-md overflow-auto whitespace-pre-line">{output}</p>
        </>
      )}
    </div>
  );
}

export default MSOfficeCourse;