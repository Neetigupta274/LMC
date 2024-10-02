import React from 'react';
import './Quiz.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const placeholderImageURL1 = 'https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg';
const placeholderImageURL2 = 'https://www.interviewbit.com/blog/wp-content/uploads/2021/08/javascript.jpg';
const placeholderImageURL3 = 'https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png';

const Quiz = () => {
  return (
    <div className='BG'>
      <center>
        <h1>Quiz Page</h1>
      </center>
      <div className="quiz-card-container">

        
        <Link to={"/Practice/Quiz/HtmlCss"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL1} alt="HTML-CSS" />
              <h3 className="quiz-card-title">HTML-CSS</h3>
              <h3 className='practice-quiz'>Practice Quiz</h3>
            </div>
        </Link>

        <Link to={"/Practice/Quiz/JavaScript"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL2} alt="JavaScript" />
              <h3 className="quiz-card-title">JavaScript</h3>
              <h3 className='practice-quiz'>Practice Quiz</h3>
            </div>
        </Link>


        <Link to={"/Practice/Quiz/React"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL3} alt="React" />
              <h3 className="quiz-card-title">React</h3>
              <h3 className='practice-quiz'>Practice Quiz</h3>
            </div>
        </Link>



      </div>
    </div>
  );
};

export default Quiz;