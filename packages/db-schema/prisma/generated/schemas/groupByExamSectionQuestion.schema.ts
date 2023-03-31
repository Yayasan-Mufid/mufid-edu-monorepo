import { z } from 'zod';
import { ExamSectionQuestionWhereInputObjectSchema } from './objects/ExamSectionQuestionWhereInput.schema';
import { ExamSectionQuestionOrderByWithAggregationInputObjectSchema } from './objects/ExamSectionQuestionOrderByWithAggregationInput.schema';
import { ExamSectionQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamSectionQuestionScalarWhereWithAggregatesInput.schema';
import { ExamSectionQuestionScalarFieldEnumSchema } from './enums/ExamSectionQuestionScalarFieldEnum.schema';

export const ExamSectionQuestionGroupBySchema = z.object({
  where: ExamSectionQuestionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ExamSectionQuestionOrderByWithAggregationInputObjectSchema,
      ExamSectionQuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ExamSectionQuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExamSectionQuestionScalarFieldEnumSchema),
});
