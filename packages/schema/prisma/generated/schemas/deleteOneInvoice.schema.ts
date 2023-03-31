import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';

export const InvoiceDeleteOneSchema = z.object({
  select: InvoiceSelectObjectSchema.optional(),
  include: InvoiceIncludeObjectSchema.optional(),
  where: InvoiceWhereUniqueInputObjectSchema,
});
