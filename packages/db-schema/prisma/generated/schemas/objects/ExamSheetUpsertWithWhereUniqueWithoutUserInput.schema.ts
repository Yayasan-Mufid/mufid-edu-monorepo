import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutUserInputObjectSchema } from './ExamSheetUpdateWithoutUserInput.schema';
import { ExamSheetUncheckedUpdateWithoutUserInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutUserInput.schema';
import { ExamSheetCreateWithoutUserInputObjectSchema } from './ExamSheetCreateWithoutUserInput.schema';
import { ExamSheetUncheckedCreateWithoutUserInputObjectSchema } from './ExamSheetUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExamSheetUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ExamSheetUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
