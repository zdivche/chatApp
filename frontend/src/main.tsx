import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import HeaderComponent from './components/HeaderComponent.tsx';
import RegisterPage from './components/RegisterPage.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HeaderComponent />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
		errorElement: <NotFoundPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
