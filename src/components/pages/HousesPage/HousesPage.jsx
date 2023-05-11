import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/rural_viva.png';
import i2 from '../../../img/barn_house.png';
import i3 from '../../../img/beach_house.png';
import i4 from '../../../img/green_house.png';

import axios from 'axios';
import { API_URL } from '../../../constants';


const HousesPage = () => {
	// const [bannerData, setBannerData] = useState();

	// useEffect(() => {
	// 	const getBenners = async () => {
	// 		const responseData = await axios
	// 			.get(`${API_URL}/banner`, { withCredentials: true })
	// 			.then((response) => setBannerData(response.data));
	// 	};
	// 	getBenners();
	// }, []);
	return (
		<>
			<main className="house">
				<div className="house__top">
					<div className="house__content">
						<h1 className="house__title">Дома</h1>
						<p className="house__caption">
							Вот мой проект дома. Вы можете узнать больше о каждом, нажав на название или изображение.
						</p>
					</div>
				</div>
				<div className="house__bottom">
					<Link className="house__wrapper" to="/ruralvilla">
						<img src={i1} alt="" className="house__image" />
						<p className="house__description">Сельская вилла </p>
					</Link>
					<Link className="house__wrapper" to="/barnhouse">
						<p className="house__description">Амбарный дом</p>
						<img src={i2} alt="" className="house__image" />
					</Link>
					<Link className="house__wrapper" to="/beachhouse">
						<img src={i3} alt="" className="house__image" />
						<p className="house__description">Домик на пляже</p>
					</Link>
					<Link className="house__wrapper" to="/greenhouse">
						<p className="house__description">Зеленый дом</p>
						<img src={i4} alt="" className="house__image" />
					</Link>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default HousesPage;
