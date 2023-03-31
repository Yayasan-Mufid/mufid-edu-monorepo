import { z } from 'zod';
import { QuestionChoiceCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateWithoutQuestionInput.schema';
import { QuestionChoiceUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionChoiceUncheckedCreateWithoutQuestionInput.schema';
import { QuestionChoiceCreateOrConnectWithoutQuestionInputObjectSchema } from './QuestionChoiceCreateOrConnectWithoutQuestionInput.schema';
import { QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { QuestionChoiceCreateManyQuestionInputEnvelopeObjectSchema } from './QuestionChoiceCreateManyQuestionInputEnvelope.schema';
import { QuestionChoiceWhereUniqueInputObjectSchema } from './QuestionChoiceWhereUniqueInput.schema';
import { QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { QuestionChoiceUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './QuestionChoiceUpdateManyWithWhereWithoutQuestionInput.schema';
import { QuestionChoiceScalarWhereInputObjectSchema } from './QuestionChoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionChoiceUpdateManyWithoutQuestionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionChoiceUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionChoiceCreateManyQuestionInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionChoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionChoiceUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              QuestionChoiceUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionChoiceUpdateManyWithWhereWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema),
          z.lazy(() => QuestionChoiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionChoiceUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
