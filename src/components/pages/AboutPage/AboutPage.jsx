import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Spinner from '../../common/Spinner';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/about2.png';

import axios from 'axios';
import { API_URL } from '../../../constants';

const AboutPage = () => {
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
			<main className="about">
				<div className="about__top">
					<h1 className="about__title">Янушко мария</h1>
				</div>
				<div className="about__bottom">
					<div className="about_left">
						<h2 className="about__name">Обо мне</h2>
						<p className="about__caption">
							Создание дизайна разного рода – это искусство. За каждой моей работой стоит много времени и сил, которые я
							тратить на создание. Никогда не заставляйте себя делать то, что вам не хочется. Главное найти себя.Меня
							зовут Мария и мне 18 лет. Я занимаюсь дизайном интерьеров в свое удовольствие и получаю много
							положительные эмоции от него. Стараюсь не стоять на месте и двигаться вперед, все больше и больше развивая
							свои навыки. В конце концов, даже маленькие шаги приведут вас к цели.
						</p>
					</div>
					<img className="about__right" src={i1} alt="" />
				</div>
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default AboutPage;
