import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const CreatePost = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    return (
        <div>
            <h1>Create a post</h1>
            <button type="button" onClick={() => signOut(() => navigate('/', { replace: true }))}>
                Log Out
            </button>
        </div>
    );
};

export { CreatePost };
