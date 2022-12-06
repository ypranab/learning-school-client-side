import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import CourseSummary from "../components/CourseSummary/CourseSummary";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
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
                loader: () => fetch(`https://learning-school-server-side.vercel.app/course/`)
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
                path: '/category/:id',
                element: <PrivateRoute><CourseSummary></CourseSummary></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-school-server-side.vercel.app/category/${params.id}`)
            }
        ]
    }
])