import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => StudyGroupAnnouncementUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
