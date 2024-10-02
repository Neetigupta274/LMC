// src/Quiz.js

import React, { useState } from 'react';
import './HtmlCss.css';


const Quiz = () => {
  const questions = [
    
      {
        "text": "What does HTML stand for?",
        "options": [
          { "id": 1, "text": "Hyper Trainer Marking Language" },
          { "id": 2, "text": "Hyper Text Marketing Language" },
          { "id": 3, "text": "Hyper Text Markup Language" },
          { "id": 4, "text": "Hyper Text Markup Leveler" }
        ],
        "correctAnswerId": 3
      },
      {
        "text": "What does CSS stand for?",
        "options": [
          { "id": 1, "text": "Computing Style Sheet" },
          { "id": 2, "text": "Creative Style System" },
          { "id": 3, "text": "Cascading Style Sheet" },
          { "id": 4, "text": "Creative Styling Sheet" }
        ],
        "correctAnswerId": 3
      },
      {
        "text": "What is the correct HTML element for inserting a line break?",
        "options": [
          { "id": 1, "text": "<br>" },
          { "id": 2, "text": "<break>" },
          { "id": 3, "text": "<lb>" },
          { "id": 4, "text": "<linebreak>" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "Which HTML element is used to specify a footer for a document or section?",
        "options": [
          { "id": 1, "text": "<bottom>" },
          { "id": 2, "text": "<footer>" },
          { "id": 3, "text": "<foot>" },
          { "id": 4, "text": "<sectionfooter>" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which HTML attribute is used to define inline styles?",
        "options": [
          { "id": 1, "text": "font" },
          { "id": 2, "text": "class" },
          { "id": 3, "text": "styles" },
          { "id": 4, "text": "style" }
        ],
        "correctAnswerId": 4
      },
      {
        "text": "Which CSS property controls the text size?",
        "options": [
          { "id": 1, "text": "font-size" },
          { "id": 2, "text": "text-size" },
          { "id": 3, "text": "font-style" },
          { "id": 4, "text": "text-style" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you insert a comment in a CSS file?",
        "options": [
          { "id": 1, "text": "// this is a comment" },
          { "id": 2, "text": "/* this is a comment */" },
          { "id": 3, "text": "// this is a comment //" },
          { "id": 4, "text": "<!-- this is a comment -->" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which property is used to change the background color?",
        "options": [
          { "id": 1, "text": "color" },
          { "id": 2, "text": "bgcolor" },
          { "id": 3, "text": "background-color" },
          { "id": 4, "text": "background" }
        ],
        "correctAnswerId": 3
      },
      {
        "text": "Which CSS property is used to change the text color of an element?",
        "options": [
          { "id": 1, "text": "fgcolor" },
          { "id": 2, "text": "color" },
          { "id": 3, "text": "text-color" },
          { "id": 4, "text": "font-color" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which CSS property controls the alignment of text?",
        "options": [
          { "id": 1, "text": "text-align" },
          { "id": 2, "text": "text-style" },
          { "id": 3, "text": "text-align" },
          { "id": 4, "text": "align" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you make each word in a text start with a capital letter in CSS?",
        "options": [
          { "id": 1, "text": "text-transform: capitalize" },
          { "id": 2, "text": "text-style: capitalize" },
          { "id": 3, "text": "transform: capitalize" },
          { "id": 4, "text": "You can't do that with CSS" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "Which HTML element is used to specify a header for a document or section?",
        "options": [
          { "id": 1, "text": "<header>" },
          { "id": 2, "text": "<top>" },
          { "id": 3, "text": "<head>" },
          { "id": 4, "text": "<sectionheader>" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "What is the correct HTML element for the largest heading?",
        "options": [
          { "id": 1, "text": "<head>" },
          { "id": 2, "text": "<h1>" },
          { "id": 3, "text": "<h6>" },
          { "id": 4, "text": "<heading>" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which HTML element is used to define important text?",
        "options": [
          { "id": 1, "text": "<important>" },
          { "id": 2, "text": "<strong>" },
          { "id": 3, "text": "<b>" },
          { "id": 4, "text": "<i>" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which HTML element is used to define emphasized text?",
        "options": [
          { "id": 1, "text": "<italic>" },
          { "id": 2, "text": "<em>" },
          { "id": 3, "text": "<i>" },
          { "id": 4, "text": "<emphasis>" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "options": [
          { "id": 1, "text": "title" },
          { "id": 2, "text": "src" },
          { "id": 3, "text": "alt" },
          { "id": 4, "text": "longdesc" }
        ],
        "correctAnswerId": 3
      },
      {
        "text": "In CSS, how do you select an element with id 'demo'?",
        "options": [
          { "id": 1, "text": ".demo" },
          { "id": 2, "text": "#demo" },
          { "id": 3, "text": "*demo" },
          { "id": 4, "text": "demo" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "In CSS, how do you select elements with class name 'test'?",
        "options": [
          { "id": 1, "text": ".test" },
          { "id": 2, "text": "#test" },
          { "id": 3, "text": "*test" },
          { "id": 4, "text": "test" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you make the text bold in HTML?",
        "options": [
          { "id": 1, "text": "<bold>" },
          { "id": 2, "text": "<b>" },
          { "id": 3, "text": "<strong>" },
          { "id": 4, "text": "<boldtext>" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "How do you create an unordered list in HTML?",
        "options": [
          { "id": 1, "text": "<ul>" },
          { "id": 2, "text": "<ol>" },
          { "id": 3, "text": "<li>" },
          { "id": 4, "text": "<list>" }
        ],
        "correctAnswerId": 1
      },
     
       
    
    
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswerSelect = (questionIndex, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionId
    });
  };

  const handleSubmit = () => {
    let count = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswerId) {
        count += 1;
      }
    });
    setCorrectCount(count);
    setIsSubmitted(true);
  };

  return (
    <div className="quiz-container">
      {/* <h1>HTML and CSS Quiz</h1> */}
      {questions.map((question, questionIndex) => (
        <div className="question" key={questionIndex}>
          <p>{question.text}</p>
          {question.options.map(option => (
            <div className="option" key={option.id}>
              <label>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={option.id}
                  onChange={() => handleAnswerSelect(questionIndex, option.id)}
                  disabled={isSubmitted}
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {isSubmitted && (
        <div className="result">
           <p className='Ans' > Correct Answer : {correctCount} </p>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              {/* <p>{question.text}</p> */}
              {/* {selectedAnswers[questionIndex] === question.correctAnswerId ? ( */}
                {/* <p className="correct">Correct!</p> */}
              {/* ) : ( */}
                {/* <p className="incorrect"> */}
                  {/* Incorrect. The correct answer is {question.options.find(option => option.id === question.correctAnswerId).text}. */}
                {/* </p> */}
              {/* )} */}
            </div>
          ))}
        </div>
      )}
          
    </div>
  );
};

export default Quiz;
