import { z } from 'zod';
export const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	username: z.string().min(3),
});
export type RegisterForm = z.infer<typeof schema>;