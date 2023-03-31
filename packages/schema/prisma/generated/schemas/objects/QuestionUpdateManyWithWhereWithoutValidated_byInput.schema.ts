import { z } from 'zod';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';
import { QuestionUpdateManyMutationInputObjectSchema } from './QuestionUpdateManyMutationInput.schema';
import { QuestionUncheckedUpdateManyWithoutValidated_questionsInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutValidated_questionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutValidated_byInput> =
  z
    .object({
      where: z.lazy(() => QuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionUncheckedUpdateManyWithoutValidated_questionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionUpdateManyWithWhereWithoutValidated_byInputObjectSchema =
  Schema;
