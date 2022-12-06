import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSummary = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            {courses.map(course => <h4>{course._id}</h4>)}
        </div>
    );
};

export default CourseSummary;