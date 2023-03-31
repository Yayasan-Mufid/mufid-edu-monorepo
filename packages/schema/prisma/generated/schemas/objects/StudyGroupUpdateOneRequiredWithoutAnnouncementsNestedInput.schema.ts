import { z } from 'zod';
import { StudyGroupCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAnnouncementsInput.schema';
import { StudyGroupCreateOrConnectWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutAnnouncementsInput.schema';
import { StudyGroupUpsertWithoutAnnouncementsInputObjectSchema } from './StudyGroupUpsertWithoutAnnouncementsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUpdateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedUpdateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutAnnouncementsInputObjectSchema),
          z.lazy(
            () =>
              StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => StudyGroupCreateOrConnectWithoutAnnouncementsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => StudyGroupUpsertWithoutAnnouncementsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StudyGroupUpdateWithoutAnnouncementsInputObjectSchema),
          z.lazy(
            () =>
              StudyGroupUncheckedUpdateWithoutAnnouncementsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUpdateOneRequiredWithoutAnnouncementsNestedInputObjectSchema =
  Schema;
