import { z } from 'zod';
import { StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupStudentCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInput.schema';
import { StudyGroupStudentScalarWhereInputObjectSchema } from './StudyGroupStudentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateManyWithoutStudy_groupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupStudentCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
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
              StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupStudentUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
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

export const StudyGroupStudentUpdateManyWithoutStudy_groupNestedInputObjectSchema =
  Schema;
