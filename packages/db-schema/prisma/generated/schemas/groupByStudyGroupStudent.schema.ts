import { z } from 'zod';
import { StudyGroupStudentWhereInputObjectSchema } from './objects/StudyGroupStudentWhereInput.schema';
import { StudyGroupStudentOrderByWithAggregationInputObjectSchema } from './objects/StudyGroupStudentOrderByWithAggregationInput.schema';
import { StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema } from './objects/StudyGroupStudentScalarWhereWithAggregatesInput.schema';
import { StudyGroupStudentScalarFieldEnumSchema } from './enums/StudyGroupStudentScalarFieldEnum.schema';

export const StudyGroupStudentGroupBySchema = z.object({
  where: StudyGroupStudentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StudyGroupStudentOrderByWithAggregationInputObjectSchema,
      StudyGroupStudentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    StudyGroupStudentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StudyGroupStudentScalarFieldEnumSchema),
});
