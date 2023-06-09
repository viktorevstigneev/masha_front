import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/cozy_apart.png';
import i2 from '../../../img/green_corner.png';
import i3 from '../../../img/modern_apart.png';
import i4 from '../../../img/bold_decitioin.png';

import axios from 'axios';
import { API_URL } from '../../../constants';


const ApartmentsPage = () => {
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
			<main className="apart">
				<div className="apart__top">
					<div className="apart__content">
						<h1 className="apart__title">Квартиры</h1>
						<p className="apart__caption">
							Вот мои проекты квартир. Вы можете узнать больше о каждом, нажав на название или изображение.
						</p>
					</div>
				</div>
				<div className="apart__bottom">
					<Link className="apart__wrapper" to="/cozyapart">
						<img src={i1} alt="" className="apart__image" />
						<p className="apart__description">Уютная квартира</p>
					</Link>
					<Link className="apart__wrapper" to="/cornerapart">
						<p className="apart__description">Зеленый угол</p>
						<img src={i2} alt="" className="apart__image" />
					</Link>
					<Link className="apart__wrapper" to="/moderapart">
						<img src={i3} alt="" className="apart__image" />
						<p className="apart__description">Современная квартира</p>
					</Link>
					<Link className="apart__wrapper" to="/boldapart">
						<p className="apart__description">Смелое решение</p>
						<img src={i4} alt="" className="apart__image" />
					</Link>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default ApartmentsPage;
