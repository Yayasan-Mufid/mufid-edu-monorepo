import { z } from 'zod';
import { ExamSheetItemScalarWhereInputObjectSchema } from './ExamSheetItemScalarWhereInput.schema';
import { ExamSheetItemUpdateManyMutationInputObjectSchema } from './ExamSheetItemUpdateManyMutationInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutExam_itemsInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutExam_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetItemUncheckedUpdateManyWithoutExam_itemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
