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
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/coursesdetail')
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path:'/coursesdetail/:id',
                element:<CoursesDetails></CoursesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/coursesdetail/${params.id}`)

            },
            {
                path:'/',
                element:<FAQ></FAQ>
            }
        ]
    }
])