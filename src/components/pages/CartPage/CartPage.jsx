import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Footer from '../../common/Footer';

import './style.css';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';

import { FormattedMessage } from 'react-intl';
import Modal from '../../common/Modal';

const CartPage = () => {
	const [user, setUser] = useState();
	console.log('user: ', user);
	const [cartData, setCartData] = useState();
	const [sum, setSum] = useState();
	const [pay, setPay] = useState(false);

	const [cvc, setCvc] = useState('');
	const [expiry, setExpiry] = useState('');
	const [focus, setFocus] = useState('');
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	useEffect(() => {
		const getClothes = async () => {
			const responseData = await axios.get(`${API_URL}/team`, { withCredentials: true }).then((response) => {
				setCartData(response.data);
			});
		};
		getClothes();
	}, []);

	useEffect(() => {
		const userCart = cartData && cartData.filter((value) => user.userCart && user.userCart.includes(value._id));

		const summa =
			userCart &&
			userCart.reduce((sum, elem) => {
				return sum + +elem.price;
			}, 0);

		setSum(summa);
	}, [cartData]);

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setPay(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setPay(false);
		}
	}, []);

	const userCart = cartData && cartData.filter((value) => user?.userCart && user?.userCart.includes(value._id));
	console.log('userCart: ', userCart);

	return (
		<>
			<main className="cart">
				<div className="cart__container">
					<h2 className="cart__title">
						<FormattedMessage id="cart__title" /> {user?.username}
					</h2>
					<div className="cart__content">
						{userCart?.length ? (
							userCart.map((item) => (
								<div className="cart__item">
									<img className="cart__image" src={`${API_URL}/getImage/${item.avatar}`} alt="cart" />
									<p className="cart__price">
										<FormattedMessage id="clothes__price__title" />: {item.price}$
									</p>
									<button className="cart__delete">
										<FormattedMessage id="cart__delete" />
									</button>
								</div>
							))
						) : (
							<p className='empty'>
								<FormattedMessage id="empty" />
							</p>
						)}
					</div>
					<div className="cart__bottom">
						<p className="cart__summary">
							<FormattedMessage id="cart__sum" />: {sum}$
						</p>
						<button className="cart__button" onClick={() => setPay(true)}>
							<FormattedMessage id="cart__btn" />
						</button>
					</div>
				</div>
			</main>

			{pay && (
				<Modal
					title={<FormattedMessage id="pay__title" />}
					onCloseButtonClick={handleModalWindowCloseButtonClick}
					onOverlayClick={handleModalWindowOverlayClick}
				>
					<div className="pay__wrapper">
						<Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} />
						<form
							className="par__form"
							encType="multipart/form-data"
							// method="POST"
							onSubmit={async (evt) => {
								evt.preventDefault();

								const formData = new FormData(evt.target);

								// formData.append('userID', user._id);

								const responseData = await axios({
									method: 'PATCH',
									url: `${API_URL}/profileAddOrder?userId=${user._id}`,
									data: formData,
									withCredentials: true,
								});
								window.location.reload();
							}}
						>
							<input
								className="pay__credit"
								type="tel"
								name="number"
								placeholder="Card Number"
								maxLength={16}
								onChange={(e) => {
									const { name, value } = e.target;
									setNumber(value);
								}}
								onFocus={(e) => setFocus(e.target.name)}
							/>

							<input
								className="pay__credit"
								type="tel"
								name="name"
								placeholder="Card name"
								onChange={(e) => {
									const { name, value } = e.target;
									setName(value);
								}}
								onFocus={(e) => setFocus(e.target.name)}
							/>

							<div className="pay__wrapper-b">
								<input
									className="pay__credit-b"
									type="tel"
									name="expiry"
									placeholder="expiry"
									maxLength={4}
									onChange={(e) => {
										const { value } = e.target;
										setExpiry(value);
									}}
									onFocus={(e) => setFocus(e.target.name)}
								/>

								<input
									className="pay__credit-b"
									type="tel"
									name="cvc"
									placeholder="cvc"
									maxLength={3}
									onChange={(e) => {
										const { value } = e.target;
										setCvc(value);
									}}
									onFocus={(e) => setFocus(e.target.name)}
								/>
							</div>
							<button className="pay__button">
								<FormattedMessage id="pay__btn" />
							</button>
						</form>
					</div>
				</Modal>
			)}
			<Footer />
		</>
	);
};

export default CartPage;
