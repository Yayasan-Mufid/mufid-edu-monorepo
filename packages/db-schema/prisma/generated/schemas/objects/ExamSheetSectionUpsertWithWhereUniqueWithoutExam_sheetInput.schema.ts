import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionUpdateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUpdateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedUpdateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedUpdateWithoutExam_sheetInput.schema';
import { ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetSectionUpdateWithoutExam_sheetInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedUpdateWithoutExam_sheetInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionUpsertWithWhereUniqueWithoutExam_sheetInputObjectSchema =
  Schema;
