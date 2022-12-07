import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseSummary = () => {
    const courses = useLoaderData();
    //console.log(courses);
    return (
        <div className='min-vh-100'>
            {courses.map((course, idx) =>
                <Link key={idx} to={`/course/${course._id}`}>
                    <img src={course.image_url} style={{ height: '120px' }} alt="" />
                    <h4>{course.title}</h4>
                </Link>)
            }
        </div>
    );
};

export default CourseSummary;