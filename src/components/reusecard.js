import React from 'react';
import PropTypes from 'prop-types';

const Reuse = ({ title, image, description }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} />}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
};

export default Reuse;
