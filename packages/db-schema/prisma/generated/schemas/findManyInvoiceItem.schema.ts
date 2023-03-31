import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './objects/InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './objects/InvoiceItemInclude.schema';
import { InvoiceItemOrderByWithRelationInputObjectSchema } from './objects/InvoiceItemOrderByWithRelationInput.schema';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemScalarFieldEnumSchema } from './enums/InvoiceItemScalarFieldEnum.schema';

export const InvoiceItemFindManySchema = z.object({
  select: z.lazy(() => InvoiceItemSelectObjectSchema.optional()),
  include: z.lazy(() => InvoiceItemIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      InvoiceItemOrderByWithRelationInputObjectSchema,
      InvoiceItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InvoiceItemWhereInputObjectSchema.optional(),
  cursor: InvoiceItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InvoiceItemScalarFieldEnumSchema).optional(),
});
