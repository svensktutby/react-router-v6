import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1, // length of / (home page)
    });

    return (
        <Link to={to} style={{ color: match ? 'var(--color-active)' : '#fff' }} {...props}>
            {children}
        </Link>
    );
};

export { CustomLink };
