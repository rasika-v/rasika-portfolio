import { useState, useEffect } from 'react';

const useInfiniteScroll = (fetchItems) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            try {
                const newItems = await fetchItems(page);
                setItems(prevItems => [...prevItems, ...newItems]);
            } catch (error) {
                console.error('Failed to fetch items', error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, [page, fetchItems]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
            return;
        }
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return { items, loading };
};

export default useInfiniteScroll;
