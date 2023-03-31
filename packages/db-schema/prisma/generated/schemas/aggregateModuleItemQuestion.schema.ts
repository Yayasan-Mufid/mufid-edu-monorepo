import { z } from 'zod';
import { ModuleItemQuestionOrderByWithRelationInputObjectSchema } from './objects/ModuleItemQuestionOrderByWithRelationInput.schema';
import { ModuleItemQuestionWhereInputObjectSchema } from './objects/ModuleItemQuestionWhereInput.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './objects/ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionCountAggregateInputObjectSchema } from './objects/ModuleItemQuestionCountAggregateInput.schema';
import { ModuleItemQuestionMinAggregateInputObjectSchema } from './objects/ModuleItemQuestionMinAggregateInput.schema';
import { ModuleItemQuestionMaxAggregateInputObjectSchema } from './objects/ModuleItemQuestionMaxAggregateInput.schema';

export const ModuleItemQuestionAggregateSchema = z.object({
  orderBy: z
    .union([
      ModuleItemQuestionOrderByWithRelationInputObjectSchema,
      ModuleItemQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ModuleItemQuestionWhereInputObjectSchema.optional(),
  cursor: ModuleItemQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ModuleItemQuestionCountAggregateInputObjectSchema])
    .optional(),
  _min: ModuleItemQuestionMinAggregateInputObjectSchema.optional(),
  _max: ModuleItemQuestionMaxAggregateInputObjectSchema.optional(),
});
