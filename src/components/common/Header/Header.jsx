import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './style.css';

import { API_URL } from '../../../constants';

const Header = ({user}) => {
	// const [user, setUser] = useState(userC);
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
					<Link className="header__link" to="/about">
						About
					</Link>
					<Link className="header__link" to="/contact">
						Contact
					</Link>
					<Link className="header__link" to="/works">
						All works
					</Link>
					{user && user.isAdmin ? (
						<Link className="header__link" to="/admin">
							Admin
						</Link>
					) : null}
					{user && user ? (
						<Link
							className="header__link"
							to="/"
							onClick={async (evt) => {
								const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
								if (response.status == 200) {
									window.location.reload();
								}
							}}
						>
							Log out
						</Link>
					) : (
						<Link className="header__link" to="/signin">
							Sign in
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
