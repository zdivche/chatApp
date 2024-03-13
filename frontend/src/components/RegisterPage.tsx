import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../services/mutations.ts';
import { RegisterForm, schema } from '../types/user.ts';

export const RegisterPage = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<RegisterForm>({
		defaultValues: {},
		resolver: zodResolver(schema),
	});

	const registerUserMutation = useCreateUser();
	const handleCreateUserSubmit: SubmitHandler<RegisterForm> = (data) => {
		registerUserMutation.mutate(data);
		navigate('/')
	};
	return (
		<>
			<form
				className='flex flex-col justify-center items-center h-screen w-screen max-w-screen-lg mx-auto gap-4'
				onSubmit={handleSubmit(handleCreateUserSubmit)}>
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg mx-auto'
					placeholder='type your username'
					type='text'
					{...register('username')}
				></input>
				{errors.username && (<div className='text-red-500'>{errors.username.message}</div>)}
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg mx-auto'
					placeholder='type your email'
					type='text'
					{...register('email')}
				/>
				{errors.email && (
					<div className='text-red-500'>{errors.email.message}</div>
				)}
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg mx-auto'
					placeholder='type your password'
					type='password'
					{...register('password')}
				/>
				{errors.password && (
					<div className='text-red-500'>{errors.password.message}</div>
				)}

				<button
					disabled={isSubmitting}
					className='flex border-2 bg-black text-white px-2 py-1 rounded-lg hover:bg-gray-700 '
				>
					{isSubmitting ? 'Loading...' : 'Sign Up'}
				</button>
				{errors.root && (
					<div className='text-red-500'>{errors.root.message}</div>
				)}
				<button onClick={() => reset()}>reset</button>
			</form>
		</>
	);
};

export default RegisterPage;

{
	/* <input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg '
					placeholder='type a password confirmation'
					type='text'
					{...register('passwordConfirmation')}
				/> */
}
