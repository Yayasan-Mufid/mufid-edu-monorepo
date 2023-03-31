import { z } from 'zod';
import { StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupAnnouncementCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementScalarWhereInputObjectSchema } from './StudyGroupAnnouncementScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateManyWithoutStudy_groupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupAnnouncementCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementUpdateManyWithoutStudy_groupNestedInputObjectSchema =
  Schema;
