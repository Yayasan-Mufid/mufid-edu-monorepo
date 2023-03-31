import { z } from 'zod';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';
import { ExamSheetItemUpdateManyMutationInputObjectSchema } from './ExamSheetItemUpdateManyMutationInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutGraded_exam_itemInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutGraded_exam_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateManyWithWhereWithoutGraded_byInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetItemUncheckedUpdateManyWithoutGraded_exam_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateManyWithWhereWithoutGraded_byInputObjectSchema =
  Schema;
