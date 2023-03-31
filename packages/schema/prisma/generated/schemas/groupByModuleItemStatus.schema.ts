import { z } from 'zod';
import { ModuleItemStatusWhereInputObjectSchema } from './objects/ModuleItemStatusWhereInput.schema';
import { ModuleItemStatusOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemStatusOrderByWithAggregationInput.schema';
import { ModuleItemStatusScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemStatusScalarWhereWithAggregatesInput.schema';
import { ModuleItemStatusScalarFieldEnumSchema } from './enums/ModuleItemStatusScalarFieldEnum.schema';

export const ModuleItemStatusGroupBySchema = z.object({
  where: ModuleItemStatusWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemStatusOrderByWithAggregationInputObjectSchema,
      ModuleItemStatusOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ModuleItemStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemStatusScalarFieldEnumSchema),
});
