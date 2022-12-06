import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>This is course</h2>
            {allCourses.map(course =>
                <>
                    <h5>{course.title}</h5>
                    <img src={course.image_url} style={{ height: '12rem' }} alt="" />
                </>
            )}
        </div>
    );
};

export default Course;