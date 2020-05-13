import React , {useState} from 'react';
import classNames from '../../utils/classNames';

import './About.scss';

const About  = () =>{
    const navRef = React.createRef();
    const [showMenu,setShowMenu] = useState(false);
    const handleOnScroll = () => {
        let navbar = document.getElementById("navbar");
        let navbar1 = document.getElementById("navbar1");
        if (window.pageYOffset > navRef.current.offsetTop) {
            navbar.classList.add("sticky");
            navbar1.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            navbar1.classList.remove("sticky");
        }
    }
    const handleClick = (e) =>{
        let show = e.target.innerText.toLowerCase();
        document.getElementById(show).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        // e.target.classList.add("active");
        // console.log(e.target);
        setShowMenu(!showMenu);
    }
    window.onscroll = () =>{
        handleOnScroll();
    }
    const handleShowMenu = () =>{
        setShowMenu(!showMenu);
    }
    return (
        <div id='about' className='aboutContainer'>
            <div id='navbar' className='navbar'>
                <div className='navBarContainer' ref={navRef}>
                    <div name='home' className={classNames('home',{'active':true})} onClick={handleClick}>Home</div>
                    <div name='about' className='about' onClick={handleClick}>About</div>
                    <div name='experience' className='experience' onClick={handleClick}>Experience</div>
                    <div name='education' className='education' onClick={handleClick}>Education</div>
                    <a className='resume' href='https://drive.google.com/file/d/1RENgWHxglsc0Ewln-ELbdze6ijnhU1Fg/view' rel="noopener noreferrer" target='_blank'>Resume</a>
                    <div name='contact' className='contact' onClick={handleClick}>Contact</div>
                </div>
            </div>
            <div id='navbar1' className='collNavbar'>
                <img src={process.env.PUBLIC_URL + '/icons/hamburger.png'} alt='hamburger' onClick={handleShowMenu}></img>
                {showMenu && ( 
                    <div className='navBarContainer' ref={navRef}>
                            <div name='home' className={classNames('home',{'active':true})} onClick={handleClick}>Home</div>
                            <div name='about' className='about' onClick={handleClick}>About</div>
                            <div name='experience' className='experience' onClick={handleClick}>Experience</div>
                            <div name='education' className='education' onClick={handleClick}>Education</div>
                            <a className='resume' href='https://drive.google.com/file/d/1RENgWHxglsc0Ewln-ELbdze6ijnhU1Fg/view' rel="noopener noreferrer" target='_blank'>Resume</a>
                            <div name='contact' className='contact' onClick={handleClick}>Contact</div>
                    </div>
                )}
            </div>
            <div  className='aboutbody'>
                <h1 className='aboutTitle' >About</h1>
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
                <img className='profilePic' src={process.env.PUBLIC_URL + '/icons/pp.jpg'} alt='profilePic'></img>
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