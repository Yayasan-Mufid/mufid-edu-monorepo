import { z } from 'zod';
import { ModuleCreateNestedOneWithoutExamsInputObjectSchema } from './ModuleCreateNestedOneWithoutExamsInput.schema';
import { StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema } from './StudyGroupExamCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateWithoutSectionsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module: z.lazy(() => ModuleCreateNestedOneWithoutExamsInputObjectSchema),
    rules: z.string(),
    study_group_exams: z
      .lazy(() => StudyGroupExamCreateNestedManyWithoutExamInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExamCreateWithoutSectionsInputObjectSchema = Schema;
