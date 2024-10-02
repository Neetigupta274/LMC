import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';

const Card = ({ e }) => {
  return (
 
    <Link to ="CardDetails" state={{ course: e }}>
      
      
      <div className="card">
        <img src={e.Banner} alt={e.CourseTitle} className="card-banner" />
        <div className="card-details">
          <div className="card-category">{e.Category}</div>
          <h2 className="card-title">{e.CourseTitle}</h2>
          <div className="details-duration">Duration: {e.CourseDuration}</div>

          <Button  color="primary" variant="contained"  className="card-btn">Enroll Now</Button>
        </div>
      </div>
    
      
    </Link>
    
  );
};

export default Card;
