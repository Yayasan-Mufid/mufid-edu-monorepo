import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './objects/InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './objects/InvoiceItemInclude.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';

export const InvoiceItemDeleteOneSchema = z.object({
  select: InvoiceItemSelectObjectSchema.optional(),
  include: InvoiceItemIncludeObjectSchema.optional(),
  where: InvoiceItemWhereUniqueInputObjectSchema,
});
