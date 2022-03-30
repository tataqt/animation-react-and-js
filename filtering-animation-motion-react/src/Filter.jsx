import { useEffect } from 'react';

function Filter({ data, activeGenre, setActiveGenre, setFiltred }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltred(data);
            return;
        }

        const filtered = data.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltred(filtered);
    }, [activeGenre]);

    return (
        <div className='filter-container'>
            <button className={activeGenre === 0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>All</button>
            <button className={activeGenre === 35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>Action</button>
        </div>
    );
}

export default Filter;