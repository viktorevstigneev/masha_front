import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/houses_p.png';
import i2 from '../../../img/apartments_p.png';
import i3 from '../../../img/kitchens_p.png';
import i4 from '../../../img/bathrooms_p.png';

import axios from 'axios';
import { API_URL } from '../../../constants';


const ProjectPage = () => {
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
			<main className="proj">
				<div className="proj__top">
					<div className="proj__content">
						<h1 className="proj__title">Мои проекты</h1>
						<p className="proj__caption">
							Вы можете ознакомиться с моими выполненными проектами и узнать, подходит ли вам такой дизайнер, как я.
						</p>
					</div>
				</div>
				<div className="proj__bottom">
					<Link className="proj__wrapper" to="/houses">
						<img src={i1} alt="" className="proj__image" />
						<p className="proj__description">Дома</p>
					</Link>
					<Link className="proj__wrapper" to="/apartments">
						<p className="proj__description">Квартиры</p>
						<img src={i2} alt="" className="proj__image" />
					</Link>
					<Link className="proj__wrapper" to="/kitchens">
						<img src={i3} alt="" className="proj__image" />
						<p className="proj__description">Кухни</p>
					</Link>
					<Link className="proj__wrapper" to="/bathrooms">
						<p className="proj__description">Ванные комнаты</p>
						<img src={i4} alt="" className="proj__image" />
					</Link>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default ProjectPage;
