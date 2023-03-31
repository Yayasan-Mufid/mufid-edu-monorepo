import { z } from 'zod';
import { QuestionChoiceCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedCreateWithoutQuestionInput.schema';
import { QuestionChoiceCreateOrConnectWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateOrConnectWithoutQuestionInput.schema';
import { QuestionChoiceCreateManyQuestionInputEnvelopeObjectSchema } from './QuestionChoiceCreateManyQuestionInputEnvelope.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './QuestionChoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUncheckedCreateNestedManyWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionChoiceCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => QuestionChoiceCreateWithoutQuestionInputObjectSchema)
            .array(),
          z.lazy(
            () => QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => QuestionChoiceCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionChoiceCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionChoiceCreateManyQuestionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionChoiceUncheckedCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
