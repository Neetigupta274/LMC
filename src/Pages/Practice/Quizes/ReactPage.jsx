import React,{useState} from 'react'

export default function ReactPage() {
  const questions = [
    
      {
        "text": "What is React?",
        "options": [
          { "id": 1, "text": "A JavaScript library for building user interfaces" },
          { "id": 2, "text": "A CSS framework" },
          { "id": 3, "text": "A database management system" },
          { "id": 4, "text": "A web server" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "Who developed React?",
        "options": [
          { "id": 1, "text": "Google" },
          { "id": 2, "text": "Facebook" },
          { "id": 3, "text": "Twitter" },
          { "id": 4, "text": "Microsoft" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "What is JSX?",
        "options": [
          { "id": 1, "text": "A syntax extension for JavaScript" },
          { "id": 2, "text": "A type of database" },
          { "id": 3, "text": "A JavaScript compiler" },
          { "id": 4, "text": "A CSS preprocessor" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you create a React component?",
        "options": [
          { "id": 1, "text": "By using a function or a class" },
          { "id": 2, "text": "By using a class only" },
          { "id": 3, "text": "By using a function only" },
          { "id": 4, "text": "By using a CSS class" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "What is the purpose of render() in React?",
        "options": [
          { "id": 1, "text": "To compile JavaScript" },
          { "id": 2, "text": "To display the specified HTML code inside the specified HTML element" },
          { "id": 3, "text": "To fetch data from an API" },
          { "id": 4, "text": "To apply CSS styles" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "How do you pass data to components in React?",
        "options": [
          { "id": 1, "text": "Via props" },
          { "id": 2, "text": "Via state" },
          { "id": 3, "text": "Via events" },
          { "id": 4, "text": "Via methods" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "What is a state in React?",
        "options": [
          { "id": 1, "text": "A way to pass data to components" },
          { "id": 2, "text": "A built-in React object used to contain data or information about the component" },
          { "id": 3, "text": "A function to update the component" },
          { "id": 4, "text": "A method to fetch data" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "How do you update the state in a React component?",
        "options": [
          { "id": 1, "text": "Using this.state" },
          { "id": 2, "text": "Using this.setState" },
          { "id": 3, "text": "Using this.updateState" },
          { "id": 4, "text": "Using this.changeState" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "What are React hooks?",
        "options": [
          { "id": 1, "text": "Functions that let you use state and other React features without writing a class" },
          { "id": 2, "text": "Functions to compile JavaScript" },
          { "id": 3, "text": "Methods to fetch data" },
          { "id": 4, "text": "Functions to apply CSS styles" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "Which hook is used to add state to a functional component?",
        "options": [
          { "id": 1, "text": "useState" },
          { "id": 2, "text": "useEffect" },
          { "id": 3, "text": "useContext" },
          { "id": 4, "text": "useReducer" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "Which hook is used to perform side effects in a functional component?",
        "options": [
          { "id": 1, "text": "useState" },
          { "id": 2, "text": "useEffect" },
          { "id": 3, "text": "useContext" },
          { "id": 4, "text": "useReducer" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "How do you create a context in React?",
        "options": [
          { "id": 1, "text": "Using React.createContext()" },
          { "id": 2, "text": "Using React.useContext()" },
          { "id": 3, "text": "Using React.createContextProvider()" },
          { "id": 4, "text": "Using React.useContextProvider()" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you consume a context in React?",
        "options": [
          { "id": 1, "text": "Using React.createContext()" },
          { "id": 2, "text": "Using React.useContext()" },
          { "id": 3, "text": "Using React.createContextProvider()" },
          { "id": 4, "text": "Using React.useContextProvider()" }
        ],
        "correctAnswerId": 2
      },
      {
        "text": "What is a higher-order component in React?",
        "options": [
          { "id": 1, "text": "A component that renders another component" },
          { "id": 2, "text": "A component that modifies another component" },
          { "id": 3, "text": "A function that takes a component and returns a new component" },
          { "id": 4, "text": "A function that fetches data" }
        ],
        "correctAnswerId": 3
      },
      {
        "text": "What is React Router?",
        "options": [
          { "id": 1, "text": "A library for managing navigation and routing in React applications" },
          { "id": 2, "text": "A library for managing state in React applications" },
          { "id": 3, "text": "A CSS framework for React applications" },
          { "id": 4, "text": "A testing library for React applications" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "How do you handle events in React?",
        "options": [
          { "id": 1, "text": "Using inline JavaScript" },
          { "id": 2, "text": "Using addEventListener" },
          { "id": 3, "text": "Using event handlers defined as methods" },
          { "id": 4, "text": "Using event handlers defined as properties" }
        ],
        "correctAnswerId": 4
      },
      {
        "text": "What is the virtual DOM?",
        "options": [
          { "id": 1, "text": "A lightweight copy of the real DOM" },
          { "id": 2, "text": "A JavaScript library" },
          { "id": 3, "text": "A CSS preprocessor" },
          { "id": 4, "text": "A testing framework" }
        ],
        "correctAnswerId": 1
      },
      {
        "text": "What is the purpose of the key attribute in React?",
        "options": [
          { "id": 1, "text": "To give elements a unique identifier" },
          { "id": 2, "text": "To set the tab order" },
          { "id": 3, "text": "To add custom data" },
          { "id": 4, "text": "To apply styles" }
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
  )
}
