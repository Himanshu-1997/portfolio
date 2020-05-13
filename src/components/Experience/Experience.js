import React from 'react';
import './Experience.scss';

const Experience = () => {
    return(
        <div id='experience' className='expContainer'>
            <h1 className='expTitle'>Experience</h1>
            <ul>
                <li>
                    <div className='exp1'>
                        <img src={process.env.PUBLIC_URL + '/icons/paytm.jpg'} alt='paytm'></img>
                        <div className='year'>Jul, 2019 - present</div>
                    </div>
                    <div className='role1'> Software Engineer </div>
                </li>
            </ul>
        </div>
    )
}
export default Experience;
