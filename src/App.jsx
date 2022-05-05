import { Routes, Route, Navigate } from 'react-router-dom';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { SinglePost } from './pages/SinglePost';
import { EditPost } from './pages/EditPost';
import { CreatePost } from './pages/CreatePost';
import { Login } from './pages/Login';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="about-us" element={<Navigate to="/about" replace />} />
                    <Route path="posts" element={<Blog />} />
                    <Route path="posts/:id" element={<SinglePost />} />
                    <Route
                        path="posts/:id/edit"
                        element={
                            <RequireAuth>
                                <EditPost />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="posts/new"
                        element={
                            <RequireAuth>
                                <CreatePost />
                            </RequireAuth>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
