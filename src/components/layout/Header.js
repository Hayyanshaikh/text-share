import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button.js';
import * as Icons from 'react-icons/tb';
import { navigationItems } from '../../api/api.js';

const Header = () => {
	// state for fixed header
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
	// on any button click function
	const handleButtonClick = () => {
    console.log(`Button clicked!`);
  };
	
	return (
		<>
			<header className={`${isScrolled ? 'fixed' : ''}`}>
				<div className="container">
					<div className="header">
						<div className="header_item">
							<NavLink to="/" className="logo">
								<img src={require("../../images/common/logo.png")} alt="Logo"/>
							</NavLink>
						</div>
						<div className="header_item">

							<ul className="navigation">
					      {navigationItems.map((item, index) => (
					        <li key={index}>
					          <NavLink className="link_item" to={`${item.link}`}>{item.title}</NavLink>
					        </li>
					      ))}
					    </ul>
						</div>
						<div className="header_item">
					    <Button text="Add File" icon={<Icons.TbPlus/>} onClick={handleButtonClick} />
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header