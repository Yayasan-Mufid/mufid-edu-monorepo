import { z } from 'zod';
import { ModuleAccessSelectObjectSchema } from './objects/ModuleAccessSelect.schema';
import { ModuleAccessIncludeObjectSchema } from './objects/ModuleAccessInclude.schema';
import { ModuleAccessOrderByWithRelationInputObjectSchema } from './objects/ModuleAccessOrderByWithRelationInput.schema';
import { ModuleAccessWhereInputObjectSchema } from './objects/ModuleAccessWhereInput.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './objects/ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessScalarFieldEnumSchema } from './enums/ModuleAccessScalarFieldEnum.schema';

export const ModuleAccessFindManySchema = z.object({
  select: z.lazy(() => ModuleAccessSelectObjectSchema.optional()),
  include: z.lazy(() => ModuleAccessIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ModuleAccessOrderByWithRelationInputObjectSchema,
      ModuleAccessOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleAccessWhereInputObjectSchema.optional(),
  cursor: ModuleAccessWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleAccessScalarFieldEnumSchema).optional(),
});
