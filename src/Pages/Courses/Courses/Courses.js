import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const similerCourses = useLoaderData();
    return (
        <div>
            <h2>Some Courses is here :{similerCourses.length}</h2>
        </div>
    );
};

export default Courses;