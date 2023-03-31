import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutProgramInputObjectSchema } from './QuestionUpdateWithoutProgramInput.schema';
import { QuestionUncheckedUpdateWithoutProgramInputObjectSchema } from './QuestionUncheckedUpdateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateWithoutProgramInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutProgramInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpdateWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
