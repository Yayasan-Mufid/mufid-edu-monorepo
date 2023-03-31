import { z } from 'zod';
import { ModuleSelectObjectSchema } from './objects/ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './objects/ModuleInclude.schema';
import { ModuleOrderByWithRelationInputObjectSchema } from './objects/ModuleOrderByWithRelationInput.schema';
import { ModuleWhereInputObjectSchema } from './objects/ModuleWhereInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './objects/ModuleWhereUniqueInput.schema';
import { ModuleScalarFieldEnumSchema } from './enums/ModuleScalarFieldEnum.schema';

export const ModuleFindFirstSchema = z.object({
  select: ModuleSelectObjectSchema.optional(),
  include: ModuleIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleOrderByWithRelationInputObjectSchema,
      ModuleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleWhereInputObjectSchema.optional(),
  cursor: ModuleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleScalarFieldEnumSchema).optional(),
});
