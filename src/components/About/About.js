import React from 'react';
import classNames from '../../utils/classNames';

import './About.scss';

const About  = () =>{
    const navRef = React.createRef();
    const handleOnScroll = () => {
        let navbar = document.getElementById("navbar");
        if (window.pageYOffset > navRef.current.offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
    const handleClick = () =>{
        
    }
    window.onscroll = () =>{
        handleOnScroll();
    }
    return (
        <div className='aboutContainer'>
            <div id='navbar' className='navbar'>
                <div className='navBarContainer'>
                    <div className={classNames('home',{'active':true})} onClick={handleClick}>Home</div>
                    <div className='about'>About</div>
                    <div className='experience'>Experience</div>
                    <div className='education'>Education</div>
                    <a className='resume' href='https://drive.google.com/file/d/1RENgWHxglsc0Ewln-ELbdze6ijnhU1Fg/view' rel="noopener noreferrer" target='_blank'>Resume</a>
                    <div className='contact'>Contact</div>
                </div>
            </div>
            <div id='about' className='aboutbody' ref={navRef}>
                <h1 className='aboutTitle'>About</h1>
                <div className='skills'>
                    <div className='fast'>
                        <div>Fast</div>
                        <div>Fast load times and lag free interaction, my highest priority.</div>
                    </div>
                    <div className='responsive'>
                        <div>Responsive</div>
                        <div>My layouts will work on any device, big or small.</div>
                    </div>
                    <div className='intuitive'>
                        <div>Intuitive</div>
                        <div>Strong preference for easy to use, intuitive UX/UI.</div>
                    </div>
                    <div className='dynamic'>
                        <div>Dynamic</div>
                        <div>Websites don't have to be static, I love making pages come to life.</div>
                    </div>
                </div>
            </div>
            <div className='aboutskills'>
                <img className='profilePic' src='./icons/pp.jpg' alt='profilePic'></img>
                <ul className='skillset'>
                    <li>
                        <div>css</div>
                        <div style={{display:"flex",flexBasis:"45%"}}></div>
                        <div className='percentage'>60%</div>
                    </li>
                    <li>
                        <div>Html</div>
                        <div style={{display:"flex",flexBasis:"52.5%"}}></div>
                        <div className='percentage'>70%</div>
                    </li>
                    <li>
                        <div>React</div>
                        <div style={{display:"flex",flexBasis:"60%"}}></div>
                        <div className='percentage'>80%</div>
                    </li>
                    <li>
                        <div>Javascript</div>
                        <div style={{display:"flex",flexBasis:"60%"}}></div>
                        <div className='percentage'>80%</div>    
                    </li>
                    <li>
                        <div>Nodejs</div>
                        <div style={{display:"flex",flexBasis:"37.5%"}}></div>
                        <div className='percentage'>50%</div>    
                    </li>
                    <li>
                        <div>Data structures</div>
                        <div style={{display:"flex",flexBasis:"67.5%"}}></div>
                        <div className='percentage'>90%</div>
                    </li>
                    <li>
                        <div>Algorithms</div>
                        <div style={{display:"flex",flexBasis:"63.75%"}}></div>
                        <div className='percentage'>85%</div>
                    </li>
                    <li>
                        <div>C++</div>
                        <div style={{display:"flex",flexBasis:"67.5%"}}></div>
                        <div className='percentage'>90%</div>
                    </li>
                    <li>
                        <div>c</div>
                        <div style={{display:"flex",flexBasis:"67.5%"}}></div>
                        <div className='percentage'>90%</div>
                    </li>
                    <li>
                        <div>UI design</div>
                        <div style={{display:"flex",flexBasis:"52.5%"}}></div>
                        <div className='percentage' >70%</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default About;