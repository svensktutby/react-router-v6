import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Our news</h1>
            <Link to="/posts/new">Add new post</Link>
            {posts.map(({ id, title }) => (
                <Link key={id} to={`/posts/${id}`}>
                    <li>{title}</li>
                </Link>
            ))}
        </div>
    );
};

export { Blog };
