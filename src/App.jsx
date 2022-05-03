import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/about">About</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
