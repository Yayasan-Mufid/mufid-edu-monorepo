import { z } from 'zod';
import { QuestionUpdateWithoutModule_item_questionInputObjectSchema } from './QuestionUpdateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedUpdateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedUpdateWithoutModule_item_questionInput.schema';
import { QuestionCreateWithoutModule_item_questionInputObjectSchema } from './QuestionCreateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedCreateWithoutModule_item_questionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutModule_item_questionInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => QuestionUpdateWithoutModule_item_questionInputObjectSchema,
        ),
        z.lazy(
          () =>
            QuestionUncheckedUpdateWithoutModule_item_questionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => QuestionCreateWithoutModule_item_questionInputObjectSchema,
        ),
        z.lazy(
          () =>
            QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionUpsertWithoutModule_item_questionInputObjectSchema =
  Schema;
