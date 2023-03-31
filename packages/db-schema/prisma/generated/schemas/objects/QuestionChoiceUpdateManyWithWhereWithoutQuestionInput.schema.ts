import { z } from 'zod';
import { QuestionChoiceScalarWhereInputObjectSchema } from './QuestionChoiceScalarWhereInput.schema';
import { QuestionChoiceUpdateManyMutationInputObjectSchema } from './QuestionChoiceUpdateManyMutationInput.schema';
import { QuestionChoiceUncheckedUpdateManyWithoutChoicesInputObjectSchema } from './QuestionChoiceUncheckedUpdateManyWithoutChoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionChoiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionChoiceUncheckedUpdateManyWithoutChoicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionChoiceUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
