import { z } from 'zod';
import { StudyGroupExamUncheckedCreateNestedManyWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateNestedManyWithoutExamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUncheckedCreateWithoutSectionsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    code: z.string(),
    module_id: z.string(),
    rules: z.string(),
    study_group_exams: z
      .lazy(
        () =>
          StudyGroupExamUncheckedCreateNestedManyWithoutExamInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamUncheckedCreateWithoutSectionsInputObjectSchema = Schema;
