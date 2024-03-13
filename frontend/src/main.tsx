import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './components/IndexPage.tsx';
import Navbar from './components/Navbar.tsx';
import RegisterPage from './components/RegisterPage.tsx';
import './index.css';

const queryClient = new QueryClient();

const Layout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<Outlet />
		</QueryClientProvider>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <IndexPage /> },
			{ path: 'about', element: <IndexPage /> },
			{ path: 'contact', element: <IndexPage /> },
			{ path: 'register', element: <RegisterPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		
			<RouterProvider router={router} />

	</React.StrictMode>
);
