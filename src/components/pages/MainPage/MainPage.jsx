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

const projData = [ i6,i4, i5];


const MainPage = () => {
	return (
		<>
			<main className="home">
				<div className="home__container">
					<div className="home__main">
						<p className="home__name">Yanushko Maria Home styling</p>
						<p className="home__name">Be bold. Style your life</p>
						<div class="arrow-down">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<h1 className="home__title">My projects</h1>
					<div className="home__projects">
						<ImageSlider data={projData} />
					</div>

					<div className="home__about">
						<div className="about__left">
							<h2 className="about__titlee">About Me</h2>

							<p className="about__description">
								Creating a design of various kinds is an art. Behind each of my work is a lot of time and effort that I
								spend to create.
							</p>
							<p className="about__description">
								Never force yourself to do something you don't want to. The main thing is to find yourself
							</p>
							<a className="about__button" href="/about">
								Learn more
							</a>
						</div>
						<img src={me} alt="" className="about__right" />
					</div>

					<div className="home__services">
						<h2 className="services__title">My services</h2>
						<div className="services__wrapper">
							<div className="services__content">
								<img src={serv1} alt="" className="services__image" />
								<p className="services__caption">Full Interior Styling</p>
							</div>
							<div className="services__content">
								<img src={serv2} alt="" className="services__image" />
								<p className="services__caption">Small Space Makeover</p>
							</div>
						</div>
					</div>

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
								Follow my updates
							</label>
							<input type="email" name="email" className="subscribe__input" placeholder="email" required />
							<button type="submit" className="subscribe__btn">
								Follow
							</button>
						</form>
					</div>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default MainPage;
