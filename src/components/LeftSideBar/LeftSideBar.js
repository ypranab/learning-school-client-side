import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSideBar = () => {
    const courseCategories = useLoaderData();
    return (
        <div>
            <h3>Course Categories</h3>
            {
                courseCategories.map(course => <Link to={`/category/${course.id}`}>{course.name}</Link>)
            }
        </div>
    );
};

export default LeftSideBar;