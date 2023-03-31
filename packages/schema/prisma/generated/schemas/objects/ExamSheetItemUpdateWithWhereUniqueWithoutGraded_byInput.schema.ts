import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUpdateWithoutGraded_byInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutGraded_byInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutGraded_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutGraded_byInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutGraded_byInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateWithWhereUniqueWithoutGraded_byInputObjectSchema =
  Schema;
