import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

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
					<h1 className="about__title">Yanushko Maria</h1>
				</div>
				<div className="about__bottom">
					<div className="about_left">
						<h2 className="about__name">About Me</h2>
						<p className="about__caption">
							Creating a design of various kinds is an art. Behind each of my work is a lot of time and effort that I
							spend to create.Never force yourself to do something you don't want to. The main thing is to find
							yourself.My name is Maria and I am 18 years old. I do interior design for my own pleasure and get a lot of
							positive emotions from it. I try not to stand still and move forward, developing my skills more and more.
							In the end, even small steps lead you to your destination.
						</p>
					</div>
					<img className="about__right" src={i1} alt="" />
				</div>
			</main>
			<div className="spinner">
				<div className="sp1"></div>
				<div className="sp2"></div>
				<div className="sp3"></div>
				<div className="sp4"></div>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default AboutPage;
