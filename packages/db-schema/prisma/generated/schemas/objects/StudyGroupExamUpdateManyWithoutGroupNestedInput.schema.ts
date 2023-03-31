import { z } from 'zod';
import { StudyGroupExamCreateWithoutGroupInputObjectSchema } from './StudyGroupExamCreateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutGroupInput.schema';
import { StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema } from './StudyGroupExamCreateOrConnectWithoutGroupInput.schema';
import { StudyGroupExamUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './StudyGroupExamUpsertWithWhereUniqueWithoutGroupInput.schema';
import { StudyGroupExamCreateManyGroupInputEnvelopeObjectSchema } from './StudyGroupExamCreateManyGroupInputEnvelope.schema';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './StudyGroupExamUpdateWithWhereUniqueWithoutGroupInput.schema';
import { StudyGroupExamUpdateManyWithWhereWithoutGroupInputObjectSchema } from './StudyGroupExamUpdateManyWithWhereWithoutGroupInput.schema';
import { StudyGroupExamScalarWhereInputObjectSchema } from './StudyGroupExamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamUpdateManyWithoutGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema),
          z
            .lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupExamUpsertWithWhereUniqueWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpsertWithWhereUniqueWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupExamCreateManyGroupInputEnvelopeObjectSchema)
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
              StudyGroupExamUpdateWithWhereUniqueWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpdateWithWhereUniqueWithoutGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupExamUpdateManyWithWhereWithoutGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupExamUpdateManyWithWhereWithoutGroupInputObjectSchema,
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

export const StudyGroupExamUpdateManyWithoutGroupNestedInputObjectSchema =
  Schema;
