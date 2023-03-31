import { z } from 'zod';
import { StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupScheduleCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupScheduleCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInputObjectSchema } from './StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInput.schema';
import { StudyGroupScheduleScalarWhereInputObjectSchema } from './StudyGroupScheduleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedUpdateManyWithoutStudy_groupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupScheduleCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupScheduleCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupScheduleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupScheduleUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema =
  Schema;
