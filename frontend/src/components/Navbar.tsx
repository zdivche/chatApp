import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<nav className='flex justify-center items-center'>
				<ul className='flex'>
					<li className='mt-2 ml-2'>
						<NavLink
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
								textDecorationColor: isActive ? 'red' : 'black',
								textDecorationThickness: isActive ? '2px' : '0px',
								textUnderlineOffset: isActive ? '5px' : '0px',
							})}
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li className='mt-2 ml-2'>
						<NavLink
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
								textDecorationColor: isActive ? 'red' : 'black',
								textDecorationThickness: isActive ? '2px' : '0px',
								textUnderlineOffset: isActive ? '5px' : '0px',
							})}
							to='/about'
						>
							About
						</NavLink>
					</li>
					<li className='mt-2 ml-2'>
						<NavLink
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
								textDecorationColor: isActive ? 'red' : 'black',
								textDecorationThickness: isActive ? '2px' : '0px',
								textUnderlineOffset: isActive ? '5px' : '0px',
							})}
							to='/contact'
						>
							Contact
						</NavLink>
					</li>
					<li className='mt-2 ml-2'>
						<NavLink
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
								textDecorationColor: isActive ? 'red' : 'black',
								textDecorationThickness: isActive ? '2px' : '0px',
								textUnderlineOffset: isActive ? '5px' : '0px',
							})}
							to='/register'
						>
							Sign up
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
