import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => StudyGroupAnnouncementUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
