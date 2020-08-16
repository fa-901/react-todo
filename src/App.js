import React, { useState } from "react";
import ThemeToggler from './components/ThemeToggler';
import Todo from './components/Todo';
import "./assets/styles/main.scss";

export default function App() {
	const [theme, themeChange] = useState('light');

	return (
		<div className={`app app-${theme}`}>
			<div className='container py-3'>
				<ThemeToggler theme={themeChange}/>
				<h1 className='text-center form-group'>Todo</h1>
				<Todo/>
			</div>
		</div>
	);
}
