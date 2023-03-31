import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './objects/InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './objects/InvoiceItemInclude.schema';
import { InvoiceItemUpdateInputObjectSchema } from './objects/InvoiceItemUpdateInput.schema';
import { InvoiceItemUncheckedUpdateInputObjectSchema } from './objects/InvoiceItemUncheckedUpdateInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';

export const InvoiceItemUpdateOneSchema = z.object({
  select: InvoiceItemSelectObjectSchema.optional(),
  include: InvoiceItemIncludeObjectSchema.optional(),
  data: z.union([
    InvoiceItemUpdateInputObjectSchema,
    InvoiceItemUncheckedUpdateInputObjectSchema,
  ]),
  where: InvoiceItemWhereUniqueInputObjectSchema,
});
