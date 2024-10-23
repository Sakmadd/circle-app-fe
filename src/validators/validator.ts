import { z, ZodType } from 'zod';
import {
  ForgotDataType,
  LoginDataType,
  RegisterDataType,
  ResetDataType,
} from './formType';

export const LoginSchema: ZodType<LoginDataType> = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export const RegisterSchema: ZodType<RegisterDataType> = z.object({
  username: z.string().min(3),
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const ForgotSchema: ZodType<ForgotDataType> = z.object({
  email: z.string().email(),
});

export const ResetSchema: ZodType<ResetDataType> = z.object({
  newPassword: z.string().min(8),
  confirmedPassword: z.string().min(8),
});

export const FeedSchema: ZodType = z.object({
  content: z
    .string()
    .min(1, {
      message: 'Feed must not be empty.',
    })
    .max(255, {
      message: 'Feed must be less than 255 chars.',
    }),
  image: z.any(),
});

export const EditUserSchema: ZodType = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 4 chars long.',
    })
    .max(255),
  name: z.string().min(4, {
    message: 'Name must be at least 4 chars long.',
  }),
  bio: z.string().min(1, {
    message: 'Bio must not be empty.',
  }),
  filterContent: z.boolean(),
  avatar: z.any(),
  banner: z.any(),
});
