import React, { useCallback, useEffect, useState } from 'react';
import DoubleSlider from 'double-slider';

// import Footer from '../../common/Footer';

import { clothesType, sexType } from './data';
import './style.css';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import Modal from '../../common/Modal';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

const ClothesPage = () => {
	const [user, setUser] = useState();
	const [isFiltersModalOpen, setFilterModalOpen] = useState(false);
	const [sliderMin, setMin] = useState(0);
	const [sliderMax, setMax] = useState(100);
	const [activeCard, setActiveCard] = useState();
	const [showCard, setShowCard] = useState(false);
	const [cardData, setCardData] = useState();

	const [filteredCards, setFilteredCards] = useState();

	const [filter, setFilter] = useState({
		maxPrice: 100,
		minPrice: 0,
		sex: ['Female', 'Male'],
		type: ['Blouses', 'Shirts', 'Pants', 'Dresses', 'Skirts', 'Outerwear'],
	});

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
				setCardData(response.data);
				setFilteredCards(response.data);
			});
		};
		getClothes();
	}, []);

	useEffect(() => {
		const mySlider = new DoubleSlider(document.getElementById('my-slider'));

		mySlider.addEventListener('slider:change', () => {
			const { min, max } = mySlider.value;
			setMin(min || 0);
			setMax(max || 100);
			setFilter({
				...filter,
				minPrice: min,
				maxPrice: max,
			});
		});
		// return () => {
		// 	mySlider.removeEventListener('slider:change', handleChange);
		// };
	}, []);

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setFilterModalOpen(false);
		setShowCard(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setFilterModalOpen(false);
			setShowCard(false);
		}
	}, []);

	const filterArray = (arr) => {
		let newArr = arr && arr.filter((item) => item.price > filter.minPrice && item.price < filter.maxPrice);

		newArr = newArr.filter((item) => filter.type.includes(item.typeClothes));
		newArr = newArr.filter((item) => filter.sex.includes(item.sexThing));

		return newArr;
	};

	const handleApplyFilters = (evt) => {
		evt.preventDefault();

		setFilteredCards(filterArray(cardData));
	};

	return (
		<>
			<main className="clothes">
				<div className="clothes__container">
					<div className="Clothes__top">
						<p
							className="clothes__filter"
							onClick={() => {
								setFilterModalOpen(true);
							}}
						>
							<FormattedMessage id="filters__btn" />
						</p>
						<p className="clothes__title">
							<FormattedMessage id="clothes__title" />
						</p>
					</div>

					<div className="clothes__content">
						{filteredCards &&
							filteredCards.map((item) => (
								<div
									className="clothes__card"
									onClick={() => {
										setActiveCard(item);
										setShowCard(true);
									}}
								>
									<img className="clothes__img" src={`${API_URL}/getImage/${item.avatar}`} alt="" />
									<div className="clothes__bottom">
										<p className="clothes__price">
											<FormattedMessage id="clothes__price__title" />: {item.price}$
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</main>

			{/* <Footer /> */}
			<Modal
				style={{ with: !isFiltersModalOpen && '0', height: !isFiltersModalOpen && '0' }}
				title={<FormattedMessage id="filters__btn" />}
				onCloseButtonClick={handleModalWindowCloseButtonClick}
				onOverlayClick={handleModalWindowOverlayClick}
			>
				<form action="" onSubmit={handleApplyFilters}>
					<div className="filter__block">
						<h2 className="filter__title">
							<FormattedMessage id="filter__price" />
						</h2>
						<div id="my-slider" data-min="0" data-max="100" data-range="100"></div>
						<div className="filter__price">
							<div className="filter__cost">{sliderMin}$</div>
							<div className="filter__cost">{sliderMax}$</div>
						</div>
					</div>
					<div className="filter__block">
						<h2 className="filter__title">
							<FormattedMessage id="filter__type" />
						</h2>
						<div className="filter__wrapper">
							{clothesType.map(({ id, translate }) => (
								<div className="filter__item">
									<input
										className="filter__checkbox"
										onChange={(evt) => {
											const newArr = filter.type;

											if (evt.target.checked) {
												newArr.push(evt.target.name);
												let set = new Set(newArr);

												setFilter({
													...filter,
													type: Array.from(set),
												});
											} else {
												newArr.pop(evt.target.name);
												let set = new Set(newArr);

												setFilter({
													...filter,
													type: Array.from(set),
												});
											}
										}}
										type="checkbox"
										id={id}
										name={id}
									/>
									<label htmlFor={id}>{translate}</label>
								</div>
							))}
						</div>
					</div>

					<div className="filter__block">
						<h2 className="filter__title">
							<FormattedMessage id="filter__sex" />
						</h2>
						<div className="filter__wrapper">
							{sexType.map(({ id, translate }) => (
								<div className="filter__item">
									<input
										className="filter__checkbox"
										onChange={(evt) => {
											const newArr = filter.sex;

											if (evt.target.checked) {
												newArr.push(evt.target.name);
												let set = new Set(newArr);

												setFilter({
													...filter,
													sex: Array.from(set),
												});
											} else {
												newArr.pop(evt.target.name);
												let set = new Set(newArr);

												setFilter({
													...filter,
													sex: Array.from(set),
												});
											}
										}}
										type="checkbox"
										id={id}
										name={id}
									/>
									<label htmlFor={id}>{translate}</label>
								</div>
							))}
						</div>
					</div>

					<button className="filter__apply">
						<FormattedMessage id="filter__apply" />
					</button>
				</form>
			</Modal>

			{showCard && (
				<Modal onCloseButtonClick={handleModalWindowCloseButtonClick} onOverlayClick={handleModalWindowOverlayClick}>
					<div className="open__block">
						<div className="open__container">
							<img className="open__img" src={`${API_URL}/getImage/${activeCard.avatar}`} alt="" />
							<p className="open__description"> {activeCard.description}</p>
						</div>
						<div className="open__bottom">
							<p className="open__price">
								<FormattedMessage id="clothes__price__title" />: {activeCard.price}$
							</p>
							{user && user ? (
								<p
									className="open__cart"
									onClick={async () => {
										await axios.patch(`${API_URL}/profile`, { productID: activeCard._id, userID: user._id });
										window.location.reload();
									}}
								>
									&#128722;
								</p>
							) : (
								<p className="open__cart-no">
									<FormattedMessage id="cart__bin" />
								</p>
							)}
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ClothesPage;
