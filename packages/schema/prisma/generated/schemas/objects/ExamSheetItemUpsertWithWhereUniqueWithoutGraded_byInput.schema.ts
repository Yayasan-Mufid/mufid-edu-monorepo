import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUpdateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutGraded_byInput.schema';
import { ExamSheetItemCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutGraded_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutGraded_byInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutGraded_byInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutGraded_byInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutGraded_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpsertWithWhereUniqueWithoutGraded_byInputObjectSchema =
  Schema;
