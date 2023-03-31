import { z } from 'zod';
import { PaymentAccountSelectObjectSchema } from './PaymentAccountSelect.schema';
import { PaymentAccountIncludeObjectSchema } from './PaymentAccountInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountArgs> = z
  .object({
    select: z.lazy(() => PaymentAccountSelectObjectSchema).optional(),
    include: z.lazy(() => PaymentAccountIncludeObjectSchema).optional(),
  })
  .strict();

export const PaymentAccountArgsObjectSchema = Schema;
