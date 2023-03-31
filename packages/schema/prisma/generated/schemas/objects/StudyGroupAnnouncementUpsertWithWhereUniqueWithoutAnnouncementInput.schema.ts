import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUpdateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedCreateWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            StudyGroupAnnouncementUpdateWithoutAnnouncementInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInputObjectSchema,
        ),
      ]),
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

export const StudyGroupAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInputObjectSchema =
  Schema;
