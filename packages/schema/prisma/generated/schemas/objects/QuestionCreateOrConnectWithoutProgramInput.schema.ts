import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutProgramInputObjectSchema } from './QuestionCreateWithoutProgramInput.schema';
import { QuestionUncheckedCreateWithoutProgramInputObjectSchema } from './QuestionUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutProgramInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionCreateOrConnectWithoutProgramInputObjectSchema = Schema;
