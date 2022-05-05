import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { SinglePost } from './pages/SinglePost';
import { EditPost } from './pages/EditPost';
import { CreatePost } from './pages/CreatePost';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Blog />} />
                    <Route path="posts/:id" element={<SinglePost />} />
                    <Route path="posts/:id/edit" element={<EditPost />} />
                    <Route path="posts/new" element={<CreatePost />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
