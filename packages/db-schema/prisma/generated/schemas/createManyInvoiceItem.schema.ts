import { z } from 'zod';
import { InvoiceItemCreateManyInputObjectSchema } from './objects/InvoiceItemCreateManyInput.schema';

export const InvoiceItemCreateManySchema = z.object({
  data: z.union([
    InvoiceItemCreateManyInputObjectSchema,
    z.array(InvoiceItemCreateManyInputObjectSchema),
  ]),
});
