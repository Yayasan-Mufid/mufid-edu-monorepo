import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutAccountInputObjectSchema } from './InvoiceUpdateWithoutAccountInput.schema';
import { InvoiceUncheckedUpdateWithoutAccountInputObjectSchema } from './InvoiceUncheckedUpdateWithoutAccountInput.schema';
import { InvoiceCreateWithoutAccountInputObjectSchema } from './InvoiceCreateWithoutAccountInput.schema';
import { InvoiceUncheckedCreateWithoutAccountInputObjectSchema } from './InvoiceUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InvoiceUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutAccountInputObjectSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const InvoiceUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
