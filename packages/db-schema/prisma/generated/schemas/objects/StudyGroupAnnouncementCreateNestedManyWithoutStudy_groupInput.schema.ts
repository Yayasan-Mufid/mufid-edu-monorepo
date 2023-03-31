import { z } from 'zod';
import { StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupAnnouncementCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateNestedManyWithoutStudy_groupInput> =
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
      createMany: z
        .lazy(
          () =>
            StudyGroupAnnouncementCreateManyStudy_groupInputEnvelopeObjectSchema,
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

export const StudyGroupAnnouncementCreateNestedManyWithoutStudy_groupInputObjectSchema =
  Schema;
