import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithoutSectionInputObjectSchema } from './ExamSheetSectionUpdateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutSectionInput.schema';
import { ExamSheetSectionCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionCreateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetSectionUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetSectionUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetSectionCreateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetSectionUncheckedCreateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpsertWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
