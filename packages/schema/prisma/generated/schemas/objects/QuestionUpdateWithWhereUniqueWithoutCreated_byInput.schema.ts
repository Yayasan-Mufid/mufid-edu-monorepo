import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutCreated_byInputObjectSchema } from './QuestionUpdateWithoutCreated_byInput.schema';
import { QuestionUncheckedUpdateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedUpdateWithoutCreated_byInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateWithoutCreated_byInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutCreated_byInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema =
  Schema;
