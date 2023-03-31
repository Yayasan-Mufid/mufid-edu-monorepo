import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutQuestionInputObjectSchema } from './ExamSheetItemUpdateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
