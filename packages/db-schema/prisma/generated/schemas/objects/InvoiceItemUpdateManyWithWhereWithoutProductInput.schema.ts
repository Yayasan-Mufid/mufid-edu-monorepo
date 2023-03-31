import { z } from 'zod';
import { InvoiceItemScalarWhereInputObjectSchema } from './InvoiceItemScalarWhereInput.schema';
import { InvoiceItemUpdateManyMutationInputObjectSchema } from './InvoiceItemUpdateManyMutationInput.schema';
import { InvoiceItemUncheckedUpdateManyWithoutInvoice_itemsInputObjectSchema } from './InvoiceItemUncheckedUpdateManyWithoutInvoice_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => InvoiceItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InvoiceItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InvoiceItemUncheckedUpdateManyWithoutInvoice_itemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceItemUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
