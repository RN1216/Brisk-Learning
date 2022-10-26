import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const LeftNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brisk-courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>Courses Title:{courses.length}</h2>
      {courses.map((course) => (
        <Button className="d-block my-3" variant="outline-info"style={{width:'300px'}} key={course.id}>
          <Link  className=" text-decoration-none text-dark "  to={`/courses/${course.id}`}>
                {course.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default LeftNav;
