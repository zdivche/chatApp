import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import './index.css';
import IndexPage from './components/IndexPage.tsx';
import RegisterPage from './components/RegisterPage.tsx';

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{ path: "/", element: <IndexPage /> },
      { path: "about", element: <IndexPage /> },
      { path: "contact", element: <IndexPage /> },
			{ path: 'register', element: <RegisterPage /> },
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
