import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetCreateWithoutUserInputObjectSchema } from './ExamSheetCreateWithoutUserInput.schema';
import { ExamSheetUncheckedCreateWithoutUserInputObjectSchema } from './ExamSheetUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamSheetCreateWithoutUserInputObjectSchema),
      z.lazy(() => ExamSheetUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSheetCreateOrConnectWithoutUserInputObjectSchema = Schema;
