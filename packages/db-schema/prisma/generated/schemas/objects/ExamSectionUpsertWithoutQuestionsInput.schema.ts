import { z } from 'zod';
import { ExamSectionUpdateWithoutQuestionsInputObjectSchema } from './ExamSectionUpdateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutQuestionsInput.schema';
import { ExamSectionCreateWithoutQuestionsInputObjectSchema } from './ExamSectionCreateWithoutQuestionsInput.schema';
import { ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamSectionUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ExamSectionUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExamSectionCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => ExamSectionUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSectionUpsertWithoutQuestionsInputObjectSchema = Schema;
