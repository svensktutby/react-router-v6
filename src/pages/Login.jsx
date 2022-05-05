import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Login = () => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        if (user) signIn(user, () => navigate(fromPage, { replace: true }));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={user} onChange={({ target: { value } }) => setUser(value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export { Login };
