import React, { useCallback, useEffect, useState } from 'react';
import DoubleSlider from 'double-slider';

// import Footer from '../../common/Footer';

// import { clothesType, sexType } from './data';
import './style.css';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import Modal from '../../common/Modal';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

const ClothesPage = () => {
	const [user, setUser] = useState();

	const [activeCard, setActiveCard] = useState();
	const [showCard, setShowCard] = useState(false);
	const [cardData, setCardData] = useState();

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
			});
		};
		getClothes();
	}, []);

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setShowCard(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setShowCard(false);
		}
	}, []);

	return (
		<>
			<main className="clothes">
				<div className="clothes__container">
					<div className="clothes__content">
						{cardData &&
							cardData.map((item) => (
								<div
									className="clothes__card"
									onClick={() => {
										setActiveCard(item);
										setShowCard(true);
									}}
								>
									<img className="clothes__img" src={`${API_URL}/getImage/${item.avatar}`} alt="" />
									{/* <div className="clothes__bottom">
										<p className="clothes__price">{item.price}</p>
									</div> */}
								</div>
							))}
					</div>
				</div>
			</main>

			{/* <Footer /> */}

			{showCard && (
				<Modal onCloseButtonClick={handleModalWindowCloseButtonClick} onOverlayClick={handleModalWindowOverlayClick}>
					<div className="open__block">
						<div className="open__container">
							<img className="open__img" src={`${API_URL}/getImage/${activeCard.avatar}`} alt="" />
							<p className="open__description"> {activeCard.description}</p>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ClothesPage;
