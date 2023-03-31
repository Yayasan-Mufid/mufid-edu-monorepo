import { z } from 'zod';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';
import { QuestionUpdateManyMutationInputObjectSchema } from './QuestionUpdateManyMutationInput.schema';
import { QuestionUncheckedUpdateManyWithoutCreated_questionsInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutCreated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutCreated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionUncheckedUpdateManyWithoutCreated_questionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionUpdateManyWithWhereWithoutCreated_byInputObjectSchema =
  Schema;
