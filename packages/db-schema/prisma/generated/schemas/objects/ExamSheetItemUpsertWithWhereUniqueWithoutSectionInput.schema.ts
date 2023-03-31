import { z } from 'zod';
import { ExamSheetItemWhereUniqueInputObjectSchema } from './ExamSheetItemWhereUniqueInput.schema';
import { ExamSheetItemUpdateWithoutSectionInputObjectSchema } from './ExamSheetItemUpdateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedUpdateWithoutSectionInput.schema';
import { ExamSheetItemCreateWithoutSectionInputObjectSchema } from './ExamSheetItemCreateWithoutSectionInput.schema';
import { ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetItemUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemUpsertWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetItemUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetItemCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetItemUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetItemUpsertWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
