import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    //console.log(courseDetails);
    return (
        <div>
            <img src={courseDetails.image_url} style={{ height: '12rem' }} alt="" />
            <h3>{courseDetails.title}</h3>
            <h6>{courseDetails.details}</h6>
            <Link to={`/checkout/${courseDetails._id}`}><Button>Get premium access</Button></Link>
        </div>
    );
};

export default CourseDetails;