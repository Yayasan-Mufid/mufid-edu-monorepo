import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => SortOrderSchema).optional(),
    date_of_birth: z.lazy(() => SortOrderSchema).optional(),
    place_of_birth: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    phone_number: z.lazy(() => SortOrderSchema).optional(),
    wa_number: z.lazy(() => SortOrderSchema).optional(),
    telegram_id: z.lazy(() => SortOrderSchema).optional(),
    otp: z.lazy(() => SortOrderSchema).optional(),
    otp_expired: z.lazy(() => SortOrderSchema).optional(),
    mandatory_filled: z.lazy(() => SortOrderSchema).optional(),
    suspended: z.lazy(() => SortOrderSchema).optional(),
    profile_picture: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserCountOrderByAggregateInputObjectSchema = Schema;
