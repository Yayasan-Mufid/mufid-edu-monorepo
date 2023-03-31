import { z } from 'zod';
import { StudyGroupStudentCreateWithoutUserInputObjectSchema } from './StudyGroupStudentCreateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutUserInput.schema';
import { StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupStudentCreateOrConnectWithoutUserInput.schema';
import { StudyGroupStudentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupStudentUpsertWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupStudentCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupStudentCreateManyUserInputEnvelope.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupStudentUpdateWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupStudentUpdateManyWithWhereWithoutUserInputObjectSchema } from './StudyGroupStudentUpdateManyWithWhereWithoutUserInput.schema';
import { StudyGroupStudentScalarWhereInputObjectSchema } from './StudyGroupStudentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupStudentCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupStudentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupStudentUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
