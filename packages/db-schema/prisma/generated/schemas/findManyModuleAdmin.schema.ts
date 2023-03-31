import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './objects/ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './objects/ModuleAdminInclude.schema';
import { ModuleAdminOrderByWithRelationInputObjectSchema } from './objects/ModuleAdminOrderByWithRelationInput.schema';
import { ModuleAdminWhereInputObjectSchema } from './objects/ModuleAdminWhereInput.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './objects/ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminScalarFieldEnumSchema } from './enums/ModuleAdminScalarFieldEnum.schema';

export const ModuleAdminFindManySchema = z.object({
  select: z.lazy(() => ModuleAdminSelectObjectSchema.optional()),
  include: z.lazy(() => ModuleAdminIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ModuleAdminOrderByWithRelationInputObjectSchema,
      ModuleAdminOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleAdminWhereInputObjectSchema.optional(),
  cursor: ModuleAdminWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ModuleAdminScalarFieldEnumSchema).optional(),
});
