import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    console.log("In Checkout page", course._id);

    return (
        <div>
            <h5>{course.title}</h5>
            {course.details}
        </div>
    );
};

export default CheckOut;