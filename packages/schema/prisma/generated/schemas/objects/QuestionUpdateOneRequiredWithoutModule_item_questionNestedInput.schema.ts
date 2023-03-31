import { z } from 'zod';
import { QuestionCreateWithoutModule_item_questionInputObjectSchema } from './QuestionCreateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedCreateWithoutModule_item_questionInput.schema';
import { QuestionCreateOrConnectWithoutModule_item_questionInputObjectSchema } from './QuestionCreateOrConnectWithoutModule_item_questionInput.schema';
import { QuestionUpsertWithoutModule_item_questionInputObjectSchema } from './QuestionUpsertWithoutModule_item_questionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutModule_item_questionInputObjectSchema } from './QuestionUpdateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedUpdateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedUpdateWithoutModule_item_questionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutModule_item_questionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => QuestionCreateWithoutModule_item_questionInputObjectSchema,
          ),
          z.lazy(
            () =>
              QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            QuestionCreateOrConnectWithoutModule_item_questionInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => QuestionUpsertWithoutModule_item_questionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => QuestionUpdateWithoutModule_item_questionInputObjectSchema,
          ),
          z.lazy(
            () =>
              QuestionUncheckedUpdateWithoutModule_item_questionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const QuestionUpdateOneRequiredWithoutModule_item_questionNestedInputObjectSchema =
  Schema;
