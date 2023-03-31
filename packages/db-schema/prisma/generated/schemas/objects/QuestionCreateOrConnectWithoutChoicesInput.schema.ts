import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutChoicesInputObjectSchema } from './QuestionCreateWithoutChoicesInput.schema';
import { QuestionUncheckedCreateWithoutChoicesInputObjectSchema } from './QuestionUncheckedCreateWithoutChoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutChoicesInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutChoicesInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutChoicesInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionCreateOrConnectWithoutChoicesInputObjectSchema = Schema;
