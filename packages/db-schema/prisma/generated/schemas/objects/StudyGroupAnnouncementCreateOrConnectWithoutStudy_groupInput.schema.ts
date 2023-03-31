import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutStudy_groupInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
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

export const StudyGroupAnnouncementCreateOrConnectWithoutStudy_groupInputObjectSchema =
  Schema;
