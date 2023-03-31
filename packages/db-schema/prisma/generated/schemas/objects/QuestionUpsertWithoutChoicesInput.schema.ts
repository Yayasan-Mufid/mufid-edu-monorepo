import { z } from 'zod';
import { QuestionUpdateWithoutChoicesInputObjectSchema } from './QuestionUpdateWithoutChoicesInput.schema';
import { QuestionUncheckedUpdateWithoutChoicesInputObjectSchema } from './QuestionUncheckedUpdateWithoutChoicesInput.schema';
import { QuestionCreateWithoutChoicesInputObjectSchema } from './QuestionCreateWithoutChoicesInput.schema';
import { QuestionUncheckedCreateWithoutChoicesInputObjectSchema } from './QuestionUncheckedCreateWithoutChoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutChoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutChoicesInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutChoicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutChoicesInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutChoicesInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutChoicesInputObjectSchema = Schema;
