import React, { useState } from "react";
import ThemeToggler from './components/ThemeToggler';
import "./assets/styles/main.scss";

export default function App() {
	const [theme, themeChange] = useState('light');

	return (
		<div className={`app app-${theme}`}>
			<div className='container py-3'>
				<ThemeToggler theme={themeChange}/>
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
			</div>
		</div>
	);
}
