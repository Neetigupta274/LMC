import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Courses.css";

import Card from "./Card";

import CardDetails from "./CardDetails";

export default function Courses() {
  let CoursesData = [
    {
      Banner:
        "https://www.shutterstock.com/image-illustration/c-code-on-dark-background-600nw-1896170293.jpg",
      Category: "Core Programming",
      CourseTitle: "C & C++",
      CourseDescription: "Learn the basics of C and C++ programming.",
      CoursePrice: "10000",
      CourseDuration: "15Hr",
      CourseLanguage: "English",
    },
    {
      Banner:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp",
      Category: "Web Development",
      CourseTitle: "HTML for Beginners",
      CourseDescription:
        "Learn the basics of HTML and start building web pages.",
      CoursePrice: "5000",
      CourseDuration: "10Hr",
      CourseLanguage: "English",
    },
    {
      Banner:
        "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-1200-80.jpg",
      Category: "Web Development",
      CourseTitle: "CSS for Beginners",
      CourseDescription:
        "Master the fundamentals of CSS to style your web pages.",
      CoursePrice: "6000",
      CourseDuration: "12Hr",
      CourseLanguage: "English",
    },
    {
      Banner:
        "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
      Category: "Web Development",
      CourseTitle: "JavaScript for Beginners",
      CourseDescription:
        "Learn JavaScript to add interactivity to your websites.",
      CoursePrice: "8000",
      CourseDuration: "15Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      Category: "Web Development",
      CourseTitle: "React for Beginners",
      CourseDescription:
        "Get started with React to build dynamic web applications.",
      CoursePrice: "12000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
    },
    {
      Banner:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      Category: "Web Development",
      CourseTitle: "Node.js for Beginners",
      CourseDescription:
        "Learn Node.js to build scalable server-side applications.",
      CoursePrice: "11000",
      CourseDuration: "18Hr",
      CourseLanguage: "English",
    },
  ];

  return (
    <div className="first">
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <center>
                <h1>Courses</h1>
                {CoursesData.map((e, i) => (
                  <Card key={i} e={e} />
                ))}
              </center>
            }
          />

          <Route path="CardDetails" element={<CardDetails />} />
        </Routes>
      </div>
    </div>
  );
}
