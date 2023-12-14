import React from 'react';
import Cards from '../components/cards';


const Home = () => {
    return (
    <div className='container'>
        <div className='home-page'>
            <h1 className='home-h1'>
                Stay Curios
            </h1>
            <p className='home-paragraph'>
                Discover stories,thinking,and expertise from writers on any topic
            </p>
        </div>
        
        <Cards/>
    </div>
    
    
    );
}

export default Home;
