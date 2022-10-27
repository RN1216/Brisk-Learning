import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails/CoursesDetails';


const Home = () => {
    const allCoursesDetail = useLoaderData();
    return (
        <div >
          
           {
                allCoursesDetail.map(coursesdetail => <CoursesDetails 
                key={coursesdetail._id}
                coursesdetail={coursesdetail}>
                </CoursesDetails>)
            }
                
          
           
        </div>
    );
};

export default Home;