import { z } from 'zod';
import { ModuleAdminWhereInputObjectSchema } from './objects/ModuleAdminWhereInput.schema';
import { ModuleAdminOrderByWithAggregationInputObjectSchema } from './objects/ModuleAdminOrderByWithAggregationInput.schema';
import { ModuleAdminScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleAdminScalarWhereWithAggregatesInput.schema';
import { ModuleAdminScalarFieldEnumSchema } from './enums/ModuleAdminScalarFieldEnum.schema';

export const ModuleAdminGroupBySchema = z.object({
  where: ModuleAdminWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleAdminOrderByWithAggregationInputObjectSchema,
      ModuleAdminOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ModuleAdminScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleAdminScalarFieldEnumSchema),
});
