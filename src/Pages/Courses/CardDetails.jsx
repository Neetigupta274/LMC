import React from 'react';
import { useLocation } from 'react-router-dom';
import "./CardDetails.css";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function CardDetails() {
  const location = useLocation();
  const { course } = location.state;

  return (
    <div className='B1'>
    <div className="card-details-page">
     
      <center>
        <h1>{course.CourseTitle}</h1>
        <img src={course.Banner} alt={course.CourseTitle} className="details-banner" />
        <div className="details-category">{course.Category}</div>
        <p className="details-description">{course.CourseDescription}</p>
        <div className="details-info">
          <div className="details-price">Price: {course.CoursePrice}</div>
          <div className="details-duration">Duration: {course.CourseDuration}</div>
          <div className="details-language">Language: {course.CourseLanguage}</div>
        </div>
        <div className="back-btn">
        <Button sx={{backgroundColor:"#007BFF",color:"white", height:"40px",width:"90px",marginRight:"",}} onClick={() => window.history.back()}>Back</Button>
             {/* <Link to = "Buy"><Button sx={{backgroundColor:"#007BFF",color:"white", height:"40px",width:"90px",marginRight:"",}}>BUY NOW</Button></Link> */}
            <Link to="/Buy"><Button  sx={{backgroundColor:"#007BFF",color:"white", height:"40px",width:"90px"}}>Buy</Button></Link>
      </div>
      </center>
    </div>
    </div>
  );
}
