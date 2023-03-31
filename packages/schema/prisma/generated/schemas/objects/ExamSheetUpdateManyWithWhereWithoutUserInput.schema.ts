import { z } from 'zod';
import { ExamSheetScalarWhereInputObjectSchema } from './ExamSheetScalarWhereInput.schema';
import { ExamSheetUpdateManyMutationInputObjectSchema } from './ExamSheetUpdateManyMutationInput.schema';
import { ExamSheetUncheckedUpdateManyWithoutExam_sheetsInputObjectSchema } from './ExamSheetUncheckedUpdateManyWithoutExam_sheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ExamSheetScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ExamSheetUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => ExamSheetUncheckedUpdateManyWithoutExam_sheetsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ExamSheetUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
