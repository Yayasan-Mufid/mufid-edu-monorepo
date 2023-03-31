import { z } from 'zod';
import { StudyGroupAnnouncementScalarWhereInputObjectSchema } from './StudyGroupAnnouncementScalarWhereInput.schema';
import { StudyGroupAnnouncementUpdateManyMutationInputObjectSchema } from './StudyGroupAnnouncementUpdateManyMutationInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateManyWithoutAnnouncementsInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateManyWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAnnouncementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateManyWithoutAnnouncementsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementUpdateManyWithWhereWithoutStudy_groupInputObjectSchema =
  Schema;
