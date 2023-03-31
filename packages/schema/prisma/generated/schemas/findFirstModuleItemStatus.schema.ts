import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './objects/ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './objects/ModuleItemStatusInclude.schema';
import { ModuleItemStatusOrderByWithRelationInputObjectSchema } from './objects/ModuleItemStatusOrderByWithRelationInput.schema';
import { ModuleItemStatusWhereInputObjectSchema } from './objects/ModuleItemStatusWhereInput.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusScalarFieldEnumSchema } from './enums/ModuleItemStatusScalarFieldEnum.schema';

export const ModuleItemStatusFindFirstSchema = z.object({
  select: ModuleItemStatusSelectObjectSchema.optional(),
  include: ModuleItemStatusIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemStatusOrderByWithRelationInputObjectSchema,
      ModuleItemStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemStatusWhereInputObjectSchema.optional(),
  cursor: ModuleItemStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleItemStatusScalarFieldEnumSchema).optional(),
});
