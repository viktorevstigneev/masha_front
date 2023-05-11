import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Spinner from '../../common/Spinner';

import './style.css';

// import { sliderData } from './data';
import i1 from '../../../img/about2.png';

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
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Недооценка освещения. В большинстве случаев, все любители, создающие интерьер помещения самостоятельно
						неправильно организуют освещение. Необходимо помнить, что неграмотно установленные осветительные приборы
						могут испортить самый удачный интерьер. Приобретая люстру нужно ориентироваться не на собственные
						предпочтения, а на будущий стиль помещения, его цветовую гамму.
					</p>
				</div>
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Расстановка мебельных элементов. Главное правило, не нужно распределять мебель вдоль стен, стараясь оставить
						максимум свободного пространства. В этом случае, как раз, можно пофантазировать, провести несколько
						экспериментов. Удобство и уют, прежде всего.
					</p>
				</div>
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Сбор разных по стилю предметов. Пространство жилой площади, должно быть, в первую очередь, функциональным.
						Мебель, текстиль, аксессуары – все приобретает в одном стиле.
					</p>
				</div>
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Большое количество декоративных элементов. Перебор на 1-2 статуэтки уже могут испортить весь общий вид,
						создать видимость захламленности. В большинстве стилей достаточно 3-4 стильных элементов декора, чтобы
						придать помещению красоту и необычность.
					</p>
				</div>

				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Соединение старого и нового. Довольно часто, сделав новый ремонт, жалко выбрасывать милые сердцу безделушки,
						вазы и хозяин пытается их пристроить среди нового. Это ошибка. Морально устаревшие предметы мебели,
						аксессуары вряд ли впишутся в новый дизайн.
					</p>
				</div>
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Распределение картин, ковров. Безусловно, любой стиль интерьера украсит картина, главное, правильно ее
						расположить. Не стоит размещать ее высоко, под потолок, будет сложно рассмотреть композицию. Большое
						количество также может негативно сказаться на общем виде. Ковры и пледы – очень важная составляющая
						интерьера. Слишком яркие краски визуально делают комнату меньше, лучше остановиться на приглушенных,
						нейтральных оттенках. Не стоит использовать плед на диван или аккуратно убирать его на краешек, это мода
						давно устарела. Сейчас модно располагать текстиль ассиметрично-небрежно.
					</p>
				</div>
				<div className="advise__bottom">
					<h2 className="advise__name">&#x39E;</h2>
					<p className="advise__caption">
						Оформление окон. Шторы также должны подбираться под определенный стиль и цветовую гамму.
					</p>
				</div>
				<iframe
					className="advise__video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/5oMPl14y1O4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</main>
		</>
	);
};

export default AdvisePage;
