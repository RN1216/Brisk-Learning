import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  Card  from 'react-bootstrap/Card';
import EachCourseDetail from '../../SharedPage/EachCourseDetail/EachCourseDetail';


const Courses = () => {
    const similerCourses = useLoaderData();
    
    return (
        <div>
            <h2>Some Courses is here :{similerCourses.length}</h2>
          <div className='mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
                similerCourses.map(courses=><EachCourseDetail
                key={courses._id}
                courses ={courses}
                ></EachCourseDetail>)
            }
          </div>
        </div>
    );
};

export default Courses;