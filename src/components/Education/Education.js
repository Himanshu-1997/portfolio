import React from 'react';
import './Education.scss';

const Education = () => {
    return(
        <div className='eduContainer'>
            <h1 className='eduTitle'>Education</h1>
            <ul>
                <li>
                    <div className='edu1'>
                        <img src='./icons/bitnesra.png' alt='BitMesra'></img>
                        <div className='year'>Birla Institute Of Technology, Mesra(2015-2019)</div>
                    </div>
                    <div className='clg1'> B.E in Computer Science and Engineering (CGPA :- 8.35) </div>
                </li>
                <li>
                    <div className='edu1'>
                        <img src='./icons/dav.png' alt='BitMesra'></img>
                        <div className='year'>M.K. DAV Public School, Daltonganj(2012-2014)</div>
                    </div>
                    <div className='clg1'> Senior Secondary Education (Result:- 93.8 %) </div>
                </li>
            </ul>
        </div>
    )
}
export default Education;
