import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface RegisterForm {
	email: string;
	password: string;
	passwordConfirmation: string;
}

const RegisterPage = () => {
	const { register, handleSubmit } = useForm<RegisterForm>({
		defaultValues: {},
	});

	const submit: SubmitHandler<RegisterForm> = (data) => {
		console.log(data);
	};
  const error: SubmitErrorHandler<RegisterForm> = (data) => {
		console.log(data);
	};
	return (
		<>
			<form
				className='flex flex-col justify-center items-center h-screen w-screen max-w-screen-lg mx-auto gap-4'
				onSubmit={handleSubmit(submit, error)}
			>
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg mx-auto'
          placeholder='type your email'
					type='text'
					{...register('email', {required: true})}
				/>
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg'
          placeholder='type your password'
					type='text'
					{...register('password')}
				/>
				<input
					className='px-2 flex w-full max-w-72  border-2 border-black rounded-lg '
          placeholder='type a password confirmation'
					type='text'
					{...register('passwordConfirmation')}
				/>
				<button className='flex border-2 bg-black text-white px-2 py-1 rounded-lg hover:bg-gray-700 '>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
};

export default RegisterPage;
