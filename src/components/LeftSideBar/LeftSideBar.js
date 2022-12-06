import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSideBar = () => {
    const courseCategories = useLoaderData();
    return (
        <>
            <h3>Course Categories</h3>
            <ButtonGroup vertical>
                {courseCategories.map((course, idx) =>
                    <Link key={idx} to={`/category/${course.id}`}>
                        <Button size="lg" className="mb-2 btn btn-warning">{course.name}</Button>
                    </Link>)}
            </ButtonGroup>
        </>

    );
};

export default LeftSideBar;