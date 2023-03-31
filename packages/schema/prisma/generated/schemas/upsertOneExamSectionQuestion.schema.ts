import { z } from 'zod';
import { ExamSectionQuestionSelectObjectSchema } from './objects/ExamSectionQuestionSelect.schema';
import { ExamSectionQuestionIncludeObjectSchema } from './objects/ExamSectionQuestionInclude.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './objects/ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionCreateInputObjectSchema } from './objects/ExamSectionQuestionCreateInput.schema';
import { ExamSectionQuestionUncheckedCreateInputObjectSchema } from './objects/ExamSectionQuestionUncheckedCreateInput.schema';
import { ExamSectionQuestionUpdateInputObjectSchema } from './objects/ExamSectionQuestionUpdateInput.schema';
import { ExamSectionQuestionUncheckedUpdateInputObjectSchema } from './objects/ExamSectionQuestionUncheckedUpdateInput.schema';

export const ExamSectionQuestionUpsertSchema = z.object({
  select: ExamSectionQuestionSelectObjectSchema.optional(),
  include: ExamSectionQuestionIncludeObjectSchema.optional(),
  where: ExamSectionQuestionWhereUniqueInputObjectSchema,
  create: z.union([
    ExamSectionQuestionCreateInputObjectSchema,
    ExamSectionQuestionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ExamSectionQuestionUpdateInputObjectSchema,
    ExamSectionQuestionUncheckedUpdateInputObjectSchema,
  ]),
});
