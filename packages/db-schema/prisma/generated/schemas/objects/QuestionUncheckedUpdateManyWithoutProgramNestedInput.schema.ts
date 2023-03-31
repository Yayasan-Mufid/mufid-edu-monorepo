import { z } from 'zod';
import { QuestionCreateWithoutProgramInputObjectSchema } from './QuestionCreateWithoutProgramInput.schema';
import { QuestionUncheckedCreateWithoutProgramInputObjectSchema } from './QuestionUncheckedCreateWithoutProgramInput.schema';
import { QuestionCreateOrConnectWithoutProgramInputObjectSchema } from './QuestionCreateOrConnectWithoutProgramInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutProgramInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutProgramInput.schema';
import { QuestionCreateManyProgramInputEnvelopeObjectSchema } from './QuestionCreateManyProgramInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutProgramInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutProgramInput.schema';
import { QuestionUpdateManyWithWhereWithoutProgramInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutProgramInput.schema';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutProgramNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutProgramInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutProgramInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => QuestionUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyProgramInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => QuestionUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => QuestionUpdateManyWithWhereWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUpdateManyWithWhereWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionScalarWhereInputObjectSchema),
          z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionUncheckedUpdateManyWithoutProgramNestedInputObjectSchema =
  Schema;
