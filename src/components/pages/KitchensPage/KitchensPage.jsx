import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/bright_kitch.png';
import i2 from '../../../img/humble_kitch.png';
import i3 from '../../../img/elegant_kitch.png';
import i4 from '../../../img/green_kitch.png';

import axios from 'axios';
import { API_URL } from '../../../constants';


const KitchensPage = () => {
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
			<main className="kicth">
				<div className="kicth__top">
					<div className="kicth__content">
						<h1 className="kicth__title">Кухни</h1>
						<p className="kicth__caption">
							Вот мои проекты кухонь. Вы можете узнать больше о каждом, нажав на название или изображение.
						</p>
					</div>
				</div>
				<div className="kicth__bottom">
					<Link className="kicth__wrapper" to="/brightkitchen">
						<img src={i1} alt="" className="kicth__image" />
						<p className="kicth__description">Светлая кухня</p>
					</Link>
					<Link className="kicth__wrapper" to="/humblekitchen">
						<p className="kicth__description">Скромная кухня</p>
						<img src={i2} alt="" className="kicth__image" />
					</Link>
					<Link className="kicth__wrapper" to="/elegntkitchen">
						<img src={i3} alt="" className="kicth__image" />
						<p className="kicth__description">Элегантная кухня</p>
					</Link>
					<Link className="kicth__wrapper" to="/greenkitchen">
						<p className="kicth__description">Зеленая кухня</p>
						<img src={i4} alt="" className="kicth__image" />
					</Link>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default KitchensPage;
