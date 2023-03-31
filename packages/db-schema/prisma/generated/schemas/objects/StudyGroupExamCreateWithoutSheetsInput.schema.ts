import { z } from 'zod';
import { ExamCreateNestedOneWithoutStudy_group_examsInputObjectSchema } from './ExamCreateNestedOneWithoutStudy_group_examsInput.schema';
import { StudyGroupCreateNestedOneWithoutExamsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateWithoutSheetsInput> = z
  .object({
    id: z.string().optional(),
    start_time: z.date(),
    end_time: z.date(),
    duration_hour: z.number(),
    weight: z.number().optional().nullable(),
    exam: z.lazy(
      () => ExamCreateNestedOneWithoutStudy_group_examsInputObjectSchema,
    ),
    group: z.lazy(() => StudyGroupCreateNestedOneWithoutExamsInputObjectSchema),
  })
  .strict();

export const StudyGroupExamCreateWithoutSheetsInputObjectSchema = Schema;
