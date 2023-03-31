import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutUserInputObjectSchema } from './ExamSheetUpdateWithoutUserInput.schema';
import { ExamSheetUncheckedUpdateWithoutUserInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExamSheetUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSheetUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
