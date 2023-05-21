import React, { useEffect, useState } from 'react';

import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i4 from '../../../img/serv2.png';
import i5 from '../../../img/serv1.png';
import i6 from '../../../img/6.png';
import me from '../../../img/me_about.png';
import serv1 from '../../../img/serv1.png';
import serv2 from '../../../img/serv2.png';
import { API_URL } from '../../../constants';
import axios from 'axios';
import ImageSlider from '../../common/Slider/Slider';

const projData = [i6, i4, i5];

const MainPage = ({ user }) => {
	return (
		<>
			<main className="home">
				<div className="home__container">
					<div className="home__main">
						{/* <p className="home__name">Янушко Мария интерьерный дизайнер</p> */}
						<div className="home__cnt">
							<p className="home__name">
								Мои дизайны это место, где творчество не знает границ и встречаются воображение и искусство
							</p>
						</div>
						{/* <div class="arrow-down">
							<span></span>
							<span></span>
							<span></span>
						</div> */}
					</div>

					<h1 className="home__title">Мои проекты</h1>
					<div className="home__projects">
						<p className="home__pj">
							Если вам хотелось бы понять, подхожу ли я вам как дизайнер - вы можете изучить мои проекты
							<a className="pj__button" href="/works">
								 Больше
							</a>
						</p>
						<ImageSlider data={projData} />
					</div>

					<div className="home__about">
						<div className="about__left">
							<h2 className="about__titlee">Обо мне</h2>

							<p className="about__description">
								Создание дизайна разного рода – это искусство. За каждой моей работой стоит много времени и сил, которые
								я тратить на создание.
							</p>
							<p className="about__description">
								Никогда не заставляйте себя делать то, чего вы не хотите. Главное найти себя
							</p>
							<a className="about__button" href="/about">
								Узнать больше
							</a>
						</div>
						<img src={me} alt="" className="about__right" />
					</div>

					<div className="home__services">
						<h2 className="services__title">Мои услуги</h2>
						<div className="services__wrapper">
							<div className="services__content">
								<img src={serv1} alt="" className="services__image" />
								<p className="services__caption">Полная внутренняя отделка</p>
							</div>
							<div className="services__content">
								<img src={serv2} alt="" className="services__image" />
								<p className="services__caption">Преображение маленького пространства</p>
							</div>
						</div>
					</div>

					{user && user ? (
						<div className="home__subscribe">
							<form
								action=""
								className="subscribe__form"
								encType="multipart/form-data"
								// method="POST"
								onSubmit={async (evt) => {
									evt.preventDefault();

									const formData = new FormData(evt.target);

									const responseData = await axios({
										method: 'POST',
										url: `${API_URL}/banner`,
										data: formData,
										withCredentials: true,
									});
									window.location.reload();
								}}
							>
								<label htmlFor="" className="subscribe__label">
									Следите за моими обновлениями
								</label>
								<input type="email" name="email" className="subscribe__input" placeholder="email" required />
								<button type="submit" className="subscribe__btn">
									подписаться
								</button>
							</form>
						</div>
					) : null}
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default MainPage;
