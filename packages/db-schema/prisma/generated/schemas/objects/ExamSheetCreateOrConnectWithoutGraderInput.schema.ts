import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetCreateWithoutGraderInputObjectSchema } from './ExamSheetCreateWithoutGraderInput.schema';
import { ExamSheetUncheckedCreateWithoutGraderInputObjectSchema } from './ExamSheetUncheckedCreateWithoutGraderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateOrConnectWithoutGraderInput> = z
  .object({
    where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamSheetCreateWithoutGraderInputObjectSchema),
      z.lazy(() => ExamSheetUncheckedCreateWithoutGraderInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSheetCreateOrConnectWithoutGraderInputObjectSchema = Schema;
