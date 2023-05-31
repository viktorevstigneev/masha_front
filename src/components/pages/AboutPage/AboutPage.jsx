import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Spinner from '../../common/Spinner';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/me_1.JPG';
import i2 from '../../../img/me_2.JPG';
import i3 from '../../../img/me_3.JPG';
import i4 from '../../../img/me_4.jpg';

import axios from 'axios';
import { API_URL } from '../../../constants';
import ClothesPage from '../ClothesPage/ClothesPage';

const AboutPage = ({user}) => {
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
					<h1 className="about__title">
						Янушко мария
						<br /> крутой Дизайнер интерьера,
						<br /> гениальный фотограф и просто хороший человек
					</h1>
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
					<div className="about__right">
						<img className="about__img f1" width="500" src={i1} alt="" />
						<div className="about__img_wrapper">
							<img className="about__img" src={i2} width="250" alt="" />
							<img className="about__img" src={i3} width="250" alt="" />
						</div>
						{/* <img className="about__img f4" src={i4} width="500" alt="" /> */}
					</div>
				</div>

				<h1 className="about__head">Мои работы</h1>

				<ClothesPage user={user}/>
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default AboutPage;
