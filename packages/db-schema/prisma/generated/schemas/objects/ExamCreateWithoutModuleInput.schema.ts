import { z } from 'zod';
import { ExamSectionCreateNestedManyWithoutExamInputObjectSchema } from './ExamSectionCreateNestedManyWithoutExamInput.schema';
import { StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema } from './StudyGroupExamCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateWithoutModuleInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    rules: z.string(),
    sections: z
      .lazy(() => ExamSectionCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamCreateWithoutModuleInputObjectSchema = Schema;
