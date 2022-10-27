import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";

import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails/CoursesDetails";
import ErrorPage from "../../Pages/ErrorPages/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Courses from './../../Pages/Courses/Courses/Courses';
import FAQ from './../../Pages/FAQ/FAQ';
import Register from './../../Pages/Register/Register';
import PrivateRoute from './../PrivateRoute/PrivateRoute';


export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://brisk-learning-server-site.vercel.app/coursesdetail')
            },
            {
                path:'/courses/:id',
                element:<PrivateRoute><Courses></Courses></PrivateRoute>,
                loader:({params})=>fetch(`https://brisk-learning-server-site.vercel.app/category/${params.id}`)

            },
            {
                path:'/coursesdetail/:id',
                element:<PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://brisk-learning-server-site.vercel.app/coursesdetail/${params.id}`)

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])