import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './objects/InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './objects/InvoiceItemInclude.schema';
import { InvoiceItemOrderByWithRelationInputObjectSchema } from './objects/InvoiceItemOrderByWithRelationInput.schema';
import { InvoiceItemWhereInputObjectSchema } from './objects/InvoiceItemWhereInput.schema';
import { InvoiceItemWhereUniqueInputObjectSchema } from './objects/InvoiceItemWhereUniqueInput.schema';
import { InvoiceItemScalarFieldEnumSchema } from './enums/InvoiceItemScalarFieldEnum.schema';

export const InvoiceItemFindFirstSchema = z.object({
  select: InvoiceItemSelectObjectSchema.optional(),
  include: InvoiceItemIncludeObjectSchema.optional(),
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
