import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courseCategories = useLoaderData();

    return (
        <div>
            <h2>This is home</h2>
            {courseCategories.map(course => <p>{course.name}</p>)}
        </div>
    );
};

export default Home;