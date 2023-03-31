import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementCreateOrConnectWithoutAnnouncementInputObjectSchema =
  Schema;
