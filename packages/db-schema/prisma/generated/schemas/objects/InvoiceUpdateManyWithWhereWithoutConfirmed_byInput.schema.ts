import { z } from 'zod';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';
import { InvoiceUpdateManyMutationInputObjectSchema } from './InvoiceUpdateManyMutationInput.schema';
import { InvoiceUncheckedUpdateManyWithoutConfirmed_by_me_invoicesInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutConfirmed_by_me_invoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutConfirmed_byInput> =
  z
    .object({
      where: z.lazy(() => InvoiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InvoiceUncheckedUpdateManyWithoutConfirmed_by_me_invoicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceUpdateManyWithWhereWithoutConfirmed_byInputObjectSchema =
  Schema;
