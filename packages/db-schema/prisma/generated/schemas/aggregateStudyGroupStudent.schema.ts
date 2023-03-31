import { z } from 'zod';
import { StudyGroupStudentOrderByWithRelationInputObjectSchema } from './objects/StudyGroupStudentOrderByWithRelationInput.schema';
import { StudyGroupStudentWhereInputObjectSchema } from './objects/StudyGroupStudentWhereInput.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './objects/StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentCountAggregateInputObjectSchema } from './objects/StudyGroupStudentCountAggregateInput.schema';
import { StudyGroupStudentMinAggregateInputObjectSchema } from './objects/StudyGroupStudentMinAggregateInput.schema';
import { StudyGroupStudentMaxAggregateInputObjectSchema } from './objects/StudyGroupStudentMaxAggregateInput.schema';

export const StudyGroupStudentAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupStudentOrderByWithRelationInputObjectSchema,
      StudyGroupStudentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupStudentWhereInputObjectSchema.optional(),
  cursor: StudyGroupStudentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StudyGroupStudentCountAggregateInputObjectSchema])
    .optional(),
  _min: StudyGroupStudentMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupStudentMaxAggregateInputObjectSchema.optional(),
});
