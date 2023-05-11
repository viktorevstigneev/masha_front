import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.css';

import { API_URL } from '../../../constants';

export const ROOM_TYPE = [
	{
		id: 'Кухня',
	},
	{
		id: 'Дом',
	},
	{
		id: 'Дача',
	},
	{
		id: 'Вилла',
	},
	{
		id: 'Ванная комната',
	},
	{
		id: 'Зал',
	},
	{
		id: 'Спальня',
	},
];

export const STYLE_TYPE = [
	{
		id: 'Хайтек',
	},
	{
		id: 'Скандинавский',
	},
	{
		id: 'Лофт',
	},
	{
		id: 'Модерн',
	},
	{
		id: 'Минимализм',
	},
];

const AdminPanel = () => {
	const [file, setFile] = useState('');
	const [folowerData, setFolloweData] = useState();


	useEffect(() => {
		const getFollowers = async () => {
			const responseData = await axios.get(`${API_URL}/banner`, { withCredentials: true }).then((response) => {
				setFolloweData(response.data);
			});
		};
		getFollowers();
	}, []);

	return (
		<section className="admin">
			<h1 className="admin__title">Добавление новой работы</h1>
			<form
				className="admin__person"
				encType="multipart/form-data"
				// method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();

					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/team`,
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
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/default.jpeg`}
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
					<label className="music__label" htmlFor="name">
						Введите название работы
					</label>
					<input className="admin__text-input" type="text" name="name" id="name" />

					<label className="music__label" htmlFor="decript">
						Введите описание работы
					</label>
					<textarea className="admin__textarea" type="text" name="description" id="descript" />

					<label className="music__label" htmlFor="type">
						Выберите тип помещения
					</label>
					<select className="admin__text-input" name="roomType" id="type">
						{ROOM_TYPE.map((color) => (
							<option className="option__item" data-value={color} key={color.id} style={{ background: color.hex }}>
								{color.id}
							</option>
						))}
					</select>

					<label className="music__label" htmlFor="styleType">
						Выберите тип стиля
					</label>
					<select className="admin__text-input" name="styleType" id="styleType">
						{STYLE_TYPE.map((color) => (
							<option className="option__item" data-value={color} key={color.id} style={{ background: color.hex }}>
								{color.id}
							</option>
						))}
					</select>

					<button className="admin__button" type="submit">
						добавить
					</button>
				</div>
			</form>

			<div className="followers">
				<h2 className="folowers__title">Мои подписчики</h2>
				{folowerData && folowerData.map((item) => <p className="followers__name">{item.email}</p>)}
			</div>
		</section>
	);
};

AdminPanel.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

AdminPanel.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default AdminPanel;
