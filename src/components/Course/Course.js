import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>This is course</h2>
            <Row xs={2} md={3} className="g-4">
                {allCourses.map((course, idx) =>
                    <Col key={idx}>
                        <Link to={`/course/${course._id}`}>
                            <Card>
                                <Card.Img style={{ height: '15rem' }} variant="top" src={course.image_url} />
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Course;