import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutAccountInputObjectSchema } from './InvoiceUpdateWithoutAccountInput.schema';
import { InvoiceUncheckedUpdateWithoutAccountInputObjectSchema } from './InvoiceUncheckedUpdateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
