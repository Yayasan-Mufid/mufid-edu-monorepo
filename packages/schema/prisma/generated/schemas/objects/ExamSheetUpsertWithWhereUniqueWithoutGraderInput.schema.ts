import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutGraderInputObjectSchema } from './ExamSheetUpdateWithoutGraderInput.schema';
import { ExamSheetUncheckedUpdateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutGraderInput.schema';
import { ExamSheetCreateWithoutGraderInputObjectSchema } from './ExamSheetCreateWithoutGraderInput.schema';
import { ExamSheetUncheckedCreateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGraderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpsertWithWhereUniqueWithoutGraderInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetUpdateWithoutGraderInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedUpdateWithoutGraderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetCreateWithoutGraderInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedCreateWithoutGraderInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSheetUpsertWithWhereUniqueWithoutGraderInputObjectSchema =
  Schema;
