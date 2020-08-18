import React, { useState } from "react";
import ThemeToggler from './components/ThemeToggler';
import Todo from './components/Todo';
import "./assets/styles/main.scss";

export default function App() {
	const [theme, themeChange] = useState('light');

	return (
		<div className={`app app-${theme}`}>
			<div className='container py-3'>
				<ThemeToggler theme={themeChange} />
				<h1 className='text-center form-group'>Todo</h1>
				<Todo />
				<div className="text-center mt-5 form-text text-muted">
					<small>Created by <a href="https://github.com/fa-901" rel='noopener noreferrer' target="_blank">fa-901</a></small>
				</div>
			</div>
		</div>
	);
}
