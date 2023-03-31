import { z } from 'zod';
import { ModuleItemWhereInputObjectSchema } from './objects/ModuleItemWhereInput.schema';
import { ModuleItemOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemOrderByWithAggregationInput.schema';
import { ModuleItemScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemScalarWhereWithAggregatesInput.schema';
import { ModuleItemScalarFieldEnumSchema } from './enums/ModuleItemScalarFieldEnum.schema';

export const ModuleItemGroupBySchema = z.object({
  where: ModuleItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemOrderByWithAggregationInputObjectSchema,
      ModuleItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ModuleItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemScalarFieldEnumSchema),
});
