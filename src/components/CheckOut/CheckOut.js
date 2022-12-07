import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { SlBadge } from "react-icons/sl";
import { Badge, Card } from 'react-bootstrap';
const CheckOut = () => {
    const course = useLoaderData();
    console.log("In Checkout page", course);

    return (
        <>
            <h2>Course chechout</h2>

            <Card>
                <Card.Header>{course.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            <FcRating></FcRating><Badge bg="danger" className='me-5'>{course.rating.number}</Badge>
                            <SlBadge></SlBadge><Badge bg="danger" className='me-5'>{course.rating.badge}</Badge>
                        </p>
                        <footer className="blockquote-footer">
                            Instructor <cite title="Source Title">{course.author.name}
                                <p>{course.details}</p></cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>

    );
};

export default CheckOut;