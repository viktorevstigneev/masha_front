import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/ki5.png';
import i2 from '../../../img/ki6.png';


import axios from 'axios';
import { API_URL } from '../../../constants';


const GreenHousePage = () => {
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
						<h1 className="house__title">Элегантная кухня</h1>
					</div>
				</div>
				<div className="house__bottom">
					<div className="house__bottom-wrapper">
						<p className="house__bottom-caption">Современная кухня с изюминкой</p>
						<img src={i1} alt="" className="house__bottom-image" />
					</div>
				</div>
				<img src={i2} alt="" className="house__footer" />
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default GreenHousePage;
