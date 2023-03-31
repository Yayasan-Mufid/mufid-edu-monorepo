import { z } from 'zod';
import { QuestionUpdateWithoutExam_itemsInputObjectSchema } from './QuestionUpdateWithoutExam_itemsInput.schema';
import { QuestionUncheckedUpdateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExam_itemsInput.schema';
import { QuestionCreateWithoutExam_itemsInputObjectSchema } from './QuestionCreateWithoutExam_itemsInput.schema';
import { QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema } from './QuestionUncheckedCreateWithoutExam_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutExam_itemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutExam_itemsInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutExam_itemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutExam_itemsInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutExam_itemsInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutExam_itemsInputObjectSchema = Schema;
