import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema';
import { InvoiceUncheckedUpdateInputObjectSchema } from './objects/InvoiceUncheckedUpdateInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';

export const InvoiceUpdateOneSchema = z.object({
  select: InvoiceSelectObjectSchema.optional(),
  include: InvoiceIncludeObjectSchema.optional(),
  data: z.union([
    InvoiceUpdateInputObjectSchema,
    InvoiceUncheckedUpdateInputObjectSchema,
  ]),
  where: InvoiceWhereUniqueInputObjectSchema,
});
