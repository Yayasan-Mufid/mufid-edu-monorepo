import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutModule_item_questionInputObjectSchema } from './QuestionCreateWithoutModule_item_questionInput.schema';
import { QuestionUncheckedCreateWithoutModule_item_questionInputObjectSchema } from './QuestionUncheckedCreateWithoutModule_item_questionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutModule_item_questionInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
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

export const QuestionCreateOrConnectWithoutModule_item_questionInputObjectSchema =
  Schema;
