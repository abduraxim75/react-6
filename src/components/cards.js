import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../api/usefetchdata';
import Loading from '../components/loading';

const Cards = () => {
    const { data, loading, error } = useFetchData('api/posts');
    const [expandedDescription, setExpandedDescription] = useState({});

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const handleDescriptionExpand = (postId) => {
        setExpandedDescription((prevExpanded) => ({
            ...prevExpanded,
            [postId]: !prevExpanded[postId],
        }));
    };

    return (
        <div>
            <h1 className="cardh1">All articles</h1>
            <ul className="card-list">
                {data.map((post) => (
                    <li className="card-post" key={post._id}>
                        <Link className='link-card' to={`/card/${post._id}`}>
                            <img src={post.image} alt={`Image ${post.id+ 1}`} className="card-image" />
                            <h2 className="card-title">{post.title}</h2>
                            <p className={`card-description ${expandedDescription[post._id] ? 'expanded' : ''}`}>
                                {post.description}
                            </p>
                        </Link>
                        {post.description.length > 30 && (
                            <span className="expand-button" onClick={() => handleDescriptionExpand(post._id)}>
                                {expandedDescription[post._id] ? 'Read Less' : 'Read More'}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cards;
