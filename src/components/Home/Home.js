import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courseCategories = useLoaderData();

    return (
        <div>
            <h2>Welcome to Learning School</h2>
            <Row xs={2} md={3} className="g-4">
                {courseCategories.map((course, idx) =>
                    <Col key={idx}>
                        <Card>
                            <Card.Img style={{ height: '15rem' }} variant="top" src={course.image_url} />
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Home;