import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { BlogFilter } from '../components/BlogFilter';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

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
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <Link to="/posts/new">Add new post</Link>
            {posts
                .filter(({ id, title }) => title.includes(postQuery) && id >= startsFrom)
                .map(({ id, title }) => (
                    <Link key={id} to={`/posts/${id}`}>
                        <li>{title}</li>
                    </Link>
                ))}
        </div>
    );
};

export { Blog };
