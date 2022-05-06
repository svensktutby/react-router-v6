import React, { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = {};
        if (search.length) params.post = search;
        if (checked) params.latest = true;
        setSearchParams(params);
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label style={{ padding: '0 1rem' }}>
                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                &nbsp;New only
            </label>
            <input type="submit" value="Search" />
        </form>
    );
};

export { BlogFilter };
