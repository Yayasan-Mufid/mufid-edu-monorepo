import { z } from 'zod';
import { ExamSheetSectionWhereUniqueInputObjectSchema } from './ExamSheetSectionWhereUniqueInput.schema';
import { ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionCreateWithoutExam_sheetInput.schema';
import { ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema } from './ExamSheetSectionUncheckedCreateWithoutExam_sheetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSectionCreateOrConnectWithoutExam_sheetInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetSectionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExamSheetSectionCreateWithoutExam_sheetInputObjectSchema),
        z.lazy(
          () =>
            ExamSheetSectionUncheckedCreateWithoutExam_sheetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExamSheetSectionCreateOrConnectWithoutExam_sheetInputObjectSchema =
  Schema;
