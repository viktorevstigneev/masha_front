import React, { Fragment, useCallback, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { signIn } from './utils';
import { API_URL } from '../../../constants';
import SignInImg from '../../../img/ap1.png';
import './style.css';

const SignIn = ({ user, setUser }) => {
	// const [user, setUser] = useState({});
	console.log('user: ', user);

	const handleFormSubmit = useCallback((evt) => {
		evt.preventDefault();
		const formData = Object.fromEntries(new FormData(evt.target));

		signIn({ formData, setUser });
		// window.location.reload();
	});

	return user?._id ? (
		<Navigate push to={`/`} />
	) : (
		<div className="auth">
			<h2 className="auth__title">Sign In</h2>
			<div className="auth__block">
				<form id="signin" className="auth__form" action={API_URL} method="POST" onSubmit={handleFormSubmit}>
					<label className="auth__label" htmlFor="username">
						Login
					</label>
					<input
						className="auth__input"
						name="username"
						id="username"
						placeholder="Login"
						type="text"
						required={true}
					/>
					<label className="auth__label" htmlFor="password">
						Password
					</label>
					<input
						className="auth__input"
						name="password"
						id="password"
						placeholder="Password"
						type="password"
						required={true}
					/>
					<button className="auth__button" type="submit">
						Log in
					</button>

					{/* <Link className="auth__link" to="/signup">
						No profile? Sign up
					</Link> */}
				</form>
				{/* <img className="auth__img" src={SignInImg} alt="auth" /> */}
			</div>
		</div>
	);
};

export default SignIn;
