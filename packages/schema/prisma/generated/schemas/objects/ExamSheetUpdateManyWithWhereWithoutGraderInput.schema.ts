import { z } from 'zod';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';
import { ExamSheetUpdateManyMutationInputObjectSchema } from './ExamSheetUpdateManyMutationInput.schema';
import { ExamSheetUncheckedUpdateManyWithoutGraded_exam_sheetsInputObjectSchema } from './ExamSheetUncheckedUpdateManyWithoutGraded_exam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateManyWithWhereWithoutGraderInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetUncheckedUpdateManyWithoutGraded_exam_sheetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetUpdateManyWithWhereWithoutGraderInputObjectSchema =
  Schema;
