import { z } from 'zod';
import { ExamSectionUpdateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUpdateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedUpdateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedUpdateWithoutSheet_sectionsInput.schema';
import { ExamSectionCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionCreateWithoutSheet_sectionsInput.schema';
import { ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema } from './ExamSectionUncheckedCreateWithoutSheet_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpsertWithoutSheet_sectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamSectionUpdateWithoutSheet_sectionsInputObjectSchema),
      z.lazy(
        () => ExamSectionUncheckedUpdateWithoutSheet_sectionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ExamSectionCreateWithoutSheet_sectionsInputObjectSchema),
      z.lazy(
        () => ExamSectionUncheckedCreateWithoutSheet_sectionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ExamSectionUpsertWithoutSheet_sectionsInputObjectSchema = Schema;
