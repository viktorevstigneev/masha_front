import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Spinner from '../../common/Spinner';

import './style.css';

import { adviseData, adviseData2, adviseData3, adviseData4, adviseData5 } from './data';
import i1 from '../../../img/about2.png';
import HiddenContent from '../../common/HideContent/HideContent';

import axios from 'axios';
import { API_URL } from '../../../constants';

const AdvisePage = () => {
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
			<main className="advise">
				<div className="advise__top">
					<h1 className="advise__title">Советы по составлению интерьера</h1>
				</div>

				<div className="advise__container">
					<h2 className="advise__head">СОВЕТЫ ПО ОСВЕЩЕНИЮ</h2>
					<p className="advise__head_desc">
						Комфортное освещение в интерьере создают правильно выбранные и размещенные в нужном месте светильники.
						Поэтому, чтобы организовать освещение в доме, в котором будет комфортно жить, нужно заранее продумывать где
						и какой понадобится свет, и каковы будут его задачи. Свет формирует форму и восприятие объектов, увеличивает
						или уменьшает их, делает предметы плоскими или объемными. Важно выбрать подходящую мощность, направление
						светового потока, цветовую температуру, место размещения светильника в помещении.
					</p>
					{adviseData.map((item, index) => (
						<HiddenContent tabData={item} inx={index + 1} key={index} />
					))}
				</div>

				<iframe
					style={{margin: "0 auto", display: "block"}}
					width="860"
					height="515"
					src="https://www.youtube.com/embed/io9DKngBvfo"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>

				<div className="advise__container">
					<h2 className="advise__head">СОВЕТЫ ПО ОФОРМЛЕНИЮ ПОМЕЩЕНИЯ</h2>
					<p className="advise__head_desc">
						Каждый домовладелец стремится добиться того, чтобы жилое пространство было не только максимально
						функциональным, но и стильным. Зачастую это желание можно выразить словами — создать интерьер «с обложки».
						Для выполнения задуманного есть много универсальных приёмов, которые каждый может применить согласно своим
						возможностям.
					</p>
					{adviseData2.map((item, index) => (
						<HiddenContent tabData={item} inx={index + 1} key={index} />
					))}
				</div>

				<div className="advise__container">
					<h2 className="advise__head">СОВЕТЫ ПО ДЕКОРУ</h2>

					{adviseData3.map((item, index) => (
						<HiddenContent tabData={item} inx={index + 1} key={index} />
					))}
				</div>

				<div className="advise__container">
					<h2 className="advise__head">СОВЕТЫ ПО ОТДЕЛКЕ</h2>

					{adviseData4.map((item, index) => (
						<HiddenContent tabData={item} inx={index + 1} key={index} />
					))}
				</div>

				<div className="advise__container">
					<h2 className="advise__head">СОВЕТЫ ПО ВЫБОРУ СТИЛЯ</h2>

					{adviseData5.map((item, index) => (
						<HiddenContent tabData={item} inx={index + 1} key={index} />
					))}
				</div>
			</main>
		</>
	);
};

export default AdvisePage;
