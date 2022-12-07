import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut/CheckOut";
import Course from "../components/Course/Course";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseSummary from "../components/CourseSummary/CourseSummary";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Main from "../Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://learning-school-server-side.vercel.app/course-categories'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-school-server-side.vercel.app/course-categories'),
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://learning-school-server-side.vercel.app/course/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/category/:id',
                element: <CourseSummary></CourseSummary>,
                loader: ({ params }) => fetch(`https://learning-school-server-side.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learning-school-server-side.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-school-server-side.vercel.app/course/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>Page Not Found</div>
    }
])