import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import i1 from '../../../img/humble_kitch.png'
import './style.css';

import { API_URL } from '../../../constants';

const Music = ({ loadTeamData, team, match }) => (
	<div className="contact">
		<h1 className="music__title">Связаться со мной</h1>
		<div className="music_container">
			<form
				className="music__form"
				// method="POST"
				encType="multipart/form-data"
				onSubmit={async (evt) => {
					evt.preventDefault();

					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/music`,
						data: formData,
						withCredentials: true,
					});

					if (responseData.status == 200) {
						window.location.reload();
					}
				}}
			>
				<label className="music__label" htmlFor="name" required="true">
					ФИО
				</label>
				<input className="music__input" id="name" type="text" name="name" required="true" />
				<label className="music__label" htmlFor="name">
					Эмаил
				</label>
				<input className="music__input" type="email" name="email" required="true" />
				<label className="music__label" htmlFor="name">
					Предмет
				</label>
				<input className="music__input" type="text" name="subject" required="true" />
				<label className="music__label" htmlFor="param">
					Параметры помещения
				</label>
				<input className="music__input" type="text" name="param" required="true" />
				<label className="music__label" htmlFor="name">
					Сообщение
				</label>
				<textarea className="music__message" name="message" required="true"></textarea>
				<button className="music__btn" type="submit">
					отправить
				</button>
			</form>
			<img src={i1} alt="" className="ct__img" />
		</div>
	</div>
);

export default Music;
