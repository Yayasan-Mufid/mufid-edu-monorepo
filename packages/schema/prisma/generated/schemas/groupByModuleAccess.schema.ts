import { z } from 'zod';
import { ModuleAccessWhereInputObjectSchema } from './objects/ModuleAccessWhereInput.schema';
import { ModuleAccessOrderByWithAggregationInputObjectSchema } from './objects/ModuleAccessOrderByWithAggregationInput.schema';
import { ModuleAccessScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleAccessScalarWhereWithAggregatesInput.schema';
import { ModuleAccessScalarFieldEnumSchema } from './enums/ModuleAccessScalarFieldEnum.schema';

export const ModuleAccessGroupBySchema = z.object({
  where: ModuleAccessWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleAccessOrderByWithAggregationInputObjectSchema,
      ModuleAccessOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ModuleAccessScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleAccessScalarFieldEnumSchema),
});
