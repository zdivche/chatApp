import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});
type RegisterForm = z.infer<typeof schema>;

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<RegisterForm>({
		defaultValues: {},
		resolver: zodResolver(schema),
	});
	const submit: SubmitHandler<RegisterForm> = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(data);
		} catch (error) {
			setError('root', {
				message: 'This email is already taken',
			});
		}
	};
	return (
		<>
			<form
				className='flex flex-col justify-center items-center h-screen w-screen max-w-screen-lg mx-auto gap-4'
				onSubmit={handleSubmit(submit)}
			>
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg mx-auto'
					placeholder='type your email'
					type='text'
					{...register('email')}
					aria-invalid={errors.email ? true : false}
				/>
				{errors.email && (
					<div className='text-red-500'>{errors.email.message}</div>
				)}
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg'
					placeholder='type your password'
					type='text'
					{...register('password')}
				/>
				{errors.password && (
					<div className='text-red-500'>{errors.password.message}</div>
				)}
				{/* <input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg '
					placeholder='type a password confirmation'
					type='text'
					{...register('passwordConfirmation')}
				/> */}
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
