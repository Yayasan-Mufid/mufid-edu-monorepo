import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    gender: z.literal(true).optional(),
    date_of_birth: z.literal(true).optional(),
    place_of_birth: z.literal(true).optional(),
    username: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    image: z.literal(true).optional(),
    address: z.literal(true).optional(),
    phone_number: z.literal(true).optional(),
    wa_number: z.literal(true).optional(),
    telegram_id: z.literal(true).optional(),
    otp: z.literal(true).optional(),
    otp_expired: z.literal(true).optional(),
    mandatory_filled: z.literal(true).optional(),
    suspended: z.literal(true).optional(),
    profile_picture: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
