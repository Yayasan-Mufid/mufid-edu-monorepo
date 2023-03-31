import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutQuestionInputObjectSchema } from './ExamSheetItemUpdateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutQuestionInput.schema';
import { ExamSheetItemCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemCreateWithoutQuestionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
