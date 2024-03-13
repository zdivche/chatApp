import { useMutation } from '@tanstack/react-query';
import { RegisterForm } from '../types/user.ts';
import { registerUser } from './api.ts';

export const useCreateUser = () => {
	return useMutation({
		mutationFn: (data: RegisterForm) => registerUser(data),
		onMutate: () => {
			console.log('registered');
		},
		onError: () => {
			console.log('error');
		},
		onSuccess: () => {
			console.log('success');
		},
		onSettled: () => {
			console.log('settled');
		},
	});
};
