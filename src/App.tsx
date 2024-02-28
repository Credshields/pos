import '@fontsource/league-gothic';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import React, { Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

import { Global, css } from '@emotion/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loader from './components/Landing/Loader';

///
/// Have added a Global CSS to remove the focus indicator on click.
///
const GlobalStyles = css`
	/*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
	.js-focus-visible :focus:not([data-focus-visible-added]) {
		outline: none;
		box-shadow: none;
	}
`;

const Landing = lazy(() =>
	lazyRetry(
		() => import('./pages/Landing' /* webpackChunkName: "Landing" */),
		'landing'
	)
);

export const App: React.FC = () => {
	return (
		<Suspense fallback=''>
			<ChakraProvider theme={theme}>
				<Global styles={GlobalStyles} />
				<BrowserRouter>
					<Suspense fallback={<Loader width={'100vw'} height={'100vh'} />}>
						<Routes>
							<Route path='/' Component={Landing} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</ChakraProvider>
		</Suspense>
	);
};

const lazyRetry = function <T>(
	componentImport: () => Promise<T>,
	name: string
) {
	return new Promise<T>((resolve, reject) => {
		const hasRefreshed = JSON.parse(
			window.sessionStorage.getItem(`retry-${name}-refreshed`) || 'false'
		);

		componentImport()
			.then((component) => {
				window.sessionStorage.setItem(`retry-${name}-refreshed`, 'false');
				resolve(component);
			})
			.catch((error) => {
				if (!hasRefreshed) {
					window.sessionStorage.setItem(`retry-${name}-refreshed`, 'true');
					window.location.reload();
				}
				reject(error);
			});
	});
};
