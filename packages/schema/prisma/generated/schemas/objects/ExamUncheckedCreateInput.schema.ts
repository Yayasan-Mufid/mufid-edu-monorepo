import { z } from 'zod';
import { ExamSectionUncheckedCreateNestedManyWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateNestedManyWithoutExamInput.schema';
import { StudyGroupExamUncheckedCreateNestedManyWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module_id: z.string(),
    rules: z.string(),
    sections: z
      .lazy(
        () => ExamSectionUncheckedCreateNestedManyWithoutExamInputObjectSchema,
      )
      .optional(),
    study_group_exams: z
      .lazy(
        () =>
          StudyGroupExamUncheckedCreateNestedManyWithoutExamInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamUncheckedCreateInputObjectSchema = Schema;
