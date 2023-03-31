import { z } from 'zod';
import { ExamSectionQuestionCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateWithoutSectionInput.schema';
import { ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema } from './ExamSectionQuestionUncheckedCreateWithoutSectionInput.schema';
import { ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema } from './ExamSectionQuestionCreateOrConnectWithoutSectionInput.schema';
import { ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInput.schema';
import { ExamSectionQuestionCreateManySectionInputEnvelopeObjectSchema } from './ExamSectionQuestionCreateManySectionInputEnvelope.schema';
import { ExamSectionQuestionWhereUniqueInputObjectSchema } from './ExamSectionQuestionWhereUniqueInput.schema';
import { ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema } from './ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInput.schema';
import { ExamSectionQuestionUpdateManyWithWhereWithoutSectionInputObjectSchema } from './ExamSectionQuestionUpdateManyWithWhereWithoutSectionInput.schema';
import { ExamSectionQuestionScalarWhereInputObjectSchema } from './ExamSectionQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateManyWithoutSectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ExamSectionQuestionCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSectionQuestionCreateWithoutSectionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUncheckedCreateWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionCreateOrConnectWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ExamSectionQuestionCreateManySectionInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ExamSectionQuestionUpdateManyWithWhereWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionQuestionUpdateManyWithWhereWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema),
          z.lazy(() => ExamSectionQuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionQuestionUpdateManyWithoutSectionNestedInputObjectSchema =
  Schema;
