import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SinglePost = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export { SinglePost };
