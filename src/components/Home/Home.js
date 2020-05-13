import React from 'react';
import './Home.scss';

const Home = () =>{
    const handleClick = () =>{
        document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    return(
        <div id='home' className='headContainer'>
            <div className='headerWrapper'>
                <div className='headFLine'>Hello, I'm <span>Himanshu Kumar.</span></div>
                <div className='headSLine'>I'm a full-stack web developer.</div> 
                <div className='viewWork' onClick={handleClick} > View my work <img src={process.env.PUBLIC_URL + '/icons/right-arrow.svg'} alt='right-arrow'></img></div>
             </div>
        </div>
    )
}

export default Home;