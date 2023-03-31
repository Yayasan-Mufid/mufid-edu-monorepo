import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutExamsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutExamsInput.schema';
import { ExamSheetCreateNestedManyWithoutGroup_examInputObjectSchema } from './ExamSheetCreateNestedManyWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateWithoutExamInput> = z
  .object({
    id: z.string().optional(),
    group: z.lazy(() => StudyGroupCreateNestedOneWithoutExamsInputObjectSchema),
    start_time: z.date(),
    end_time: z.date(),
    duration_hour: z.number(),
    weight: z.number().optional().nullable(),
    sheets: z
      .lazy(() => ExamSheetCreateNestedManyWithoutGroup_examInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamCreateWithoutExamInputObjectSchema = Schema;
