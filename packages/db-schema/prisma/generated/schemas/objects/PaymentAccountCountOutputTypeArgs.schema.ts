import { z } from 'zod';
import { PaymentAccountCountOutputTypeSelectObjectSchema } from './PaymentAccountCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => PaymentAccountCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountCountOutputTypeArgsObjectSchema = Schema;
