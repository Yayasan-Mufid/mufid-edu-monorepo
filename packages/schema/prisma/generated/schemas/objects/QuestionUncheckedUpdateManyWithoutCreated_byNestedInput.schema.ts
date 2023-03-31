import { z } from 'zod';
import { QuestionCreateWithoutCreated_byInputObjectSchema } from './QuestionCreateWithoutCreated_byInput.schema';
import { QuestionUncheckedCreateWithoutCreated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutCreated_byInput.schema';
import { QuestionCreateOrConnectWithoutCreated_byInputObjectSchema } from './QuestionCreateOrConnectWithoutCreated_byInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { QuestionCreateManyCreated_byInputEnvelopeObjectSchema } from './QuestionCreateManyCreated_byInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { QuestionUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutCreated_byInput.schema';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutCreated_byNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema),
          z
            .lazy(() => QuestionCreateWithoutCreated_byInputObjectSchema)
            .array(),
          z.lazy(
            () => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUncheckedCreateWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => QuestionCreateOrConnectWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionCreateOrConnectWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyCreated_byInputEnvelopeObjectSchema)
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
            () =>
              QuestionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => QuestionUpdateManyWithWhereWithoutCreated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateManyWithWhereWithoutCreated_byInputObjectSchema,
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

export const QuestionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema =
  Schema;
