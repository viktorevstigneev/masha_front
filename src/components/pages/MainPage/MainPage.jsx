import React, { useEffect, useState } from 'react';

import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/1.png';
import i2 from '../../../img/2.png';
import i3 from '../../../img/3.png';
import i4 from '../../../img/4.png';
import i5 from '../../../img/5.png';
import i6 from '../../../img/6.png';
import me from '../../../img/me_about.png';
import serv1 from '../../../img/serv1.png';
import serv2 from '../../../img/serv2.png';
import axios from 'axios';
import { API_URL } from '../../../constants';

const MainPage = () => {
	const [bannerData, setBannerData] = useState();

	useEffect(() => {
		const getBenners = async () => {
			const responseData = await axios
				.get(`${API_URL}/banner`, { withCredentials: true })
				.then((response) => setBannerData(response.data));
		};
		getBenners();
	}, []);
	return (
		<>
			<main className="home">
				<div className="home__container">
					<div className="home__main">
						<p className="home__name">Yanushko Maria Home styling</p>
						<p className="home__name">Be bold. Style your life</p>
					</div>

					<h1 className="home__title">My projects</h1>
					<div className="home__projects">
						<div className="projects__left">
							<img src={i1} alt="" className="left__image" />
							<img src={i2} alt="" className="left__image" />
							<img src={i3} alt="" className="left__image" />
							<img src={i4} alt="" className="left__image" />
						</div>

						<img src={i5} alt="" className="middle__image" />

						<img src={i6} alt="" className="right__image" />
					</div>

					<div className="home__about">
						<div className="about__left">
							<h2 className="about__title">About Me</h2>

							<p className="about__description">
								Creating a design of various kinds is an art. Behind each of my work is a lot of time and effort that I
								spend to create.
							</p>
							<p className="about__description">
								Never force yourself to do something you don't want to. The main thing is to find yourself
							</p>
							<a className="about__button" href="#f">
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
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default MainPage;