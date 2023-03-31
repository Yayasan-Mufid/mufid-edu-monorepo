import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './objects/InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './objects/InvoiceItemInclude.schema';
import { InvoiceItemCreateInputObjectSchema } from './objects/InvoiceItemCreateInput.schema';
import { InvoiceItemUncheckedCreateInputObjectSchema } from './objects/InvoiceItemUncheckedCreateInput.schema';

export const InvoiceItemCreateOneSchema = z.object({
  select: InvoiceItemSelectObjectSchema.optional(),
  include: InvoiceItemIncludeObjectSchema.optional(),
  data: z.union([
    InvoiceItemCreateInputObjectSchema,
    InvoiceItemUncheckedCreateInputObjectSchema,
  ]),
});
