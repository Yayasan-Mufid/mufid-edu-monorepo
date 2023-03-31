import { z } from 'zod';
import { QuestionCreateWithoutValidated_byInputObjectSchema } from './QuestionCreateWithoutValidated_byInput.schema';
import { QuestionUncheckedCreateWithoutValidated_byInputObjectSchema } from './QuestionUncheckedCreateWithoutValidated_byInput.schema';
import { QuestionCreateOrConnectWithoutValidated_byInputObjectSchema } from './QuestionCreateOrConnectWithoutValidated_byInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutValidated_byInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutValidated_byInput.schema';
import { QuestionCreateManyValidated_byInputEnvelopeObjectSchema } from './QuestionCreateManyValidated_byInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutValidated_byInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutValidated_byInput.schema';
import { QuestionUpdateManyWithWhereWithoutValidated_byInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutValidated_byInput.schema';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutValidated_byNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema),
          z
            .lazy(() => QuestionCreateWithoutValidated_byInputObjectSchema)
            .array(),
          z.lazy(
            () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUncheckedCreateWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => QuestionCreateOrConnectWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionCreateOrConnectWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionUpsertWithWhereUniqueWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpsertWithWhereUniqueWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyValidated_byInputEnvelopeObjectSchema)
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
              QuestionUpdateWithWhereUniqueWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateWithWhereUniqueWithoutValidated_byInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              QuestionUpdateManyWithWhereWithoutValidated_byInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateManyWithWhereWithoutValidated_byInputObjectSchema,
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

export const QuestionUncheckedUpdateManyWithoutValidated_byNestedInputObjectSchema =
  Schema;
