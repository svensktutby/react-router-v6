import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SinglePost = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

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
            <button type="button" onClick={goBack}>
                Go back
            </button>
            {/* Bad approach */}
            <button type="button" onClick={goHome}>
                Go home
            </button>
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
