import { z } from 'zod';
import { ExamSheetUncheckedCreateNestedManyWithoutGroup_examInputObjectSchema } from './ExamSheetUncheckedCreateNestedManyWithoutGroup_examInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUncheckedCreateWithoutGroupInput> =
  z
    .object({
      id: z.string().optional(),
      exam_id: z.string(),
      start_time: z.date(),
      end_time: z.date(),
      duration_hour: z.number(),
      weight: z.number().optional().nullable(),
      sheets: z
        .lazy(
          () =>
            ExamSheetUncheckedCreateNestedManyWithoutGroup_examInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema =
  Schema;
