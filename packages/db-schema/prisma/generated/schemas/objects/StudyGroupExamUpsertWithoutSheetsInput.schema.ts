import { z } from 'zod';
import { StudyGroupExamUpdateWithoutSheetsInputObjectSchema } from './StudyGroupExamUpdateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedUpdateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedUpdateWithoutSheetsInput.schema';
import { StudyGroupExamCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamCreateWithoutSheetsInput.schema';
import { StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutSheetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpsertWithoutSheetsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupExamUpdateWithoutSheetsInputObjectSchema),
      z.lazy(() => StudyGroupExamUncheckedUpdateWithoutSheetsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupExamCreateWithoutSheetsInputObjectSchema),
      z.lazy(() => StudyGroupExamUncheckedCreateWithoutSheetsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupExamUpsertWithoutSheetsInputObjectSchema = Schema;
