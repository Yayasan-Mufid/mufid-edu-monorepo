import { z } from 'zod';
import { StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUncheckedCreateWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleCreateOrConnectWithoutModule_itemInput.schema';
import { StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInput.schema';
import { StudyGroupScheduleCreateManyModule_itemInputEnvelopeObjectSchema } from './StudyGroupScheduleCreateManyModule_itemInputEnvelope.schema';
import { StudyGroupScheduleWhereUniqueInputObjectSchema } from './StudyGroupScheduleWhereUniqueInput.schema';
import { StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInput.schema';
import { StudyGroupScheduleUpdateManyWithWhereWithoutModule_itemInputObjectSchema } from './StudyGroupScheduleUpdateManyWithWhereWithoutModule_itemInput.schema';
import { StudyGroupScheduleScalarWhereInputObjectSchema } from './StudyGroupScheduleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupScheduleUncheckedUpdateManyWithoutModule_itemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupScheduleCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUncheckedCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleCreateOrConnectWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupScheduleCreateManyModule_itemInputEnvelopeObjectSchema,
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
              StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupScheduleUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupScheduleUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
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

export const StudyGroupScheduleUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema =
  Schema;
