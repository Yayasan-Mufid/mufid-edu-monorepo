import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema';
import { InvoiceUncheckedCreateInputObjectSchema } from './objects/InvoiceUncheckedCreateInput.schema';

export const InvoiceCreateOneSchema = z.object({
  select: InvoiceSelectObjectSchema.optional(),
  include: InvoiceIncludeObjectSchema.optional(),
  data: z.union([
    InvoiceCreateInputObjectSchema,
    InvoiceUncheckedCreateInputObjectSchema,
  ]),
});
