import { z } from 'zod';
import { ModuleWhereInputObjectSchema } from './objects/ModuleWhereInput.schema';
import { ModuleOrderByWithAggregationInputObjectSchema } from './objects/ModuleOrderByWithAggregationInput.schema';
import { ModuleScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleScalarWhereWithAggregatesInput.schema';
import { ModuleScalarFieldEnumSchema } from './enums/ModuleScalarFieldEnum.schema';

export const ModuleGroupBySchema = z.object({
  where: ModuleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleOrderByWithAggregationInputObjectSchema,
      ModuleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ModuleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleScalarFieldEnumSchema),
});
