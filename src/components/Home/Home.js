import React from 'react';
import './Home.scss';

const Home = () =>{
    return(
        <div id='home'  className='headContainer'>
            <div className='headerWrapper'>
                <div className='headFLine'>Hello, I'm <span>Himanshu Kumar.</span></div>
                <div className='headSLine'>I'm a full-stack web developer.</div> 
                <div className='viewWork'> View my work <img src='./icons/right-arrow.svg' alt='right-arrow'></img></div>
             </div>
        </div>
    )
}

export default Home;