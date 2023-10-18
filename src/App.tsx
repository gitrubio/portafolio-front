import React, { useState } from 'react';
import './app.css';
import Portfolio from './app/components/Portfolio';
import Header from './app/components/Header';
import { THEME } from './app/constants/constants';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function App() {
	const [theme, setTheme] = useState(THEME.LIGHT);
	const changeTheme = () => {
		setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
	};
	const default_theme = createTheme({
		defaultRadius: 'md',
	});
	return (
		<MantineProvider theme={default_theme}>
			 <Notifications />
			<Header changeTheme={changeTheme} theme={theme} />
			<Portfolio theme={theme} />
		</MantineProvider>
	);
}

export default App;
