import { z } from 'zod';
import { ExamCreateNestedOneWithoutStudy_group_examsInputObjectSchema } from './ExamCreateNestedOneWithoutStudy_group_examsInput.schema';
import { StudyGroupCreateNestedOneWithoutExamsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutExamsInput.schema';
import { ExamSheetCreateNestedManyWithoutGroup_examInputObjectSchema } from './ExamSheetCreateNestedManyWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateInput> = z
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
    sheets: z
      .lazy(() => ExamSheetCreateNestedManyWithoutGroup_examInputObjectSchema)
      .optional(),
  })
  .strict();

export const StudyGroupExamCreateInputObjectSchema = Schema;
