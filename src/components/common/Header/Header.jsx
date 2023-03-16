import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './style.css';

import { API_URL } from '../../../constants';

const Header = () => {
	// const [user, setUser] = useState();
	// console.log('user: ', user);

	// useEffect(() => {
	// 	const getCurrentUser = async () => {
	// 		const responseData = await axios
	// 			.get(`${API_URL}/profile`, { withCredentials: true })
	// 			.then((response) => setUser(response.data));
	// 	};
	// 	getCurrentUser();
	// }, []);

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<p className="header__logo--top">Yanushko Maria</p>
					<p className="header__logo--bottom">Home styling design</p>
				</div>
				<nav className="header__nav">
					<Link className="header__link" to="/">
						Home
					</Link>
					<Link className="header__link" to="/projects">
						My project
					</Link>
					<Link className="header__link" to="">
						About
					</Link>
					<Link className="header__link" to="">
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
