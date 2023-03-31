import { z } from 'zod';
import { StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementCreateManyAnnouncementInputEnvelopeObjectSchema } from './StudyGroupAnnouncementCreateManyAnnouncementInputEnvelope.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementScalarWhereInputObjectSchema } from './StudyGroupAnnouncementScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            StudyGroupAnnouncementCreateManyAnnouncementInputEnvelopeObjectSchema,
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
              StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInputObjectSchema,
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

export const StudyGroupAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInputObjectSchema =
  Schema;
