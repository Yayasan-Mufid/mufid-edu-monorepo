import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutAnnouncementsInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutAnnouncementsInputObjectSchema),
        z.lazy(
          () => StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupCreateOrConnectWithoutAnnouncementsInputObjectSchema =
  Schema;
