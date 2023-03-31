import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithoutSectionInputObjectSchema } from './ExamSheetSectionUpdateWithoutSectionInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutSectionInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetSectionUpdateWithoutSectionInputObjectSchema),
        z.lazy(
          () => ExamSheetSectionUncheckedUpdateWithoutSectionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpdateWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
