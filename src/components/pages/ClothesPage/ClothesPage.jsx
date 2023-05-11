import React, { useCallback, useEffect, useState } from 'react';
import DoubleSlider from 'double-slider';

// import Footer from '../../common/Footer';

// import { clothesType, sexType } from './data';
import './style.css';
import { API_URL, POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import Modal from '../../common/Modal';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { ROOM_TYPE, STYLE_TYPE } from '../AdminPanel/AdminPanel';

const ClothesPage = ({ user }) => {
	// const [user, setUser] = useState();

	const [activeCard, setActiveCard] = useState();
	const [showCard, setShowCard] = useState(false);
	const [cardData, setCardData] = useState();
	const [filteredData, setFilteredData] = useState();
	const [file, setFile] = useState('');

	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [roomType, setRoomType] = useState('');
	const [styleType, setStyleType] = useState('');


	// useEffect(() => {
	// 	const getCurrentUser = async () => {
	// 		const responseData = await axios
	// 			.get(`${API_URL}/profile`, { withCredentials: true })
	// 			.then((response) => setUser(response.data));
	// 	};
	// 	getCurrentUser();
	// }, []);

	useEffect(() => {
		const getClothes = async () => {
			const responseData = await axios.get(`${API_URL}/team`, { withCredentials: true }).then((response) => {
				setCardData(response.data);
				setFilteredData(response.data);
			});
		};
		getClothes();
	}, []);

	useEffect(() => {
		setName(activeCard?.name);
		setDesc(activeCard?.description);
		setRoomType(activeCard?.roomType);
		setStyleType(activeCard?.styleType);
	}, [activeCard]);

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setShowCard(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setShowCard(false);
		}
	}, []);

	return (
		<>
			<main className="clothes">
				<div className="clothes__container">
					<div className="clothes__filter">
						Фильтровать по типу стиля
						<select
							className="admin__text-input"
							name="styleType"
							id="typeStyle"
							onChange={(evt) => {
								const ft = cardData.filter((item) => item.styleType == evt.target.value);
								setFilteredData(ft);
							}}
						>
							{STYLE_TYPE.map((color) => (
								<option className="option__item" data-value={color} key={color.id} style={{ background: color.hex }}>
									{color.id}
								</option>
							))}
						</select>
						Фильтровать по типу помещения
						<select
							className="admin__text-input"
							name="styleType"
							id="typeStyle"
							onChange={(evt) => {
								const ft = cardData.filter((item) => item.roomType == evt.target.value);
								setFilteredData(ft);
							}}
						>
							{ROOM_TYPE.map((color) => (
								<option className="option__item" data-value={color} key={color.id} style={{ background: color.hex }}>
									{color.id}
								</option>
							))}
						</select>
					</div>
					<div className="clothes__content">
						{filteredData &&
							filteredData.map((item) => (
								<div
									className="clothes__card"
									onClick={() => {
										setActiveCard(item);
										setShowCard(true);
									}}
								>
									{user && user.isAdmin ? (
										<i
											className="delete__design"
											onClick={(evt) => {
												evt.stopPropagation();
												axios.delete(`${API_URL}/team/${item._id}`);
												window.location.reload();
											}}
										>
											&times;
										</i>
									) : null}
									<img className="clothes__img" src={`${API_URL}/getImage/${item.avatar}`} alt="" />
									{/* <div className="clothes__bottom">
										<p className="clothes__price">{item.price}</p>
									</div> */}
								</div>
							))}
					</div>
				</div>
			</main>

			{/* <Footer /> */}

			{showCard && !user?.isAdmin && (
				<Modal onCloseButtonClick={handleModalWindowCloseButtonClick} onOverlayClick={handleModalWindowOverlayClick}>
					<div className="open__block">
						<div className="open__container">
							<img className="open__img" src={`${API_URL}/getImage/${activeCard.avatar}`} alt="" />
							<p className="open__description"> {activeCard.name}</p>
							<p className="open__description"> {activeCard.description}</p>
							<p className="open__description">Тип помещения {activeCard.roomType}</p>
							<p className="open__description">Тип стиля {activeCard.styleType}</p>
						</div>
					</div>
				</Modal>
			)}

			{showCard && user?.isAdmin && (
				<Modal onCloseButtonClick={handleModalWindowCloseButtonClick} onOverlayClick={handleModalWindowOverlayClick}>
					<div className="open__block">
						<form
							className="admin__person"
							encType="multipart/form-data"
							// method="POST"
							onSubmit={async (evt) => {
								evt.preventDefault();

								const formData = new FormData(evt.target);

								const responseData = await axios({
									method: 'PATCH',
									url: `${API_URL}/team/${activeCard?._id}`,
									data: formData,
									withCredentials: true,
								});
								window.location.reload();
							}}
						>
							<div className="admin__block">
								<label className="admin__label" htmlFor="avatar">
									<img
										className="admin__avatar"
										src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/${activeCard.avatar}`}
										alt="menu_picture"
									/>
									<p className="admin__icon">🗁</p>
								</label>
								<input
									className="admin__input"
									id="avatar"
									name="avatar"
									type="file"
									onChange={(evt) => setFile(evt.target.files[0])}
								/>
							</div>

							<div className="admin__right">
								<label className="music__label" style={{ color: 'black' }} htmlFor="name">
									Введите название работы
								</label>
								<input
									className="admin__text-input"
									value={name}
									onChange={(evt) => setName(evt.target.value)}
									type="text"
									name="name"
									id="name"
								/>

								<label className="music__label" style={{ color: 'black' }} htmlFor="decript">
									Введите описание работы
								</label>
								<textarea
									className="admin__textarea"
									value={desc}
									onChange={(evt) => setDesc(evt.target.value)}
									type="text"
									name="description"
									id="descript"
								/>

								<label className="music__label" style={{ color: 'black' }} htmlFor="type">
									Выберите тип помещения
								</label>
								<select
									className="admin__text-input"
									value={roomType}
									onChange={(evt) => setRoomType(evt.target.value)}
									name="roomType"
									id="type"
								>
									{ROOM_TYPE.map((color) => (
										<option
											className="option__item"
											data-value={color}
											key={color.id}
											style={{ background: color.hex }}
										>
											{color.id}
										</option>
									))}
								</select>

								<label className="music__label" style={{ color: 'black' }} htmlFor="styleType">
									Выберите тип стиля
								</label>
								<select
									className="admin__text-input"
									value={styleType}
									onChange={(evt) => setStyleType(evt.target.value)}
									name="styleType"
									id="styleType"
								>
									{STYLE_TYPE.map((color) => (
										<option
											className="option__item"
											data-value={color}
											key={color.id}
											style={{ background: color.hex }}
										>
											{color.id}
										</option>
									))}
								</select>

								<button className="admin__button" type="submit">
									изменить
								</button>
							</div>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ClothesPage;
