import React from 'react';
import './Contact.scss';

const Contact = () =>{
    return(
        <div id='contact' className='contactContainer'>
            <h1 className='contTitle'>Contact</h1>
            <div className='contactList'>
                <div className='linkedin'>
                    <img src='./icons/linkedin.jpg' alt='linkedin'></img>
                    <a href='https://linkedin.com/in/himanshu-kumar-498791147' target='_blank' rel="noopener noreferrer">https://linkedin.com/in/himanshu-kumar-498791147</a>
                </div>
                <div className='github'>
                    <img src='./icons/github.png' alt='github'></img>
                    <a href='https://github.com/Himanshu-1997' target='_blank' rel="noopener noreferrer">https://github.com/Himanshu-1997</a>
                </div>
                <div className='facebook'>
                    <img src='./icons/fb.jpg' alt='fb'></img>
                    <a href='https://www.facebook.com/himanshu.kumar.in' target='_blank' rel="noopener noreferrer">https://www.facebook.com/himanshu.kumar.in</a>
                </div>
                <div className='gmail'>
                    <img src='./icons/gmail.png' alt='gmail'></img>
                    <div>himanshu28051997@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;