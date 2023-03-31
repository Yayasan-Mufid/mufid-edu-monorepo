import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutCreated_byInputObjectSchema } from './QuestionCreateWithoutCreated_byInput.schema';
import { QuestionUncheckedCreateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionCreateOrConnectWithoutCreated_byInputObjectSchema = Schema;
