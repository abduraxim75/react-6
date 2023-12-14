import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (endpoint, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_BASE_URL;
    const url = `${apiUrl}/${endpoint}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = options.token
                    ? { Authorization: `Bearer ${options.token}` }
                    : {};

                const response = await axios.get(url, { headers });
                setData(response.data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options.token,]);

    return { data, loading, error, };
};

export default useFetchData;
