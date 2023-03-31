import { z } from 'zod';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceUpdateWithoutQuestionInputObjectSchema } from './QuestionChoiceUpdateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedUpdateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedUpdateWithoutQuestionInput.schema';
import { QuestionChoiceCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionChoiceUpdateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => QuestionChoiceUncheckedUpdateWithoutQuestionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => QuestionChoiceCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
