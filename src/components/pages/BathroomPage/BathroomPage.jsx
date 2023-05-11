import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/vintage_bath.png';
import i2 from '../../../img/modern_bath.png';
import i3 from '../../../img/grunch_bath.png';
import i4 from '../../../img/green_bath.png';

import axios from 'axios';
import { API_URL } from '../../../constants';


const BathroomPage = () => {
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
			<main className="bath">
				<div className="bath__top">
					<div className="bath__content">
						<h1 className="bath__title">Ванные комнаты</h1>
						<p className="bath__caption">
							Вот мои проекты ванных комнат. Вы можете узнать больше о каждом, нажав на название или изображение.
						</p>
					</div>
				</div>
				<div className="bath__bottom">
					<Link className="bath__wrapper" to="/vintagebath">
						<img src={i1} alt="" className="bath__image" />
						<p className="bath__description">Винтажная ванная комната</p>
					</Link>
					<Link className="bath__wrapper" to="/modernbath">
						<p className="bath__description">Современная ванная комната</p>
						<img src={i2} alt="" className="bath__image" />
					</Link>
					<Link className="bath__wrapper" to="/grungebath">
						<img src={i3} alt="" className="bath__image" />
						<p className="bath__description">Ванная комната в стиле гранж</p>
					</Link>
					<Link className="bath__wrapper" to="/brightbath">
						<p className="bath__description">Ярко-зеленая ванная комната</p>
						<img src={i4} alt="" className="bath__image" />
					</Link>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default BathroomPage;
