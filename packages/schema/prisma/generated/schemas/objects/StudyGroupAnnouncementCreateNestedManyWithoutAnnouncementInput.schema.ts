import { z } from 'zod';
import { StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementCreateManyAnnouncementInputEnvelopeObjectSchema } from './StudyGroupAnnouncementCreateManyAnnouncementInputEnvelope.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInput> =
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
      createMany: z
        .lazy(
          () =>
            StudyGroupAnnouncementCreateManyAnnouncementInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
          z
            .lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAnnouncementCreateNestedManyWithoutAnnouncementInputObjectSchema =
  Schema;
