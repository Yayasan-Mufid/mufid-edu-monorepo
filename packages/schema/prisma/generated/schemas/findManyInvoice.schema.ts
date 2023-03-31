import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './objects/InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema';

export const InvoiceFindManySchema = z.object({
  select: z.lazy(() => InvoiceSelectObjectSchema.optional()),
  include: z.lazy(() => InvoiceIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      InvoiceOrderByWithRelationInputObjectSchema,
      InvoiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InvoiceWhereInputObjectSchema.optional(),
  cursor: InvoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InvoiceScalarFieldEnumSchema).optional(),
});
