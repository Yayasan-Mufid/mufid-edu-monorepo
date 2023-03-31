import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    date_of_birth: z.date().optional().nullable(),
    place_of_birth: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    phone_number: z.string().optional().nullable(),
    wa_number: z.string().optional().nullable(),
    telegram_id: z.string().optional().nullable(),
    otp: z.string().optional().nullable(),
    otp_expired: z.date().optional().nullable(),
    mandatory_filled: z.boolean().optional(),
    suspended: z.boolean().optional(),
    profile_picture: z.string().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
