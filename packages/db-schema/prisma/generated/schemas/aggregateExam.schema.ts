import { z } from 'zod';
import { ExamOrderByWithRelationInputObjectSchema } from './objects/ExamOrderByWithRelationInput.schema';
import { ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamCountAggregateInputObjectSchema } from './objects/ExamCountAggregateInput.schema';
import { ExamMinAggregateInputObjectSchema } from './objects/ExamMinAggregateInput.schema';
import { ExamMaxAggregateInputObjectSchema } from './objects/ExamMaxAggregateInput.schema';

export const ExamAggregateSchema = z.object({
  orderBy: z
    .union([
      ExamOrderByWithRelationInputObjectSchema,
      ExamOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamWhereInputObjectSchema.optional(),
  cursor: ExamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ExamCountAggregateInputObjectSchema])
    .optional(),
  _min: ExamMinAggregateInputObjectSchema.optional(),
  _max: ExamMaxAggregateInputObjectSchema.optional(),
});
