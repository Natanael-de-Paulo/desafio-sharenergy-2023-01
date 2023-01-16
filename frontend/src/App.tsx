import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import {DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AuthProvider } from './contexts/useAuth';

function App() {
	return (
		<ThemeProvider theme={ theme }>
			<BrowserRouter>
				<AuthProvider>
					<GlobalStyle />
					<Routes/>
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;