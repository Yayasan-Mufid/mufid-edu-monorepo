import { z } from 'zod';
import { ModuleItemQuestionStatusWhereInputObjectSchema } from './objects/ModuleItemQuestionStatusWhereInput.schema';
import { ModuleItemQuestionStatusOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemQuestionStatusOrderByWithAggregationInput.schema';
import { ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemQuestionStatusScalarWhereWithAggregatesInput.schema';
import { ModuleItemQuestionStatusScalarFieldEnumSchema } from './enums/ModuleItemQuestionStatusScalarFieldEnum.schema';

export const ModuleItemQuestionStatusGroupBySchema = z.object({
  where: ModuleItemQuestionStatusWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemQuestionStatusOrderByWithAggregationInputObjectSchema,
      ModuleItemQuestionStatusOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ModuleItemQuestionStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemQuestionStatusScalarFieldEnumSchema),
});
