import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading';

const CardDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/posts/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl, id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="container">
            {data && (
                <>
                    <img
                        width={300}
                        height={300}
                        src={data.image}
                        alt={data.title}
                        className="card-image"
                    />
                    <h1 className='single-h1'>{data.title}</h1>
                    <p className='single-p'>Author: {data.author}</p>
                    <p className="card-description">
                        {data.description}
                    </p>
                </>
            )}
        </div>
    );
};

export default CardDetail;
