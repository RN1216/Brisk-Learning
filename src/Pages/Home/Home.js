import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails/CoursesDetails';
import  CardGroup  from 'react-bootstrap/CardGroup';

const Home = () => {
    const allCoursesDetail = useLoaderData();
    return (
        <div className='d-inline-block'>
          
           {
                allCoursesDetail.map(coursesdetail =><CoursesDetails 
                key={coursesdetail._id}
                coursesdetail={coursesdetail}>
                </CoursesDetails>)
            }
                
          
           
        </div>
    );
};

export default Home;