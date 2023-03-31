import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutAccountInputObjectSchema } from './InvoiceCreateWithoutAccountInput.schema';
import { InvoiceUncheckedCreateWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutAccountInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutAccountInputObjectSchema = Schema;
