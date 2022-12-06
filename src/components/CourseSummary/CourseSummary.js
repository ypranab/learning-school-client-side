import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseSummary = () => {
    const courses = useLoaderData();
    //console.log(courses);
    return (
        <div className='min-vh-100'>
            {courses.map((course, idx) =>
                <Link key={idx} to={`/course/${course._id}`}>
                    <h4>{course.title}</h4>
                    <img src={course.image_url} style={{ height: '70px' }} alt="" />
                </Link>)
            }
        </div>
    );
};

export default CourseSummary;