import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutSectionInputObjectSchema } from './ExamSheetItemUpdateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpdateWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpdateWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
