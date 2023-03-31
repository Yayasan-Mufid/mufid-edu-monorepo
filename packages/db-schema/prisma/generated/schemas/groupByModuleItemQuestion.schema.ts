import { z } from 'zod';
import { ModuleItemQuestionWhereInputObjectSchema } from './objects/ModuleItemQuestionWhereInput.schema';
import { ModuleItemQuestionOrderByWithAggregationInputObjectSchema } from './objects/ModuleItemQuestionOrderByWithAggregationInput.schema';
import { ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/ModuleItemQuestionScalarWhereWithAggregatesInput.schema';
import { ModuleItemQuestionScalarFieldEnumSchema } from './enums/ModuleItemQuestionScalarFieldEnum.schema';

export const ModuleItemQuestionGroupBySchema = z.object({
  where: ModuleItemQuestionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ModuleItemQuestionOrderByWithAggregationInputObjectSchema,
      ModuleItemQuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ModuleItemQuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ModuleItemQuestionScalarFieldEnumSchema),
});
