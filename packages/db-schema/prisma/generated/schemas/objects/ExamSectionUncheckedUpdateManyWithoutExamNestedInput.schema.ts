import { z } from 'zod';
import { ExamSectionCreateWithoutExamInputObjectSchema } from './ExamSectionCreateWithoutExamInput.schema';
import { ExamSectionUncheckedCreateWithoutExamInputObjectSchema } from './ExamSectionUncheckedCreateWithoutExamInput.schema';
import { ExamSectionCreateOrConnectWithoutExamInputObjectSchema } from './ExamSectionCreateOrConnectWithoutExamInput.schema';
import { ExamSectionUpsertWithWhereUniqueWithoutExamInputObjectSchema } from './ExamSectionUpsertWithWhereUniqueWithoutExamInput.schema';
import { ExamSectionCreateManyExamInputEnvelopeObjectSchema } from './ExamSectionCreateManyExamInputEnvelope.schema';
import { ExamSectionWhereUniqueInputObjectSchema } from './ExamSectionWhereUniqueInput.schema';
import { ExamSectionUpdateWithWhereUniqueWithoutExamInputObjectSchema } from './ExamSectionUpdateWithWhereUniqueWithoutExamInput.schema';
import { ExamSectionUpdateManyWithWhereWithoutExamInputObjectSchema } from './ExamSectionUpdateManyWithWhereWithoutExamInput.schema';
import { ExamSectionScalarWhereInputObjectSchema } from './ExamSectionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUncheckedUpdateManyWithoutExamNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema),
          z.lazy(() => ExamSectionCreateWithoutExamInputObjectSchema).array(),
          z.lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema),
          z
            .lazy(() => ExamSectionUncheckedCreateWithoutExamInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ExamSectionCreateOrConnectWithoutExamInputObjectSchema),
          z
            .lazy(() => ExamSectionCreateOrConnectWithoutExamInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ExamSectionUpsertWithWhereUniqueWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionUpsertWithWhereUniqueWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ExamSectionCreateManyExamInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ExamSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ExamSectionUpdateWithWhereUniqueWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExamSectionUpdateWithWhereUniqueWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ExamSectionUpdateManyWithWhereWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () => ExamSectionUpdateManyWithWhereWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ExamSectionScalarWhereInputObjectSchema),
          z.lazy(() => ExamSectionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ExamSectionUncheckedUpdateManyWithoutExamNestedInputObjectSchema =
  Schema;
