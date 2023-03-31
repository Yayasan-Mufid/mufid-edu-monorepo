import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutProgramInputObjectSchema } from './QuestionUpdateWithoutProgramInput.schema';
import { QuestionUncheckedUpdateWithoutProgramInputObjectSchema } from './QuestionUncheckedUpdateWithoutProgramInput.schema';
import { QuestionCreateWithoutProgramInputObjectSchema } from './QuestionCreateWithoutProgramInput.schema';
import { QuestionUncheckedCreateWithoutProgramInputObjectSchema } from './QuestionUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutProgramInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionUpdateWithoutProgramInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutProgramInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpsertWithWhereUniqueWithoutProgramInputObjectSchema =
  Schema;
