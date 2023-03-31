import { z } from 'zod';
import { StudyGroupAnnouncementWhereUniqueInputObjectSchema } from './StudyGroupAnnouncementWhereUniqueInput.schema';
import { StudyGroupAnnouncementUpdateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUpdateWithoutAnnouncementInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            StudyGroupAnnouncementUpdateWithoutAnnouncementInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateWithoutAnnouncementInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInputObjectSchema =
  Schema;
