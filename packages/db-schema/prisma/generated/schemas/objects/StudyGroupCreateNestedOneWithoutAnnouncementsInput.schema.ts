import { z } from 'zod';
import { StudyGroupCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAnnouncementsInput.schema';
import { StudyGroupCreateOrConnectWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutAnnouncementsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutAnnouncementsInput> =
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
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const StudyGroupCreateNestedOneWithoutAnnouncementsInputObjectSchema =
  Schema;
