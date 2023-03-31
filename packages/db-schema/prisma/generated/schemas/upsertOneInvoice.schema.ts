import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema';
import { InvoiceUncheckedCreateInputObjectSchema } from './objects/InvoiceUncheckedCreateInput.schema';
import { InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema';
import { InvoiceUncheckedUpdateInputObjectSchema } from './objects/InvoiceUncheckedUpdateInput.schema';

export const InvoiceUpsertSchema = z.object({
  select: InvoiceSelectObjectSchema.optional(),
  include: InvoiceIncludeObjectSchema.optional(),
  where: InvoiceWhereUniqueInputObjectSchema,
  create: z.union([
    InvoiceCreateInputObjectSchema,
    InvoiceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InvoiceUpdateInputObjectSchema,
    InvoiceUncheckedUpdateInputObjectSchema,
  ]),
});
