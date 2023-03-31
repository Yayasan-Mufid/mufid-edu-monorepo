import { z } from 'zod';
import { PaymentAccountWhereInputObjectSchema } from './PaymentAccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountRelationFilter> = z
  .object({
    is: z.lazy(() => PaymentAccountWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PaymentAccountWhereInputObjectSchema).optional(),
  })
  .strict();

export const PaymentAccountRelationFilterObjectSchema = Schema;
