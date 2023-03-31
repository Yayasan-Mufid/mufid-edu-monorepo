import { z } from 'zod';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceUpdateWithoutQuestionInputObjectSchema } from './QuestionChoiceUpdateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedUpdateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionChoiceUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => QuestionChoiceUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
