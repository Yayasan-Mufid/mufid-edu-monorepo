import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUpdateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetSectionUpdateWithoutExam_sheetInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedUpdateWithoutExam_sheetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpdateWithWhereUniqueWithoutExam_sheetInputObjectSchema =
  Schema;
