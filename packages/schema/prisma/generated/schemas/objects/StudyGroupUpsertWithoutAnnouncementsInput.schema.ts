import { z } from 'zod';
import { StudyGroupUpdateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUpdateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedUpdateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutAnnouncementsInput.schema';
import { StudyGroupCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateWithoutAnnouncementsInput.schema';
import { StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithoutAnnouncementsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StudyGroupUpdateWithoutAnnouncementsInputObjectSchema),
      z.lazy(
        () => StudyGroupUncheckedUpdateWithoutAnnouncementsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutAnnouncementsInputObjectSchema),
      z.lazy(
        () => StudyGroupUncheckedCreateWithoutAnnouncementsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const StudyGroupUpsertWithoutAnnouncementsInputObjectSchema = Schema;
