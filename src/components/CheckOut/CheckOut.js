import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { SlBadge } from "react-icons/sl";
import { Badge, Button, Card } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const CheckOut = () => {
    const course = useLoaderData();
    //console.log("In Checkout page", course);
    const ref = React.createRef();

    return (
        <div>
            <h2>Course chechout</h2>

            <Card>
                <Card.Header>{course.title}</Card.Header>
                <Card.Body className='m-5' ref={ref}>
                    <blockquote className="blockquote mb-0">
                        <p>
                            <h3>{course.title}-Checkout</h3>
                            <FcRating></FcRating><Badge bg="danger" className='me-5'>{course.rating.number}</Badge>
                            <SlBadge></SlBadge><Badge bg="danger" className='me-5'>{course.rating.badge}</Badge>
                        </p>
                        <footer className="blockquote-footer">
                            Instructor <cite title="Source Title">{course.author.name}
                                <p>{course.details}</p></cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <Pdf targetRef={ref} filename={`${course.title}.pdf`}>
                    {({ toPdf }) => <Button className='m-3 mx-auto w-25' variant='info' onClick={toPdf}>Download</Button>}
                </Pdf>
            </Card>
        </div>

    );
};

export default CheckOut;