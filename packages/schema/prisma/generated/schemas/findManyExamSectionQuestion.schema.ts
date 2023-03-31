import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './objects/ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './objects/ExamSectionQuestionInclude.schema';
import { ExamSectionQuestionOrderByWithRelationInputObjectSchema } from './objects/ExamSectionQuestionOrderByWithRelationInput.schema';
import { ExamSectionQuestionWhereInputObjectSchema } from './objects/ExamSectionQuestionWhereInput.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './objects/ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionScalarFieldEnumSchema } from './enums/ExamSectionQuestionScalarFieldEnum.schema';

export const ExamSectionQuestionFindManySchema = z.object({
  select: z.lazy(() => ExamSectionQuestionSelectObjectSchema.optional()),
  include: z.lazy(() => ExamSectionQuestionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ExamSectionQuestionOrderByWithRelationInputObjectSchema,
      ExamSectionQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ExamSectionQuestionWhereInputObjectSchema.optional(),
  cursor: ExamSectionQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExamSectionQuestionScalarFieldEnumSchema).optional(),
});
