import React, { useState } from 'react';

export default function JavaScript() {
  
    const questions = [
      
        {
          "text": "Which company developed JavaScript?",
          "options": [
            { "id": 1, "text": "Netscape" },
            { "id": 2, "text": "Microsoft" },
            { "id": 3, "text": "Google" },
            { "id": 4, "text": "Apple" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "Which of the following is a JavaScript data type?",
          "options": [
            { "id": 1, "text": "String" },
            { "id": 2, "text": "Boolean" },
            { "id": 3, "text": "Number" },
            { "id": 4, "text": "All of the above" }
          ],
          "correctAnswerId": 4
        },
        {
          "text": "Inside which HTML element do we put the JavaScript?",
          "options": [
            { "id": 1, "text": "<javascript>" },
            { "id": 2, "text": "<js>" },
            { "id": 3, "text": "<script>" },
            { "id": 4, "text": "<scripting>" }
          ],
          "correctAnswerId": 3
        },
        {
          "text": "Where is the correct place to insert a JavaScript?",
          "options": [
            { "id": 1, "text": "The <head> section" },
            { "id": 2, "text": "The <body> section" },
            { "id": 3, "text": "Both the <head> section and the <body> section are correct" },
            { "id": 4, "text": "None of the above" }
          ],
          "correctAnswerId": 3
        },
        {
          "text": "What is the correct syntax for referring to an external script called 'xxx.js'?",
          "options": [
            { "id": 1, "text": "<script src='xxx.js'>" },
            { "id": 2, "text": "<script href='xxx.js'>" },
            { "id": 3, "text": "<script ref='xxx.js'>" },
            { "id": 4, "text": "<script name='xxx.js'>" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "How do you write 'Hello World' in an alert box?",
          "options": [
            { "id": 1, "text": "msgBox('Hello World');" },
            { "id": 2, "text": "alertBox('Hello World');" },
            { "id": 3, "text": "msg('Hello World');" },
            { "id": 4, "text": "alert('Hello World');" }
          ],
          "correctAnswerId": 4
        },
        {
          "text": "How do you create a function in JavaScript?",
          "options": [
            { "id": 1, "text": "function:myFunction()" },
            { "id": 2, "text": "function myFunction()" },
            { "id": 3, "text": "function = myFunction()" },
            { "id": 4, "text": "function::myFunction()" }
          ],
          "correctAnswerId": 2
        },
        {
          "text": "How do you call a function named 'myFunction'?",
          "options": [
            { "id": 1, "text": "call myFunction()" },
            { "id": 2, "text": "call function myFunction()" },
            { "id": 3, "text": "myFunction()" },
            { "id": 4, "text": "Call.myFunction()" }
          ],
          "correctAnswerId": 3
        },
        {
          "text": "How to write an IF statement in JavaScript?",
          "options": [
            { "id": 1, "text": "if i == 5 then" },
            { "id": 2, "text": "if i = 5 then" },
            { "id": 3, "text": "if (i == 5)" },
            { "id": 4, "text": "if i = 5" }
          ],
          "correctAnswerId": 3
        },
        {
          "text": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          "options": [
            { "id": 1, "text": "if (i <> 5)" },
            { "id": 2, "text": "if (i != 5)" },
            { "id": 3, "text": "if i <> 5" },
            { "id": 4, "text": "if i =! 5 then" }
          ],
          "correctAnswerId": 2
        },
        {
          "text": "How does a WHILE loop start?",
          "options": [
            { "id": 1, "text": "while (i <= 10)" },
            { "id": 2, "text": "while i = 1 to 10" },
            { "id": 3, "text": "while (i <= 10; i++)" },
            { "id": 4, "text": "while (i < 10)" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "How does a FOR loop start?",
          "options": [
            { "id": 1, "text": "for (i = 0; i <= 5)" },
            { "id": 2, "text": "for (i = 0; i <= 5; i++)" },
            { "id": 3, "text": "for i = 1 to 5" },
            { "id": 4, "text": "for (i <= 5; i++)" }
          ],
          "correctAnswerId": 2
        },
        {
          "text": "How can you add a comment in a JavaScript?",
          "options": [
            { "id": 1, "text": "<!-- This is a comment -->" },
            { "id": 2, "text": "// This is a comment" },
            { "id": 3, "text": "' This is a comment" },
            { "id": 4, "text": "/* This is a comment */" }
          ],
          "correctAnswerId": 2
        },
        {
          "text": "How to insert a comment that has more than one line?",
          "options": [
            { "id": 1, "text": "/* This comment has more than one line */" },
            { "id": 2, "text": "// This comment has more than one line //" },
            { "id": 3, "text": "<!-- This comment has more than one line -->" },
            { "id": 4, "text": "/* This comment has more than one line //" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "What is the correct way to write a JavaScript array?",
          "options": [
            { "id": 1, "text": "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")" },
            { "id": 2, "text": "var colors = \"red\", \"green\", \"blue\"" },
            { "id": 3, "text": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")" },
            { "id": 4, "text": "var colors = [\"red\", \"green\", \"blue\"]" }
          ],
          "correctAnswerId": 4
        },
        {
          "text": "How do you round the number 7.25, to the nearest integer?",
          "options": [
            { "id": 1, "text": "Math.rnd(7.25)" },
            { "id": 2, "text": "round(7.25)" },
            { "id": 3, "text": "Math.round(7.25)" },
            { "id": 4, "text": "Math.random(7.25)" }
          ],
          "correctAnswerId": 3
        },
        {
          "text": "How do you find the number with the highest value of x and y?",
          "options": [
            { "id": 1, "text": "Math.max(x, y)" },
            { "id": 2, "text": "Math.ceil(x, y)" },
            { "id": 3, "text": "Math.floor(x, y)" },
            { "id": 4, "text": "ceil(x, y)" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "What is the correct JavaScript syntax for opening a new window called 'w2'?",
          "options": [
            { "id": 1, "text": "w2 = window.new('http://www.example.com');" },
            { "id": 2, "text": "w2 = window.open('http://www.example.com');" },
            { "id": 3, "text": "w2 = window.create('http://www.example.com');" },
            { "id": 4, "text": "w2 = window.opener('http://www.example.com');" }
          ],
          "correctAnswerId": 2
        },
        {
          "text": "How can you detect the client's browser name?",
          "options": [
            { "id": 1, "text": "navigator.appName" },
            { "id": 2, "text": "client.navName" },
            { "id": 3, "text": "browser.name" },
            { "id": 4, "text": "user.browser" }
          ],
          "correctAnswerId": 1
        },
        {
          "text": "Which event occurs when the user clicks on an HTML element?",
          "options": [
            { "id": 1, "text": "onmouseclick" },
            { "id": 2, "text": "onmouseover" },
            { "id": 3, "text": "onclick" },
            { "id": 4, "text": "onchange" }
          ],
          "correctAnswerId": 3
        }
      
      
     
       
    
    
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
  
}
