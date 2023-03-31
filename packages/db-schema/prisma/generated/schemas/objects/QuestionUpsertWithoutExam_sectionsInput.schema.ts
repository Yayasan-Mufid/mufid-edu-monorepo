import { z } from 'zod';
import { QuestionUpdateWithoutExam_sectionsInputObjectSchema } from './QuestionUpdateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedUpdateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExam_sectionsInput.schema';
import { QuestionCreateWithoutExam_sectionsInputObjectSchema } from './QuestionCreateWithoutExam_sectionsInput.schema';
import { QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutExam_sectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutExam_sectionsInputObjectSchema),
      z.lazy(
        () => QuestionUncheckedUpdateWithoutExam_sectionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutExam_sectionsInputObjectSchema),
      z.lazy(
        () => QuestionUncheckedCreateWithoutExam_sectionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutExam_sectionsInputObjectSchema = Schema;
