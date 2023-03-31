import { z } from 'zod';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionChoiceCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionChoiceCreateOrConnectWithoutQuestionInputObjectSchema =
  Schema;
