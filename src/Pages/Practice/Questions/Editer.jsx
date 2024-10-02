import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from '@mui/material';
import "./Editer.css";

export default function Editer({ SelectQuestion }) {
    const [res, setRes] = useState("");
    const [promt, setPromt] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [feedback, setFeedback] = useState(""); 
    const [correctAnswer, setCorrectAnswer] = useState(""); 

    useEffect(() => {
        async function GetAnswerFromAi() {
            const apiKey = "AIzaSyCr6JJjWqGjbSSBAO1qGURBQVB0AT-tcBI";
            const genAI = new GoogleGenerativeAI(apiKey);

            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });

            const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 64,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain",
            };

            const chatSession = model.startChat({
                generationConfig,
                history: [],
            });

            const result = await chatSession.sendMessage("solve this " + promt);
            const answer = result.response.text();

          
            const formattedAnswer = answer.trim(); 
            setCorrectAnswer(formattedAnswer); 

            
            if (inputValue.trim().toLowerCase() === formattedAnswer.toLowerCase()) {
                setFeedback("Correct Answer!");
            } else {
                setFeedback("Incorrect Answer. The correct answer is: " + formattedAnswer);
            }
        }

        if (promt) {
            GetAnswerFromAi();
        }
    }, [promt]);

    function onHandle(e) {
        e.preventDefault();
        setPromt(SelectQuestion.Question + " " + inputValue); 
        setFeedback(""); 
    }

    function handleInputChange(e) {
        setInputValue(e.target.value); 
    }

    return (
        <div>
            <h1>Editor Page</h1>
            <center>
                <h3>Q. {SelectQuestion.Question}</h3>
                <hr />
                <form onSubmit={(e) => onHandle(e)}>
                   
                    <input 
                        type="text"
                        className='form-group'
                        placeholder='Write answer'
                        value={inputValue}
                        onChange={handleInputChange} 
                    />
                  
                    {feedback && <div className='feedback'>{feedback}</div>}
                    <br />
                    <Button
                        type='submit'
                        variant="contained"
                        color="secondary"
                        disabled={!inputValue.trim()} 
                    >
                        Submit
                    </Button>
                </form>
            </center>
        </div>
    );
}
