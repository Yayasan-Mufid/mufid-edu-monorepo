import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './objects/ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './objects/ModuleItemInclude.schema';
import { ModuleItemOrderByWithRelationInputObjectSchema } from './objects/ModuleItemOrderByWithRelationInput.schema';
import { ModuleItemWhereInputObjectSchema } from './objects/ModuleItemWhereInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './objects/ModuleItemWhereUniqueInput.schema';
import { ModuleItemScalarFieldEnumSchema } from './enums/ModuleItemScalarFieldEnum.schema';

export const ModuleItemFindFirstSchema = z.object({
  select: ModuleItemSelectObjectSchema.optional(),
  include: ModuleItemIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemOrderByWithRelationInputObjectSchema,
      ModuleItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemWhereInputObjectSchema.optional(),
  cursor: ModuleItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemScalarFieldEnumSchema).optional(),
});
