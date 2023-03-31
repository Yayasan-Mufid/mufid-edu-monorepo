import { z } from 'zod';
import { StudyGroupExamCreateWithoutExamInputObjectSchema } from './StudyGroupExamCreateWithoutExamInput.schema';
import { StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutExamInput.schema';
import { StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutExamInput.schema';
import { StudyGroupExamUpsertWithWhereUniqueWithoutExamInputObjectSchema } from './StudyGroupExamUpsertWithWhereUniqueWithoutExamInput.schema';
import { StudyGroupExamCreateManyExamInputEnvelopeObjectSchema } from './StudyGroupExamCreateManyExamInputEnvelope.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithWhereUniqueWithoutExamInputObjectSchema } from './StudyGroupExamUpdateWithWhereUniqueWithoutExamInput.schema';
import { StudyGroupExamUpdateManyWithWhereWithoutExamInputObjectSchema } from './StudyGroupExamUpdateManyWithWhereWithoutExamInput.schema';
import { StudyGroupExamScalarWhereInputObjectSchema } from './StudyGroupExamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUncheckedUpdateManyWithoutExamNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema),
          z
            .lazy(() => StudyGroupExamCreateWithoutExamInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamUncheckedCreateWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamCreateOrConnectWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupExamUpsertWithWhereUniqueWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpsertWithWhereUniqueWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupExamCreateManyExamInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupExamUpdateWithWhereUniqueWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpdateWithWhereUniqueWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => StudyGroupExamUpdateManyWithWhereWithoutExamInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpdateManyWithWhereWithoutExamInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupExamScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupExamUncheckedUpdateManyWithoutExamNestedInputObjectSchema =
  Schema;
