import { z, ZodType } from 'zod';
import {
  ForgotDataType,
  LoginDataType,
  RegisterDataType,
  ResetDataType,
} from './formType';

const userNameRegex = /^[a-zA-Z0-9_]+$/;

export const RegisterSchema: ZodType<RegisterDataType> = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters long' })
    .regex(userNameRegex, {
      message:
        'Username can only contain letters, numbers, and underscores (_)',
    }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters long' })
    .max(20, { message: 'Password cannot be longer than 20 characters' }),
});

export const LoginSchema: ZodType<LoginDataType> = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters long' })
    .regex(userNameRegex, {
      message:
        'Username can only contain letters, numbers, and underscores (_)',
    }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters long' })
    .max(20, { message: 'Password cannot be longer than 20 characters' }),
});

export const ForgotSchema: ZodType<ForgotDataType> = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const ResetSchema: ZodType<ResetDataType> = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: 'New password must be at least 8 characters long' }),
    confirmedPassword: z.string().min(8, {
      message: 'Confirmed password must be at least 8 characters long',
    }),
  })
  .refine((data) => data.newPassword === data.confirmedPassword, {
    message: `Passwords didn't match`,
    path: ['confirmedPassword'],
  });

export const FeedSchema: ZodType = z.object({
  content: z
    .string()
    .min(1, { message: 'Feed must not be empty.' })
    .max(255, { message: 'Feed must be less than 255 characters.' }),
  image: z.any(),
});

export const EditUserSchema: ZodType = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters long.' })
    .max(255, { message: 'Username cannot exceed 255 characters.' }),
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long.' }),
  bio: z.string().min(1, { message: 'Bio must not be empty.' }),
  filterContent: z.boolean(),
  avatar: z.any(),
  banner: z.any(),
});
