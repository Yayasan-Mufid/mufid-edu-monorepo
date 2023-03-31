import { z } from 'zod';
import { QuestionCreateWithoutModule_item_questionInputObjectSchema } from './QuestionCreateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedCreateWithoutModule_item_questionInput.schema';
import { QuestionCreateOrConnectWithoutModule_item_questionInputObjectSchema } from './QuestionCreateOrConnectWithoutModule_item_questionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutModule_item_questionInput> =
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
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const QuestionCreateNestedOneWithoutModule_item_questionInputObjectSchema =
  Schema;
