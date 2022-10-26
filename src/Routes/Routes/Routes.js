import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails/CoursesDetails";
import Home from "../../Pages/Home/Home";
import Courses from './../../Pages/Courses/Courses/Courses';
import FAQ from './../../Pages/FAQ/FAQ';


export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>
            },
            {
                path:'/coursesdetails/:id',
                element:<CoursesDetails></CoursesDetails>
            },
            {
                path:'/',
                element:<FAQ></FAQ>
            }
        ]
    }
])