import { z } from 'zod';
import { ModuleCreateNestedOneWithoutExamsInputObjectSchema } from './ModuleCreateNestedOneWithoutExamsInput.schema';
import { ExamSectionCreateNestedManyWithoutExamInputObjectSchema } from './ExamSectionCreateNestedManyWithoutExamInput.schema';
import { StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema } from './StudyGroupExamCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutExamsInputObjectSchema),
    rules: z.string(),
    sections: z
      .lazy(() => ExamSectionCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
    study_group_exams: z
      .lazy(() => StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamCreateInputObjectSchema = Schema;
