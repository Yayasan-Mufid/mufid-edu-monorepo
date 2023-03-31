import { z } from 'zod';
import { QuestionCreateWithoutChoicesInputObjectSchema } from './QuestionCreateWithoutChoicesInput.schema';
import { QuestionUncheckedCreateWithoutChoicesInputObjectSchema } from './QuestionUncheckedCreateWithoutChoicesInput.schema';
import { QuestionCreateOrConnectWithoutChoicesInputObjectSchema } from './QuestionCreateOrConnectWithoutChoicesInput.schema';
import { QuestionUpsertWithoutChoicesInputObjectSchema } from './QuestionUpsertWithoutChoicesInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutChoicesInputObjectSchema } from './QuestionUpdateWithoutChoicesInput.schema';
import { QuestionUncheckedUpdateWithoutChoicesInputObjectSchema } from './QuestionUncheckedUpdateWithoutChoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutChoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutChoicesInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutChoicesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutChoicesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => QuestionUpsertWithoutChoicesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutChoicesInputObjectSchema),
          z.lazy(() => QuestionUncheckedUpdateWithoutChoicesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const QuestionUpdateOneRequiredWithoutChoicesNestedInputObjectSchema =
  Schema;
