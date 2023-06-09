import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './style.css';

import { API_URL } from '../../../constants';
import m1 from '../../../img/logo.png';

const Header = ({ user }) => {
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
				<div className="header__wrapper">
					<img src={m1} alt="logo" />
					<div className="header__logo">
						<p className="header__logo--top">Янушко Мария</p>
						<p className="header__logo--bottom">Дизайн домашнего стиля</p>
					</div>
				</div>
				<nav className="header__nav">
					<Link className="header__link" to="/">
						Главная
					</Link>
					{/* <Link className="header__link" to="/projects">
						Мои проекты
					</Link> */}
					<Link className="header__link" to="/about">
						Обо мне
					</Link>

					<Link className="header__link" to="/servise">
						Дизайнерские услуги
					</Link>

					{/* <Link className="header__link" to="/works">
						Все мои работы
					</Link> */}
					<Link className="header__link" to="/advise">
						Советы
					</Link>
					{user && user.isAdmin ? (
						<Link className="header__link" to="/admin">
							Администратор
						</Link>
					) : null}

					{user && user ? (
						<>
							<Link className="header__link" to="/contact">
								Связаться
							</Link>
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
								Выйти
							</Link>
						</>
					) : (
						<Link className="header__link" to="/signin">
							Войти
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
