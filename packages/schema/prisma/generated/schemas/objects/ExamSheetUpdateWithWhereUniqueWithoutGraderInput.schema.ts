import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutGraderInputObjectSchema } from './ExamSheetUpdateWithoutGraderInput.schema';
import { ExamSheetUncheckedUpdateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutGraderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateWithWhereUniqueWithoutGraderInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetUpdateWithoutGraderInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedUpdateWithoutGraderInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSheetUpdateWithWhereUniqueWithoutGraderInputObjectSchema =
  Schema;
