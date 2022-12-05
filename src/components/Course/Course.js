import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>This is course</h2>
            {
                allCourses.map(course => <h5>{course.details}</h5>)
            }
        </div>
    );
};

export default Course;